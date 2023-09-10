import React, { useEffect } from "react";
import { Col, Row, Layout, Input, Button, Spin } from "antd";
const { Content } = Layout;
import HeaderUI from "../../component/Header.jsx/Header";
import { END_POINT } from "../../Auth/URLS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import firebase from "firebase/app";
// Required for side-effects
// import "firebase/firestore";
// import * as firebase from "firebase/app";

export default function AddStafPage() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const AddStaff = () => {
    if (checkInput() && !loading) {
      setLoading(true);
      const payload = {
        name: name,
        phone: phone,
        department: department,
        position: position,
      };
      axios
        .post(
          `https://cprdata-np-default-rtdb.asia-southeast1.firebasedatabase.app/data/.json`,
          { ...payload }
        )
        .then((res) => {
          console.log(res);
          alert("Add Staff Success");
          setLoading(false);
          navigate("/contacts");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  const checkInput = () => {
    if (name === "") {
      alert("Please input name");
      return false;
    }
    if (phone === "") {
      alert("Please input phone");
      return false;
    }
    if (department === "") {
      alert("Please input department");
      return false;
    }
    return true;
  };

  useEffect(() => {
    const localDataP = localStorage.getItem("password");
    if (!localDataP) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <HeaderUI />
      <Row className="h-100 " span={24}>
        <Col span={24} className="bg-color">
          <h1 className="flex-center mb-8">Add Staff</h1>
          <Col span={24} className="p-2">
            <Col sx={22} md={16} lg={12} xxl={8} className="m-auto mb-1">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Niranjan Patil"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Col>
            <Col sx={22} md={16} lg={12} xxl={8} className="m-auto mb-1">
              <label htmlFor="phone">Phone</label>
              <Input
                type="text"
                name="phone"
                placeholder="9595097878"
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Col>
            <Col sx={22} md={16} lg={12} xxl={8} className="m-auto mb-1">
              <label htmlFor="department">Department</label>
              <Input
                type="text"
                name="department"
                placeholder="Eye Care"
                id="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              />
            </Col>
            <Col sx={22} md={16} lg={12} xxl={8} className="m-auto mb-4">
              <label htmlFor="position">Position</label>
              <Input
                type="text"
                name="position"
                placeholder="Doctor/Brother/Sister/..."
                id="position"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </Col>
            <Col span={8} className="m-auto">
              <Row className="flex-center mb-8">
                <Button onClick={AddStaff}>
                  {loading ? <Spin /> : "Add New Staff"}
                </Button>
              </Row>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  );
}
