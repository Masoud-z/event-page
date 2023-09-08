import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import HeadBar from "../header/HeadBar";

const { Header, Content, Footer } = Layout;

function Main(props: any) {
  // const roote =
  console.log(window.location.href);
  return (
    <Layout style={{ backgroundColor: "#f6f8fb" }}>
      <HeadBar setCollapsed={props.setCollapsed} collapsed={props.collapsed} />
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        {props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Main;
