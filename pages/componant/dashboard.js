import React from 'react'
import { Chart } from "react-google-charts";
import Table from 'react-bootstrap/Table';
import Sidebar from './sidebar';


function Dashboard() {
 const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

 const datasecond = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];
  const options = {
    title: "My Daily Activities",
    is3D: true,
  };

  return (
    
    <>
    <Sidebar>
      <div className="container">
  <div className="row">
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-blue order-card">
        <div className="card-block">
          <h6 className="m-b-20">Orders Received</h6>
          <h2 className="text-right">
            <i className="fa fa-cart-plus f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Completed Orders<span className="f-right">351</span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-green order-card">
        <div className="card-block">
          <h6 className="m-b-20">Orders Received</h6>
          <h2 className="text-right">
            <i className="fa fa-rocket f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Completed Orders<span className="f-right">351</span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-yellow order-card">
        <div className="card-block">
          <h6 className="m-b-20">Orders Received</h6>
          <h2 className="text-right">
            <i className="fa fa-refresh f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Completed Orders<span className="f-right">351</span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-xl-3">
      <div className="card bg-c-pink order-card">
        <div className="card-block">
          <h6 className="m-b-20">Orders Received</h6>
          <h2 className="text-right">
            <i className="fa fa-credit-card f-left" />
            <span>486</span>
          </h2>
          <p className="m-b-0">
            Completed Orders<span className="f-right">351</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="flex-container">
  <div class="flex-item-left">

  <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  </div>
  <div class="flex-item-right">
  <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={datasecond}
      options={options}
    />

  </div>
  <div class="flex-item-right">
    <Table  striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      
      </tbody>
    </Table>
  </div>
</div>
</Sidebar>


    </>
  )
}

export default Dashboard