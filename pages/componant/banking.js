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

/////////////////get-methord////////////////////////

function Viewbanking() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //===================== Update model ======================//

  const [showes, setShowes] = useState();
  const handleClose1 = () => setShowes(false);
  const handleShow2 = () => setShowes(true);

  // const navigate = useNavigate();

  const fetchData = async () => {
    const api = await axios.get("http://localhost:5555/getbanking", {
      withCredentials: true,
      credentials: "include",
    });
    console.log("dataapi", api.data);
    setUser(api.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //////////////delete-methord//////////////////////

  function deleteUser(category_id) {
    // alert(id);
    fetch(`http://localhost:5555/api/productDelete/${category_id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getList();
      });
    });
  }

  return (
    <>
      <Sidebar>
        <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>
          Banking
        </h3>
        {/* <Button
          variant="info"
          style={{ marginLeft: "900px" }}
          onClick={handleShow}
        >
          Add Product
        </Button> */}

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
            <th>Retailer Id</th>
              <th>Bnak Name</th>
              <th>Bank Account No</th>
              <th>IFSC</th>
              <th>Account Holder Name</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <tr key={index}>
                 <td>{item.retailer_id}</td>
                  <td>{item.bank_name}</td>
                  <td>{item.bank_account_no}</td>
                  <td>{item.ifsc_code}</td>
                  <td>{item.account_holder_name}</td>
                  <td>{item.branch}</td>
              
                 
                </tr>
              );
            })}
          </tbody>
        </Table>
          {/* <div>
        <input type="text" value={user_id} onChange={(e)=>setUser_id(e.target.value)}/>
        <br />
        <br />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />
        <input type="text" value={user_name} onChange={(e)=>setUser_name(e.target.value)}/>
        <br />
        <br />
        <button onClick={UpdateUser}>updateUser</button>
      </div> */}
        </div>
      </Sidebar>
    </>
  );
}

export default Viewbanking;

