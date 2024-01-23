import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import classes from "./Content.module.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Content() {
  return (
    <Box style={{ color: "white" }} className={classes.wrapper}>
      <NavBar />
      <Outlet />
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
