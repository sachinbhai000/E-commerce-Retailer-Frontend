import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FcSupport, FcPlus, FcDeleteColumn } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Addproduct from "./addproduct";
// import Addcategory from "../Categery/Addcategery";
// import Updatecategory from "../Categery/Updatecategery";
// import Roleassign from "../User/Roleassign";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Sidebar from "./sidebar";
import Updateproduct from "./updateproduct";
import { AiFillEye } from "react-icons/ai";
import Productdescruption from "./productdescruption";
import Viewdescription from "./viewdescription";
import Adddescription from "./adddescription";

/////////////////get-methord////////////////////////

function Viewproduct() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //===================== Update model ======================//

  const [showes, setShowes] = useState();
  const handleClose1 = () => setShowes(false);
  const handleShow2 = () => setShowes(true);


  
  const fetchData = async () => {
    const api = await axios.get("http://localhost:5555/productshow", {
      withCredentials: true,
      credentials: "include",
    });
    console.log("dataapi", api.data);
    setUser(api.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <>
      <Sidebar>
        <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>
          Product
        </h3>
        <Button
          variant="info"
          style={{ marginLeft: "900px" }}
          onClick={handleShow}
        >
          Add Product
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Addcategory /> */}
            <Addproduct />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div style={{ marginTop: "10px", marginLeft: "10px", width: "1000px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product ID</th>
                {/* <th>password</th> */}
                <th>Retailer_id</th>
                <th>Price</th>
                {/* <th>Gst</th> */}
                <th>Available Quantity</th>
                <th>Sub Category</th>
                <th>Item Name</th>
                <th>Company Name</th>
                <th>Product Image</th>
                <th>Action</th>
                <th>Product Description</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item) => {
                return (
                  <tr>
                    <td>{item.product_id}</td>
                    {/* <td>{item.password}</td> */}
                    <td>{item.retailer_id}</td>
                    <td>{item.price}</td>
                    <td>{item.available_quantity}</td>
                    <td>{item.sub_categoryid}</td>
                    <td>{item.item_name}</td>
                    <td>{item.company_name}</td>
                    <td>
                      <img
                        src={item.product_image}
                        style={{ width: "80px", height: "70px" }}
                      />
                    </td>
                    <td>
                      <AiFillEdit style={{width:"20px",height:"20px"}}
                        onClick={handleShow2} />
                      <Modal show={showes} onHide={handleClose1}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                       <Updateproduct />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose1}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                    {/* <td> <AiFillEye  style={{width:"25px",height:"25px"}}/></td> */}
                    <td>
                   {<Viewdescription pro={item.product_id} />}
                   {/* <Adddescription /> */}
                    </td>
                    

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

export default Viewproduct;

