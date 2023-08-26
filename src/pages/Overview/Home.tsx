import { Box, Center, Image, Text, Title, createStyles } from "@mantine/core";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../components/BackgroundVideo";

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
  },
  download: { backgroundColor: "white", color: "black", maxWidth: "120px" },
  web: { backgroundColor: "black", color: "white", maxWidth: "220px" },
}));

export default function Home() {
  const { classes } = useStyles();
  useEffect(() => {
    document.title = "Home - vSuS";
  }, []);
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
            <Link
              to={"https://dashboard.vsus.app"}
              className={`${classes.button} ${classes.web}`}
            >
              Open in your browser
            </Link>
            <Link to={"/"} className={`${classes.button} ${classes.download}`}>
              Download
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
