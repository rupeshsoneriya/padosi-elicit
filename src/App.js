import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import PrivateLayout from "Components/Layout/PrivateLayout";
import AddPayment from "Components/AddPayment";
import Register from "Components/Register";
import SignIn from "Components/Sign_in";
import ColoniesData from "Components/ColoniesData";
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardData from "Components/DashboardData";
import EditDetails from "Components/EditDetails";
import Payment from "Components/Payment";
import AddnewColonies from "Components/AddnewColonies"
import { AxiosInterceptor } from "service/axiosInstance";


const queryClient = new QueryClient();

export const RenderRoutes = () => {
  const accessToken = localStorage.getItem('token')
  console.log(accessToken,"tokern")
  if (accessToken != null) {
    console.log('fkfkjfjfjfjfjfjf')
    return (
      <Routes>
        <Route path="/" element={<PrivateLayout><DashboardData /></PrivateLayout>}> </Route>
        {/* <Route path="/Dashboard" element={<Dashboard />}> </Route> */}
        <Route path="/AddPayment" element={<PrivateLayout><AddPayment /></PrivateLayout>}></Route>
        <Route path="/ColoniesData" element={<PrivateLayout><ColoniesData /></PrivateLayout>}></Route>
        <Route path="/Payment" element={<PrivateLayout><Payment /></PrivateLayout>}></Route>
        <Route path="/EditDetails" element={<PrivateLayout><EditDetails /></PrivateLayout>}> </Route>
        <Route path="/AddnewColonies" element={<PrivateLayout><AddnewColonies/></PrivateLayout>}> </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    )
  } else {
    console.log('bloddy')
    return (
      <Routes>
        <Route path="/" element={<SignIn />}> </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    )
  }
}

function App() {
    let token= localStorage.getItem('token')
     console.log(token)
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AxiosInterceptor>
    <div className="App">
      <RenderRoutes />
    </div>
    </AxiosInterceptor>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
