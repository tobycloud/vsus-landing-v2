import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Content() {
  return (
    <Box>
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
}
