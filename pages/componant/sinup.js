
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';

function Sinup() {
  const[retailer_id, setRetailer_id] = useState("")
  const[shop_name, setShop_name] = useState("")
  const[password , setPassword] = useState("")
  const[owner_name, setOwner_name] = useState("")
  const[registration_document, setRegistration_document] = useState("")
  const[profile_photo, setProfile_photo] = useState("")
  const[gst_no, setGst_no] = useState("")
  const[registration_no , setRegistration_no] = useState("")
  const[pan_no, setPan_no] = useState("")
  const[address, setAddress] = useState("")
  const[state, setState] = useState("")
  const[city, setCity] = useState("")
  const[pincode, setPincode ] = useState("")
  const[contact_no, setContact_no] = useState("")
  const[email, setEmail] = useState("")
  const[status, setStatus] = useState("")

  function saverole(){
    let data={retailer_id, shop_name, password, owner_name, registration_document, profile_photo, gst_no, registration_no, pan_no, address, state, city, pincode, contact_no, email, status }
    fetch("http://localhost:5555/api/addRetaile",{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log("result",result);
      result.json().then((resp)=>{
       console.log("resp",resp)
      })
    })
  }

  
  return (
    <>
      <>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
  <div className="container register">
    <div className="row">
      <div className="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
        <h3>Welcome</h3>
        <p>You are 30 seconds away from earning your own money!</p>
        <input onClick={saverole} type="submit" name="" defaultValue="Login" />
        <br />
      </div>
      <div className="col-md-9 register-right">
        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
          {/* <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Employee
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Hirer
            </a>
          </li> */}
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h3 className="register-heading">Apply as a Retailer</h3>
            <div className="row register-form">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    value={retailer_id}
                    onChange={(e) =>{setRetailer_id(e.target.value)}}
                    name='retailer_id'
                    className="form-control"
                    placeholder="Retailer Id *"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={shop_name}
                    onChange={(e) =>{setShop_name(e.target.value)}}
                    name='shop_name'
                    placeholder="ShopName *"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>{setPassword(e.target.value)}}
                    name='password'
                    placeholder="Password *"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={owner_name}
                    onChange={(e) =>{setOwner_name(e.target.value)}}
                    placeholder="OwnerName *"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  {/* <div className="maxl">
                    <label className="radio inline">
                      <input
                        type="radio"
                        name="gender"
                        defaultValue="male"
                        defaultChecked=""
                      />
                      <span> Male </span>
                    </label>
                    <label className="radio inline">
                      <input type="radio" name="gender" defaultValue="female" />
                      <span>Female </span>
                    </label>
                  </div> */}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={registration_document}
                    onChange={(e) =>{setRegistration_document(e.target.value)}}
                    name='registration_document'
                    placeholder="Registration_document"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={profile_photo}
                    onClick={(e) =>{setProfile_photo(e.target.value)}}
                    name='profile_photo'
                    placeholder="Profile Photo"
                    defaultValue=""
                  />
                </div>
                   
              

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={gst_no}
                    onClick={(e) =>{setGst_no(e.target.value)}}
                    name='gst_no'
                    placeholder="GST NO"
                    defaultValue=""
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={registration_no}
                    onClick={(e) =>{setRegistration_no(e.target.value)}}
                    name='registration_no'
                    placeholder="Registration NO"
                    defaultValue=""
                  />
                </div>


              </div>
              <div className="col-md-6">
              
               
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={pan_no}
                    onClick={(e) =>{setPan_no(e.target.value)}}
                    name='pan_no'
                    placeholder="PAN NO"
                    defaultValue=""
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onClick={(e) =>{setAddress(e.target.value)}}
                    name='address '
                    placeholder="Address"
                    defaultValue=""
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={state}
                    onClick={(e) =>{setState(e.target.value)}}
                    name='state'
                    placeholder="State"
                    defaultValue=""
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={city}
                    onClick={(e) =>{setCity(e.target.value)}}
                    name='city'
                    placeholder="CITY"
                    defaultValue=""
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={pincode}
                    onClick={(e) =>{setPincode(e.target.value)}}
                    name='pincode'
                    placeholder="PIN CODE"
                    defaultValue=""
                  />
                </div>
             
               
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={contact_no}
                    onClick={(e) =>{setContact_no(e.target.value)}}
                    name='contact_no'
                    placeholder="Contact_no"
                    defaultValue=""
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onClick={(e) =>{setEmail(e.target.value)}}
                    name='email'
                    placeholder="Email"
                    defaultValue=""
                  />
                </div>


                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={status}
                    onClick={(e) =>{setStatus(e.target.value)}}
                    name='status'
                    placeholder="Status"
                    defaultValue=""
                  />
                </div>
               
              </div>
            </div>
          </div>
         
          
               
            
              
           
              
              </div>
            </div>
          </div>
        </div>
</>

    </>
  )
}
export default Sinup