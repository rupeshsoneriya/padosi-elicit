import { useMutation } from "react-query";
import instance from "service/axiosInstance";

const post = async ({ url, payload, token = false, file = false, customHeaders = {} }) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    const accessToken = localStorage.getItem('token')
    headers = { 'JCMS-API-TOKEN': accessToken }
  }
  if(Object.keys(customHeaders).length > 0) {
    headers = {...headers, ...customHeaders}
  }
  if (file) {
    headers = { ...headers, "Content-Type": "image/jpeg" };
  }
  const { data } = await instance.post(url, payload, { headers:headers, responseType: file ? "blob" : "json" })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.dir(e, { depth: null });
      throw e;
    });
  return data;
};

const usePost = () => useMutation(post);

export default usePost;
