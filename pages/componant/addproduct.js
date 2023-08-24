import React,{useState} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Addproduct = () => {
    const [product_id, setProductId] = useState('')
    // const [retailer_id, setRetailer_id] = useState('')
    const [price, setPrice] = useState('')
    const [available_quantity, setAvailable_quantity] = useState('')
    const [sub_categoryid , setsub_categoryid] = useState('')
    const [item_name, setItem_name  ] = useState('')
    const [company_name, setCompany_name  ] = useState('')
    const [product_image ,setProduct_image ] = useState('')
    // const [gst, setGst] = useState('')
    const handleImage = (e) =>{
      setProduct_image(e.target.files[0])
    }

    const submitData = async(e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('product_id',product_id);
        // formData.append('retailer_id',retailer_id);
        formData.append('price',price);
        formData.append('available_quantity',available_quantity);
        formData.append('sub_categoryid',sub_categoryid);
        formData.append('item_name',item_name);
        formData.append('company_name',company_name);
        formData.append('product_image',product_image);
        console.log(product_image ,"product_image")
        console.log(formData,"formData")
        // formData.append('gst', gst);
        const configs = {
          headers: {
              'content-type': 'multipart/form-data',
          },
          withCredentials: true,
      }
        const apiData = await axios.post("http://localhost:5555/productadd", formData, configs)
        console.log(apiData, 'apidatade4')
        setProductId('')
        setRetailer_id('')
        setPrice('')
        setAvailable_quantity('')
        setsub_categoryid('')
        setItem_name('')
        setCompany_name('')
        setProduct_image ('')
        // setGst('')
    }
  return (
   <>
   <div className='container'>
   <Form onSubmit={submitData} >
      <Form.Group className="mb-3">
        <Form.Label htmlFor='product_id'>Product Id</Form.Label>
        <Form.Control name='product_id' id='product_id' type='text' value={product_id} onChange={(e) => setProductId(e.target.value)}/>
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label htmlFor='retailer_id'>Retailer ID</Form.Label>
        <Form.Control  name='retailer_id' id='retailer_id' type='text' value={retailer_id} onChange={(e) => setRetailer_id(e.target.value)} />
      </Form.Group> */}

      <Form.Group className="mb-3">
        <Form.Label htmlFor='price'>Price</Form.Label>
        <Form.Control  name='price' id='price' type='text' onChange={(e) => setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='available_quantity'>Available_quantity</Form.Label>
        <Form.Control  name='available_quantity' id='available_quantity' type='text' value={available_quantity} onChange={(e) => setAvailable_quantity (e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor=' sub_categoryid'> Sub_categoryid </Form.Label>
        <Form.Control  name=' sub_categoryid ' id='sub_categoryid ' type='text' value={sub_categoryid } onChange={(e) =>setsub_categoryid(e.target.value)} />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label htmlFor='item_name'>Item Name</Form.Label>
        <Form.Control  name='item_name' id='item_name' type='text' value={item_name} onChange={(e) =>setItem_name(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor=' company_name'>Company Name</Form.Label>
        <Form.Control  name='company_name' id='company_name' type='text' value={company_name} onChange={(e) =>setCompany_name(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='item_name'>Product Image</Form.Label>
        <Form.Control  name=' product_image ' id='product_image' type='file' defaultValue={product_image} onChange={handleImage} />
      </Form.Group>

    <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


   </div>


 
   </>
  )
}

export default Addproduct





