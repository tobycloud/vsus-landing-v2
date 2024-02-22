import { Box, Container, Image, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import os from "../../os";
import { setDocumentTitle } from "../../utils";
import classes from "./Download.module.css";

export default function Pricing() {
  useEffect(() => {
    setDocumentTitle("Download");
  }, []);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  let downloadContainers = [
    <Container className={classes.downloadContainer}>
      <Image
        className={classes.icon}
        src={"/image/os/windows.svg"}
        fit="cover"
      />
      <Container className={classes.downloadContainerMain}>
        <Title order={1} mt={30} mb={30}>
          Download for Windows
        </Title>
        <Link
          to=""
          className={`${classes.button} ${
            os === "Windows" ? classes.correctOSButton : ""
          }`}
        >
          Latest version (.exe)
        </Link>
        <Link to="" className={classes.link}>
          View older versions
        </Link>
      </Container>
    </Container>,
    <Container className={classes.downloadContainer}>
      <Image className={classes.icon} src={"/image/os/linux.svg"} fit="cover" />
      <Container className={classes.downloadContainerMain}>
        <Title order={1} mt={30} mb={30}>
          Download for Linux
        </Title>
        <Container className={classes.twoButtons}>
          <Link
            to=""
            className={`${classes.button} ${
              os === "Linux" ? classes.correctOSButton : ""
            }`}
            style={width >= 992 ? { marginRight: 10 } : { marginBottom: "3vh" }}
          >
            Latest version (.tar.gz)
          </Link>
          <Link
            to=""
            className={`${classes.button} ${
              os === "Linux" ? classes.correctOSButton : ""
            }`}
          >
            Latest version (.deb)
          </Link>
        </Container>
        <Link to="" className={classes.link}>
          View older versions
        </Link>
      </Container>
    </Container>,
  ];

  if (os === "Linux")
    [downloadContainers[0], downloadContainers[1]] = [
      downloadContainers[1],
      downloadContainers[0],
    ];

  return (
    <Box className={classes.outer}>
      <Container className={classes.header}>
        <Title size={50} c="#00EEEE">
          Download the latest version of vSuS
        </Title>
        <Text style={{ marginTop: 20 }}>
          By installing and using vSuS, you agree to our{" "}
          <Link to="/tos" className={classes.link}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className={classes.link}>
            Privacy Policy
          </Link>
          .
        </Text>
      </Container>
      {downloadContainers.map((downloadContainer) => downloadContainer)}
    </Box>
  );
}
