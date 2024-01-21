import { Box, Container, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export default function Footer() {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  });
  return (
    <footer style={{ backgroundColor: "#010409", marginTop: "5vh" }}>
      <Box className={classes.footerInside} p={20}>
        <Container>
          <Text>
            Copyright © {new Date().getFullYear()} DaCloud™. All rights
            reserved.
          </Text>
        </Container>
        {height <= 990 && <br />}
        <Container>
          <Text>
            <Link
              to="/privacy"
              style={{ color: "white", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/tos" style={{ color: "white", textDecoration: "none" }}>
              Terms of Service
            </Link>{" "}
          </Text>
        </Container>
      </Box>
    </footer>
  );
}
