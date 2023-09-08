import React from "react";
import { Breadcrumb, Layout } from "antd";
import HeadBar from "../header/HeadBar";

const { Header, Content, Footer } = Layout;

function Main(props: any) {
  return (
    <Layout style={{ backgroundColor: "#f6f8fb" }}>
      <HeadBar setCollapsed={props.setCollapsed} collapsed={props.collapsed} />
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Events</Breadcrumb.Item>
        </Breadcrumb>
        {props.children}
      </Content>
    </Layout>
  );
}

export default Main;
