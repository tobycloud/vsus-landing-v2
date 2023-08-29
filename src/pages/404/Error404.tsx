import {
    Container,
    Image,
    Text,
    Title,
    createStyles,
  } from "@mantine/core";
  import { useEffect } from "react";
  
  const useStyles = createStyles(() => ({
    main: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      marginTop: "10vh",
      marginBottom: "5vh",
    },
  }));
  
  export default function Error404() {
    const { classes } = useStyles();
  
    useEffect(() => {
      document.title = "404 Not found - vSuS";
    }, []);

    setTimeout(() => {
      window.location.replace('/');
    }, 3456)
  
    return (
        <Container className={classes.main}>
          <Image src={"/image/logo.svg"} height={"20vh"} width={"auto"} sx={{marginBottom: "2vh"}} />
          <Title size={50} color="#00EEEE">
            Oops, content not found on page.
          </Title>
          <Text style={{ marginTop: 20 }}>
            You will be automatically redirected to the homepage shortly.
          </Text>
        </Container>
    );
  }
  