import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "./sidebar";


/////////////////get-methord////////////////////////



function Description() {
  console.log(props.pro,'here')
  const [data, setData] = useState([]);

  useEffect(() =>{
    const getdescription = async() =>{
      const response = await axios.get("http://localhost:5555/get_product_description/${props.pro}")
      setData(response.data)
      
    }
    getdescription();
    
  },[])
 
  return (
    <>
      <Sidebar>
        <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>
          Description
        </h3>

        <div style={{ marginTop: "10px", marginLeft: "10px", width: "1000px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>product_Id</th>
              <th>Description</th>
              <th>Colour</th>
              <th>Size</th>
              <th>Weight</th>
              <th>Manufacturing Date</th>
              <th>Expiey Date</th>
            </tr>
          </thead>
          {/* <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.product_id}</td>
                  <td>{item.description}</td>
                  <td>{item.colour}</td>
                  <td>{item.size}</td>
                  <td>{item.weight}</td>
                  <td>{item.manufacturing_date}</td>
                  <td>{item.expiry_date}</td>
               </tr>
              );
            })}
          </tbody> */}

          <tbody>
              {data.map((item) => {
                return (
                  <tr>
                  <td>{item.product_id}</td>
                  <td>{item.description}</td>
                  <td>{item.colour}</td>
                  <td>{item.size}</td>
                  <td>{item.weight}</td>
                  <td>{item.manufacturing_date}</td>
                  <td>{item.expiry_date}</td>
                   </tr>
                );
              })}
            </tbody>
        </Table>
        </div>
      </Sidebar>
    </>
  );
}

export default Description



