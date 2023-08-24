import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsFillPlusSquareFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';

function Adddescription() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
     
      {/* <Button onClick={() => setLgShow(true)}>Add</Button> */}
      <BsFillPlusSquareFill style={{ height:"20px",width:"20px"}}
      onClick={() => setLgShow(true)} />
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Description
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

export default Adddescription;