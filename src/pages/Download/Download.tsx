import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import os from "../../os";

const useStyles = createStyles(() => ({
  icon: {
    maxWidth: 120,
    maxHeight: 120,
    marginBottom: 50,
  },
  downloadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  correctOSButton: {
    color: "white !important",
    backgroundColor: "#00afb8 !important",
  },
  button: {
    padding: "10px 20px 10px 20px",
    borderRadius: "12px",
    textDecoration: "none",
    margin: "1vh",
    minWidth: 220,
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
  },
  olderVersion: {
    color: "white",
    textDecoration: "none",
    margin: "1vh",
  },
}));

export default function Pricing() {
  const { classes } = useStyles();

  let listOfContainers = [
    <Container className={classes.downloadContainer}>
      <Image
        className={classes.icon}
        src={"/image/os/windows.svg"}
        fit="cover"
      />
      <Link
        to=""
        className={`${classes.button} ${
          os === "Windows" ? classes.correctOSButton : ""
        }`}
      >
        Latest version (.exe)
      </Link>
      <Link to="" className={classes.olderVersion}>
        View older versions
      </Link>
    </Container>,
    <Container className={classes.downloadContainer}>
      <Image className={classes.icon} src={"/image/os/linux.svg"} fit="cover" />
      <Link
        to=""
        className={`${classes.button} ${
          os === "Linux" ? classes.correctOSButton : ""
        }`}
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
      <Link to="" className={classes.olderVersion}>
        View older versions
      </Link>
    </Container>,
    <Container className={classes.downloadContainer}>
      <Image className={classes.icon} src={"/image/os/mac.svg"} fit="cover" />
      {/* <Link to="" className={classes.button}>
              Latest version
            </Link> */}
      <Text>Not available</Text>
    </Container>,
  ];
  if (os === "Windows") {
    [listOfContainers[0], listOfContainers[1]] = [
      listOfContainers[1],
      listOfContainers[0],
    ];
  }
  useEffect(() => {
    document.title = "Download - vSuS";
  }, []);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  width < 880 &&
    (os === "Windows" || os === "Linux") &&
    ([listOfContainers[0], listOfContainers[1]] = [
      listOfContainers[1],
      listOfContainers[0],
    ]);
  return (
    <Box>
      <Title order={1} style={{ textAlign: "center" }} mt={30} mb={30}>
        Download vSuS for {os}
      </Title>
      <SimpleGrid
        cols={3}
        spacing={"xl"}
        breakpoints={[{ maxWidth: "55em", cols: 1, spacing: "md" }]}
      >
        {listOfContainers.map((container) => {
          return container;
        })}
      </SimpleGrid>
    </Box>
  );
}
