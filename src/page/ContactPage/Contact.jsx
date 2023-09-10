import React, { useEffect } from "react";
import { Row, Col, Card, Input } from "antd";
const { Search } = Input;
import HeaderUI from "../../component/Header.jsx/Header";
import { useNavigate } from "react-router-dom";

export default function () {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const localDataP = localStorage.getItem("password");
    if (!localDataP) {
      navigate("/login");
    }

    const localData = localStorage.getItem("data");
    if (localData) {
      setData(JSON.parse(localData));
    }
    fetchData();
  }, []);
  const fetchData = async () => {
    fetch(
      "https://cprdata-np-default-rtdb.asia-southeast1.firebasedatabase.app/data/.json"
    )
      .then((res) => res.json())
      .then(async (res) => {
        const array = await Object.values(res);
        console.log(array);
        setData(array);
        const data = await JSON.stringify(array);
        await localStorage.setItem("data", data);
      });
  };

  //   useEffect(() => {
  //     let timer = null;
  //   }, [search]);
  return (
    <Row>
      <HeaderUI />
      <Col span={24}>
        <Row span={24} className="p-2">
          <Search
            placeholder="search contact"
            allowClear
            autoComplete="off"
            onChange={(e) => {
              setSearch((e.target.value).toLowerCase());
            }}
            style={{ width: "100%", maxWidth: 500, margin: "auto" }}
            enterButton="Search"
          />
        </Row>
        <Row span={24}>
          {data
            .filter(
              ({ name, phone, position, department }) =>
                (name)?.toLowerCase().includes(search) ||
                !(search) ||
                (phone)?.toLowerCase().includes(search) || 
                (position)?.toLowerCase().includes(search) ||
                (department)?.toLowerCase().includes(search)
            )
            .map((item, index) => {
              return (
                <Col className="p-2" xs={24} sm={12} lg={12} xxl={8}>
                  <Card key={String(item.phone)} className="b-r-10 m-auto">
                    <p className="m-0">
                      <b style={{ fontSize: 18 }}>{item.name}</b>-
                      {item.department}
                    </p>
                    <p className="m-0">
                      <a href={`tel:${item.phone}`}>{item.phone}</a>-
                      {item.position}
                    </p>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Col>
    </Row>
  );
}
