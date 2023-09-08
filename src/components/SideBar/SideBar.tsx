import React, { useEffect, useState } from "react";
import styles from "./SideBar.less";

//Sidebar icons
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsXDiamond, BsPeople, BsTrophy } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";

import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

//Logo
import dell from "../../assets/dell.png";
import dellLogo from "../../assets/Dell_Logo.png";

const { Sider } = Layout;

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

function SideBar(props: any) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className={props.collapsed ? styles.collapsedLogo : styles.logo}>
        <img src={props.collapsed ? dellLogo : dell} alt="Dell" />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["3"]}
        mode="inline"
        items={items}
        selectable={false}
        inlineCollapsed={props.collapsed}
      />
    </Sider>
  );
}

export default SideBar;
