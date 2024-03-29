import { Box, Center, Image, Text, Title } from "@mantine/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo";
import os from "../../os";
import { setDocumentTitle } from "../../utils";
import classes from "./Home.module.css";

export default function Home() {
  useEffect(() => {
    setDocumentTitle("Home");
  }, []);
  return (
    <Box pos={"absolute"} top={0}>
      <Box style={{ position: "relative" }}>
        <BackgroundVideo video="/video/home-bg.mp4" />
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Center>
            <Image src={"/image/logo.svg"} h="100" w="100" />
          </Center>
          <Title style={{ margin: "2vh 0 2vh 0" }}>vSuS</Title>
          <Text style={{ margin: "0 0 5vh 0" }}>
            Your deployable VM-like coding environments, accessible from
            everywhere.
          </Text>
          <Box className={classes.buttons}>
            {os !== "" && (
              <Link
                to={"https://dashboard.vsus.app"}
                className={`${classes.button} ${classes.web}`}
              >
                Open in your browser
              </Link>
            )}
            {!["", "Mac", "Chrome OS"].includes(os) && (
              <Link
                to={"/download"}
                className={`${classes.button} ${classes.download}`}
              >
                Download for {os}
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
