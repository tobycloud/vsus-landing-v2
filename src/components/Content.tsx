import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Content() {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
}
