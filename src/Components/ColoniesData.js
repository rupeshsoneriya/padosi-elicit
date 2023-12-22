import React, { useState } from "react";
import "./ColoniesData.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function ColoniesData() {



 const [updateColoniesList, setupdateColoniesList] = useState()
  let ColoniesDetails = JSON.parse(localStorage.getItem("ColonyDetails"))
  const navigation = useNavigate()





  
  // const [currentPage, setCurrentPage] = useState(1)
  // const recordPerPage = 4
  // const lastIndex = currentPage * recordPerPage
  // const firstIndex = recordPerPage - lastIndex
  // const records = ColoniesDetails.slice(firstIndex, lastIndex)

  // const numPage = Math.ceil(ColoniesDetails.length / recordPerPage)
  // const numbers = [...Array(numPage + 1).keys()].slice(1)

  // const prePage = () => {
  //   if (currentPage !== firstIndex) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }
  // const nextPage = () => {
  //   if (currentPage !== lastIndex) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }
  // const changCPage = (id) => {

  //   setCurrentPage(id)
  // }

  const deleteData = (id) => {
    // let result = window.confirm("Are you sore delete data")
    // if (result === true) {

    //   const updateData = ColoniesDetails.filter((data, ind) => {
    //     return (
    //       ind !== id
    //     )
    //   })
    //   window.localStorage.setItem("ColonyDetails", JSON.stringify(updateData))
    //   console.log(updateData, "updataedata")
    //   setupdateColoniesList(updateData)
    // }

  }
  const editData = (id) => {
    // let conformation = window.confirm("Are you conform Edit Details")
    // if (conformation === true) {

    //   const editData = ColoniesDetails.filter((data, ind) => {
    //     return (
    //       ind === id
    //     )
    //   })
    //   window.localStorage.setItem("editDetails", JSON.stringify(editData))
    //   window.localStorage.setItem("updateid", JSON.stringify(id))


    //   navigation('/EditDetails')

    // }

  }
  return (
    <div className="StudentData">
      <div className="StudentData-header">
        <div className="heading">
          <h2>Registerd Colony </h2>

          <button className="add-btn" onClick={() => navigation('/AddnewColonies')} >Add NEW COLONY</button>
        </div>
        <hr />
      </div>
      <div className="student-data">

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Colony Logo</th>
              <th scope="col">Colony Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">RERA No.</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          {/* {ColoniesDetails !== null ?
            // <tbody>


            //   {updateColoniesList == null ? records.map((data, ind) => {
            //     return (
            //       <tr className="data" key={ind}>
            //         <img src={data.Colonylogo} />
            //         <td className="td">{data.Colonyname}</td>
            //         <td className="td">{data.Email}</td>
            //         <td className="td">{data.Phone}</td>
            //         <td className="td">{data.RegisterationDate}</td>
            //         <td className="td">{data.RERAnumber}</td>
            //         <td className="td">Active</td>  
            //         <td className="td">
            //           <button className="delete-edit-btn" onClick={() => deleteData(ind)}>
            //             <FontAwesomeIcon icon={faTrash} />
            //           </button>
            //           <button className="delete-edit-btn" onClick={() => editData(ind)}>
            //             <FontAwesomeIcon icon={faPenToSquare} />
            //           </button>
            //         </td>
            //       </tr>
            //     )
            //   }) : updateColoniesList.map((data, ind) => {
            //     return (
            //       <tr className="data" key={ind}>
            //         <img src={data.Colonylogo} />
            //         <td className="td">{data.Colonyname}</td>
            //         <td className="td">{data.Email}</td>
            //         <td className="td">{data.Phone}</td>
            //         <td className="td">{data.RegisterationDate}</td>
            //         <td className="td">{data.RERAnumber}</td>
            //         <td className="td">Active</td>
            //         <td className="td">
            //           <button className="delete-edit-btn" onClick={() => deleteData(ind)}>
            //             <FontAwesomeIcon icon={faTrash} />
            //           </button>
            //           <button className="delete-edit-btn" onClick={() => editData(ind)}>
            //             <FontAwesomeIcon icon={faPenToSquare} />
            //           </button>
            //         </td>
            //       </tr>
            //     )
            //   })}

            // </tbody>
            : <td>No Record found</td>} */}
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              {/* <a href="#" className="page-link" onClick={prePage}>Prev</a> */}
            </li>
            {/* {

              numbers.map((n, i) => (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                  <a href="#" className="page-link" onClick={() => changCPage(n)}>{n}</a>
                </li>
              ))

            } */}

            <li className="page-item">
              {/* <a href="#" className="page-link" onClick={nextPage}>Next</a> */}
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
}
