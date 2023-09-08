import { useState } from "react";
import styles from "./HeaderBar.less";
import type { MenuProps } from "antd";
import { Layout, Button, Avatar, Dropdown, Space, Badge } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { BsListCheck, BsEnvelope } from "react-icons/bs";
import { PiBellRingingBold } from "react-icons/pi";
import { BiBellOff, BiMessageRounded } from "react-icons/bi";
import me from "../../assets/me.jpg";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

function HeadBar(props: any) {
  const [mute, setMute] = useState(false);
  return (
    <Header className={styles.headerContainer}>
      <div>
        <Button
          type="text"
          icon={props.collapsed ? <CgMenuRight /> : <CgMenuLeft />}
          onClick={() => props.setCollapsed((prev: boolean) => !prev)}
          style={{
            fontSize: "16px",
          }}
        />
        <div className={styles.first}>
          <BsListCheck /> Report Volunteer Service Hours
        </div>
        <div className={styles.second}>
          <BsEnvelope /> Message my HR representative
        </div>
      </div>
      <div>
        <Badge
          count={5}
          size="small"
          status="success"
          color="rgb(45, 183, 245)"
          className={styles.btn}
        >
          <BiMessageRounded />
        </Badge>
        <span
          onClick={() => {
            setMute((prev) => !prev);
          }}
          className={styles.btn}
        >
          {mute ? <BiBellOff /> : <PiBellRingingBold />}
        </span>
        <Avatar src={me} />

        <Dropdown menu={{ items }} className={styles.dropdown}>
          <Space>
            Masoud
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeadBar;
