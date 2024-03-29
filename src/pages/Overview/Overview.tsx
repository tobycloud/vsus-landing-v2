import { Box, Image, Text, Title } from "@mantine/core";
import Home from "./Home";
import classes from "./Overview.module.css";

const Overview = () => {
  return (
    <>
      <Home />
      <Box mt={"100vh"} pos={"relative"} m={20}>
        <Box className={classes.featureContainer}>
          <Image className={classes.featureImage} src={"/image/feat/vsc.png"} fit="cover" />
          <Box m={50}>
            <Title order={2}>Integrated code editor</Title>
            <Text>Enhance your coding with our integrated editor. Code from everywhere on our powerful servers with a smooth experience.</Text>
          </Box>
        </Box>
        <Box className={`${classes.featureContainer} ${classes.reverse}`}>
          <Box m={50}>
            <Title order={2}>Bound Together in Unity</Title>
            <Text>
              vSuS isn’t just an app; it’s a friendly community where people come together. It’s a place where you can find support, make companions,
              and share experiences, all while helping each other grow and thrive.
            </Text>
          </Box>
          <Image className={classes.featureImage} src={"/image/feat/ui.png"} fit="cover" />
        </Box>
        <Box className={classes.featureContainer}>
          <Image className={classes.featureImage} src={"/image/feat/discordrpc.png"} fit="cover" />
          <Box m={50}>
            <Title order={2}>Discord Rich Presence</Title>
            <Text>
              Elevate your app experience with our built-in Discord Rich Presence feature, no extensions required - now you can effortlessly show off
              your activities to friends on Discord while using vSuS.
            </Text>
          </Box>
        </Box>
        {/**
        <Box className={`${classes.featureContainer} ${classes.reverse}`}>
          <Box m={50}>
            <Title order={2}>DaCloud Happy New Year</Title>
            <Text>
              Us had past 2023, and we’re still here! So happy new year! Welcome
              to DaCloud. We’re glad you joined us. And us in time prepare for
              DaCloud birthday in February. So what are you waiting for?
            </Text>
          </Box>{" "}
          <Image
            className={classes.featureImage}
            src={"/video/dragon-2024.gif"}
            fit="cover"
          />
        </Box>
        */}
      </Box>
    </>
  );
};

export default Overview;
