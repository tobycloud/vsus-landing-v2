import { Box, Image, Text, Title, createStyles } from "@mantine/core";
import Home from "./Home";

const useStyles = createStyles((theme) => ({
  featureContainer: {
    marginTop: 30,
    marginBottom: 30,
    [theme.fn.largerThan("md")]: {
      display: "flex",
      alignItems: "center",
    },
    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
  },
  reverse: {
    [theme.fn.smallerThan("md")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  featureImage: {
    "&:hover": {
      filter: "scale(1.5)",
    },
    transition: "transform .2s",
  },
}));

const Overview = () => {
  const { classes } = useStyles();

  return (
    <>
      <Home />
      <Box mt={"100vh"} pos={"relative"} m={20}>
        <Box className={classes.featureContainer}>
          <Image
            className={classes.featureImage}
            src={"/image/feat/vsc.png"}
            fit="cover"
          />
          <Box m={50}>
            <Title order={2}>Integrated code editor</Title>
            <Text>
              Enhance your coding with our integrated editor. Code from
              everywhere on our powerful servers with a smooth experience.
            </Text>
          </Box>
        </Box>
        <Box className={`${classes.featureContainer} ${classes.reverse}`}>
          <Box m={50}>
            <Title order={2}>Bound Together in Unity</Title>
            <Text>
              vSuS isn’t just an app; it’s a friendly community where people
              come together. It’s a place where you can find support, make
              companions, and share experiences, all while helping each other
              grow and thrive.
            </Text>
          </Box>
          <Image
            className={classes.featureImage}
            src={"/image/feat/ui.png"}
            fit="cover"
          />
        </Box>
        <Box className={classes.featureContainer}>
          <Image
            className={classes.featureImage}
            src={"/image/feat/discordrpc.png"}
            fit="cover"
          />
          <Box m={50}>
            <Title order={2}>Discord Rich Presence</Title>
            <Text>
              Elevate your app experience with our built-in Discord Rich
              Presence feature, no extensions required - now you can
              effortlessly show off your activities to friends on Discord while
              using vSuS.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
