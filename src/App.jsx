import "./App.css";
import { Layout } from "antd";
import HeaderUI from "./component/Header.jsx/Header";
import { Col, Input, Row } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const localData = localStorage.getItem("password");
    if (localData) {
      navigate("/contacts");
    } else {

      if (password == 9595097878) {
        localStorage.setItem("password", true);
        navigate("/contacts");
      }
    }
  }, [password]);
  return (
    <>
      <Layout className="layout W-100">
        <HeaderUI />
      
        <Row className="h-100 " span={24}>
          <Col span={24} className="bg-color h-100"> 
           <div className="mb-8" />
            <Col sx={22} md={16} lg={12} xxl={8} className="m-auto mb-1">
              <label htmlFor="phone">Add Password</label>
              <Input
                type="password"
                name="login"
                id="login"
                placeholder="Add Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Col>
            <div className="mb-8" />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default App;
