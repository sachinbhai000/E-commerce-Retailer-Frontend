import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Loginpage() {
  const [retailer_id, setRetailer] = useState("");
  const [password, setPassword] = useState("");
 
  axios.defaults.withCredentials = true;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { retailer_id, password };

    console.log(credentials);
    axios.defaults.withCredentials = true
    const apidata = await axios.post(
      `http://localhost:5555/api/getopenshoplogin?retailer_id=${retailer_id}&password=${password}` 
    );
    //  console.log("api", api.data)
    console.log("first", apidata.data.token);
    console.log("hhhhhhhhh", apidata);
    if (apidata.status === 200) {
      //  console.log("api.data.response")
      const owner_name = apidata.data.user.owner_name;
      const retailer_id = apidata.data.user.retailer_id;
      const token = apidata.data.token;

      // sessionStorage.setItem("retailer_id", retailer_id);
      // // sessionStorage.setItem("shop_name", owner_name);
      // sessionStorage.setItem("token", token);
      router.push("/componant/sidebar");
    } else {
      alert("apidata.data.response");
    }
  };
  return (
    <>
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">
                          Login
                        </h3>
                      </div>
                      <h6 className="h5 mb-0">Welcome back!</h6>
                      <p className="text-muted mt-2 mb-5">
                        Enter your email address and password to access admin
                        panel.
                      </p>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Retailer Id
                          </label>
                          <input
                            type="text"
                            name="retailer_id"
                            placeholder="01"
                            id="retailer_id"
                            onChange={(e) => setRetailer(e.target.value)}
                            required
                          />
                        </div>
                        <br />
                        <div className="form-group mb-5">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="text"
                            name="password"
                            placeholder="********"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          value="Log In"
                          onClick={handleSubmit}
                          className="btn btn-theme"
                        >
                          Login
                        </button>
                        <a
                          href="#l"
                          className="forgot-link float-right text-primary"
                        >
                          Forgot password?
                        </a>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right">
                      <div className="overlay rounded-right" />
                      <div className="account-testimonial">
                        <h4 className="text-white mb-4">
                          This beautiful theme yours!
                        </h4>
                        <p className="lead text-white">
                          "Best investment i made for a long time. Can only
                          recommend it for other users."
                        </p>
                        <p>- Admin User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-body */}
            </div>
            {/* end card */}
            <p className="text-muted text-center mt-3 mb-0">
              Don't have an account?{" "}
              <Link href="/componant/sinup"> Sign Up</Link>
            </p>
            {/* end row */}
          </div>
          {/* end col */}
        </div>
        {/* Row */}
      </div>
    </>
  );
}

export default Loginpage;
