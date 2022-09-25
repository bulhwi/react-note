import React from "react";
import { Col, Row, Typography } from "antd";
import Settings from "../component/Settings";
import SearchInput from "./SearchInput";

const Search = () => {
  const logout = () => {
    console.log("logout");
  };
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={logout} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: "Caligrahhy" }}>
            찾아야한다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12}>
          <SearchInput />
        </Col>
      </Row>
    </>
  );
};

export default Search;
