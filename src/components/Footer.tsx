import { Box, Container, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footerInside: {
    display: "flex",
    [theme.fn.smallerThan("md")]: {
      fontSize: "0.9rem",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <footer style={{ backgroundColor: "#010409" }}>
      <Box className={classes.footerInside} p={20}>
        <Container>
          <Text>
            Copyright © {new Date().getFullYear()} DaCloud™. All rights
            reserved.
          </Text>
        </Container>
        <Container>
          <Text>Privacy Policy | Terms of Service | Legal</Text>
        </Container>
      </Box>
    </footer>
  );
}
