import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
import Link from "next/link";
import NavDropdown from 'react-bootstrap/NavDropdown';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link href={"/componant/dashboard"}>Dashboard</Link>,
    "1",
    <PieChartOutlined />
  ),
  getItem(
    <Link href={"/componant/product"}>Product</Link>,
    "2",
    <DesktopOutlined />
  ),

  getItem(
    <Link href={"/componant/banking"}>Banking</Link>,
    "3",
    <DesktopOutlined />
  ),

  // getItem(
  //   <Link href={"/componant/description"}>Description</Link>,
  //   "4",
  //   <DesktopOutlined />
  // ),

  getItem(
    <Link href={"/componant/reating"}>Reating</Link>,
    "5",
    <DesktopOutlined />
  ),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem(
  //   <Link href={"/componant/productdescruption"}>ProductDescruption</Link>,
  //   "3",
  //   <FileOutlined />
  // ),
  // getItem(
  //   <Link href={"/componant/reatalorbanking"}>RetailorBanking</Link>,
  //   "4",
  //   <FileOutlined />
  // ),
  getItem(
    <Link href={"/componant/booking"}>Booking</Link>,
    "5",
    <FileOutlined />
  ),
];
const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
    
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      
      <Layout>
        <Header
      
        
          style={{
            padding: 0,
            background: colorBgContainer,
            backgroundColor: "#02202b",
          }}
       >
       <div className="d-flex">
        <h3 style={{marginLeft:"810px", color:"white"}}>Welcome-Sachin </h3>
        <div>
          <button >Logout</button>
        </div>
        </div>
        </Header>
        
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 600,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default Sidebar;
