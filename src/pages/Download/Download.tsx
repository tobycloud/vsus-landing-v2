import {
  Box,
  Container,
  Image,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import os from "../../os";

const useStyles = createStyles((theme) => ({
  icon: {
    maxWidth: 160,
    maxHeight: 160,
  },
  iconSmall: {
    maxWidth: 60,
    maxHeight: 60,
    marginBottom: 50,
  },
  downloadContainer: {
    width: 692,
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      width: "auto",
    },
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  downloadContainerMain: {
    display: "flex",
    flexDirection: "column",
    [theme.fn.smallerThan("md")]: {
      alignItems: "center",
      marginLeft: 0,
      textAlign: "center",
    },
    marginLeft: 50,
    marginRight: 0,
  },
  twoButtons: {
    display: "flex",
    margin: 0,
    padding: 0,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  correctOSButton: {
    color: "white !important",
    backgroundColor: "#00afb8 !important",
  },
  button: {
    padding: "10px 20px 10px 20px",
    borderRadius: "12px",
    textDecoration: "none",
    width: 220,
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
  },
  link: {
    color: "white",
    marginTop: "3vh",
    marginBottom: "3vh",
  },
  outer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    textAlign: "center",
    marginTop: "10vh",
    marginBottom: "5vh",
  },
}));

export default function Pricing() {
  const { classes } = useStyles();

  useEffect(() => {
    document.title = "Download - vSuS";
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
        <Title size={50} color="#00EEEE">
          Download the latest version of vSuS
        </Title>
        <Text style={{ marginTop: 20 }}>
          By installing and using vSuS, you agree to our{" "}
          <Link to="" className={classes.link}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="" className={classes.link}>
            Privacy Policy
          </Link>
          .
        </Text>
      </Container>
      {downloadContainers.map((downloadContainer) => downloadContainer)}
    </Box>
  );
}
