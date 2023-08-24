import React,{useState} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';



const Productdescruption = (pro) => {
console.log("first",pro)
  const [data, setData] = useState([])
    
const getProductDescription=async()=>{ 
      // console.log(props.pro,'here')
     let response = await axios.get(`http://localhost:5555/get_product_description?product_id=${pro.product_id}`,)
     console.log(prp.product_id,"hiii")
     setData(response.data)
    console.log("daataa",response.data)
    console.log("daataa2",response)
   
}
getProductDescription()

    
  return (
   <>
   <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product_id</th>
          <th>Description </th>
          <th>Colour</th>
          <th>Size</th>
          <th>Weight</th>
          <th>Manufacturing</th>
          <th>Expiry_date</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item) => {
                return (
                  <tr>
                    <td>{item.product_id}</td>
                    {/* <td>{item.password}</td> */}
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

    
     
   </>
  )
}

export default Productdescruption








