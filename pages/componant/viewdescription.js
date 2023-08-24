import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import {AiFillEye } from "react-icons/ai";
// import moment from "moment";

function Viewdescription(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  const getDescription = async () => {
    console.log(props.pro, "here");
    const res = await axios.get(`http://localhost:5555/get_product_description/${props.pro}`);
    setData(res.data);
    console.log(res.data, "done");
    handleShow();
  };

  return (
    <>
      {/* <Button variant="primary" onClick={(e) => getDescription()}>
        View
      </Button> */}
      <AiFillEye style={{ height:"25px",width:"25px"}}
        onClick={(e) => getDescription()}/>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#808080" }}>
          <Modal.Title>View Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product_id</th>
                <th>Description</th>
                <th>Color</th>
                <th>Size</th>
                <th>Weight</th>
                <th>Manufacturing Date</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.product_id}</td>
                    <td>{value.description}</td>
                    <td>{value.colour}</td>
                    <td>{value.size}</td>
                    <td>{value.weight}</td>
                    <td>{value.manufacturing_date}</td>
                    <td>{value.expiry_date}</td>
                </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Viewdescription;
