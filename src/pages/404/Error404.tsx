import { Container, Image, Text, Title } from "@mantine/core";
import { useEffect } from "react";
import classes from "./Error404.module.css";

export default function Error404() {
  useEffect(() => {
    document.title = "404 Not found - vSuS";
  }, []);

  setTimeout(() => {
    window.location.replace("/");
  }, 3456);

  return (
    <Container className={classes.main}>
      <Image
        src={"/image/logo.svg"}
        height={"20vh"}
        width={"auto"}
        style={{ marginBottom: "2vh" }}
      />
      <Title size={50} color="#00EEEE">
        Oops, content not found on page.
      </Title>
      <Text style={{ marginTop: 20 }}>
        You will be automatically redirected to the homepage shortly.
      </Text>
    </Container>
  );
}
