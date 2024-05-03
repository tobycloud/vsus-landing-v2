import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import classes from "./index.module.css";

export default function Content() {
  return (
    <Box style={{ color: "white" }} className={classes.wrapper}>
      <Header />
      <Outlet />
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
