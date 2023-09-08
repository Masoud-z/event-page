import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.location.pathname = "/events";
  });
  return <></>;
}
