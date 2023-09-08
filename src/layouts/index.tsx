import { Link, Outlet } from "umi";
import styles from "./index.less";
import SideBar from "../components/SideBar/SideBar";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <SideBar />
      <Outlet />
    </div>
  );
}
