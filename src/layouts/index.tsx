import { useEffect, useState } from "react";
import { Outlet } from "umi";
import { Layout } from "antd";
import SideBar from "@/components/SideBar/SideBar";
import Main from "@/components/Main/Main";

export default function () {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 950) {
      setCollapsed(true);
    }
  }, []);
  // const roote =
  console.log(window.location.href);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} />
      <Main setCollapsed={setCollapsed} collapsed={collapsed}>
        <Outlet />
      </Main>
    </Layout>
  );
}
