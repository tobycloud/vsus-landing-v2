import { Box, Center, Image, Text, Title, createStyles } from "@mantine/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo";
import os from "../../os";

const useStyles = createStyles((theme) => ({
  buttons: {
    [theme.fn.largerThan("md")]: {
      display: "block",
    },
    [theme.fn.smallerThan("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  button: {
    padding: "10px 20px 10px 20px",
    borderRadius: "12px",
    textDecoration: "none",
    margin: "1vh",
    minWidth: 220,
  },
  download: { backgroundColor: "white", color: "black" },
  web: { backgroundColor: "#010409", color: "white" },
}));

export default function Home() {
  const { classes } = useStyles();
  useEffect(() => {
    document.title = "Home - vSuS";
  }, []);
  let showWeb;
  ["Windows", "Mac", "Linux"].includes(os) ? (showWeb = true) : (showWeb = false);
  return (
    <Box pos={"absolute"} top={0}>
      <Box sx={{ position: "relative" }}>
        <BackgroundVideo video="/video/home-bg.mp4" isHome={true} />
        <Box
          sx={{
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
            <Image src={"/image/logo.svg"} height={"10vh"} width={"auto"} />
          </Center>
          <Title sx={{ margin: "2vh 0 2vh 0" }}>vSuS</Title>
          <Text sx={{ margin: "0 0 5vh 0" }}>
            Your deployable VM-like coding environments, accessible from
            everywhere.
          </Text>
          <Box className={classes.buttons}>
            {showWeb && (
              <Link
                to={"https://dashboard.vsus.app"}
                className={`${classes.button} ${classes.web}`}
              >
                Open in your browser
              </Link>
            )}
            {!!os && os !== "Mac" && (
              <Link
                to={"/"}
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
