import React, { useState } from "react";
import styles from "./SideBar.less";

//Sidebar icons
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsXDiamond, BsPeople, BsTrophy } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

//Logo
import dell from "../../assets/dell.png";
import dellLogo from "../../assets/Dell_Logo.png";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <MdOutlineSpaceDashboard />),
  getItem("Matches", "2", <BsXDiamond />),
  getItem("Events", "3", <AiOutlineCalendar />),
  getItem("Teams", "4", <BsPeople />),
  getItem("Rewards", "5", <BsTrophy />),
  getItem("Messaging", "6", <BiMessageRounded />),
  getItem("Profile", "7", <CiUser />),
  getItem("Settings", "8", <FiSettings />),
];

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={collapsed ? styles.collapsedLogo : styles.logo}>
          <img src={collapsed ? dellLogo : dell} alt="Dell" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["3"]}
          mode="inline"
          items={items}
          selectable={false}
          inlineCollapsed={collapsed}
        />
      </Sider>
      {/* <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout> */}
    </Layout>
  );
}

export default SideBar;
