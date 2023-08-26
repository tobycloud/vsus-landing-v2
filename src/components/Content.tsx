import { Box, createStyles } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const useStyles = createStyles(() => ({
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export default function Content() {
  const { classes } = useStyles();
  return (
    <Box sx={{ color: "white" }} className={classes.wrapper}>
      <NavBar />
      <Outlet />
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
