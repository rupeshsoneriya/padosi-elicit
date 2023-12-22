import React from "react";
import "./ColoniesData.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const navigation = useNavigate()
  let paymentList 
  const [currentPage, setCurrentPage] = useState(1);
  // const recordPerPage = 10
  // const lastIndex = currentPage * recordPerPage
  // const firstIndex = recordPerPage - lastIndex
  // const records = paymentList.slice(firstIndex, lastIndex)
  // const numPages = Math.ceil(paymentList.length / recordPerPage)
  // const numbers = [...Array(numPages + 1).keys()].slice(1)

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

  return (

    <div className="StudentData">
      <div className="StudentData-header">
        <div className="heading">
          <h2>Payment List</h2>

          <button className="add-btn" onClick={() => navigation("/AddPayment")}  >Add NEW PAYMENT</button>
        </div>
        <hr />
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">COLONIES</th>
            <th scope="col">RERA No.</th>
            <th scope="col">DATE</th>
            {/* <th scope="col">Total Amount</th> */}
            <th scope="col">PAID AMOUNT</th>

          </tr>
        </thead>
        
        {/* <tbody>
         { records!==null && records!==undefined ?  records.map((data, index) => {
            return (<tr>
              <td>{data.ColoniesName}</td>
              <td>{data.PaidAmount}</td>
              <td>{data.PaidDate}</td>
              <td>{data.RERAnumber}</td>
            </tr>)
          }): <h1>Not Record foun</h1>}

        </tbody> */}
      
      </table>
      {/* <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>Prev</a>
          </li>{
           paymentList !==undefined && paymentList!==null?
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a href="#" className="page-link" onClick={() => changCPage(n)}>{n}</a>
              </li>
            ))
            :<>  .</>
          }

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>Next</a>
          </li>

        </ul>
      </nav> */}
    </div>
  );
}
