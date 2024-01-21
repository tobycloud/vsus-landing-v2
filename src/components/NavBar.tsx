import { Box, Container, Group, Image, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import os from "../os";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Container
      hidden={!visible}
      fluid
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      <Group>
        <Box display={"flex"}>
          <Image src={"/image/logo.svg"} height={35} width={"auto"} mr={10} sx={{ pointerEvents: "none" }} />
          <Title order={3} color="white" sx={{ margin: "auto" }}>
            vSuS
          </Title>
        </Box>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        {!!os && (
          <Link to="/download" style={{ color: "white", textDecoration: "none" }}>
            Download
          </Link>
        )}
        <Link to="/pricing" style={{ color: "white", textDecoration: "none" }}>
          Pricing
        </Link>
      </Group>
    </Container>
  );
}
