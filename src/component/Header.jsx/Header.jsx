import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Col } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const menu_list = [
  { name: "Contacts", url: "/contacts" },
  { name: "Add Staff", url: "/add_staff" },
];

export default function HeaderUI() {
  const [current, setCurrent] = React.useState("");
  return (
    <Col span={24}>
      <Header>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[current]}
          onClick={({ key }) => setCurrent(key)}
          style={{ lineHeight: "64px" }}
          items={menu_list.map(({ name, url }, index) => {
            return {
              key: name,
              label: <Link to={url}>{name}</Link>,
            };
          })}
        />
      </Header>
    </Col>
  );
}
