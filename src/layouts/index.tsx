import { Link, Outlet } from "umi";
import styles from "./index.less";
import SideBar from "../components/SideBar/SideBar";
import Container from "@/components/container/Container";

export default function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
