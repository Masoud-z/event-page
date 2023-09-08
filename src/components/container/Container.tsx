import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

const { Header, Content, Footer, Sider } = Layout;

function Container(props: any) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Main>{props.children}</Main>
    </Layout>
  );
}

export default Container;
