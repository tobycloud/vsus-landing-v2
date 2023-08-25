import { Box, Image, Text, Title, createStyles } from "@mantine/core";
import Home from "./sections/Home";

const useStyles = createStyles((theme) => ({
  featureContainer: {
    [theme.fn.largerThan("md")]: {
      display: "flex"
    },
    [theme.fn.smallerThan("md")]: {
      display: "block"
    }
  },
  featureImage: {
    "&:hover": {
      filter: "scale(1.5)",
    },
    transition: "transform .2s",
  }
}))

const Overview = () => {
  const { classes } = useStyles();
  return (
    <>
      <Home />
      <Box mt={"93vh"} pos={'relative'} m={20}>
        <Title order={2} mb={15}>Features</Title>
        <Box className={classes.featureContainer}>
          <Image className={classes.featureImage} src={"/feat-vsc.png"} fit="cover" />
          <Box m={15}>
            <Title order={3}>Integrated code editor</Title>
            <Text>We intergated a code editor for you to code directly on our servers. Keep your PC always clean.</Text>
          </Box>
        </Box>
        <Box className={classes.featureContainer} mt={30}>
          <Box m={15}>
            <Title order={3}>User-friendly UI</Title>
            <Text>We think an user-friendly UI is very important, so we tried to design a super beautiful UI, only for you xD.</Text>
          </Box>
          <Image className={classes.featureImage} src={"/feat-ui.png"} fit="cover" />
        </Box>
        <Box className={classes.featureContainer} mt={30}>
          <Image className={classes.featureImage} src={"/feat-vsc.png"} fit="cover" />
          <Box m={15}>
            <Title order={3}>Something</Title>
            <Text>I don't know what to put in this section :\.</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
