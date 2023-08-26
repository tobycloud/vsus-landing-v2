import { Box, Image, Text, Title, createStyles } from "@mantine/core";
import Home from "./Home";

const useStyles = createStyles((theme) => ({
  featureContainer: {
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
            src={"/image/feat-vsc.png"}
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
        <Box
          className={`${classes.featureContainer} ${classes.reverse}`}
          mt={30}
        >
          <Box m={50}>
            <Title order={2}>Intuitive Interface</Title>
            <Text>
              We value a user-friendly interface, which is why we've crafted a
              beautifully designed UI exclusively for you! 😊
            </Text>
          </Box>
          <Image
            className={classes.featureImage}
            src={"/image/feat-ui.png"}
            fit="cover"
          />
        </Box>
      </Box>
    </>
  );
};

export default Overview;
