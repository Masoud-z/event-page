import React, { useState } from "react";
import { Link, Outlet } from "umi";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SideBar from "@/components/SideBar/SideBar";
import Main from "@/components/Main/Main";
const { Header, Content, Footer, Sider } = Layout;

export default function () {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} />
      <Main setCollapsed={setCollapsed} collapsed={collapsed}>
        <Outlet />
      </Main>
    </Layout>
  );
}
