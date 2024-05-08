import { Box, Button, Group, Image, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
    <Box
      style={{
        padding: "20px 25px 20px 25px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        userSelect: "none",
        position: "sticky",
        top: visible ? "0" : "-100px",
        transition: "top 0.3s",
      }}
    >
      <Box
        display={"flex"}
        style={{ width: "min-content", textDecoration: "none", color: "white" }}
        component={Link}
        to="/"
      >
        <Image
          src={"/image/logo.svg"}
          h={35}
          w={"auto"}
          mr={10}
          style={{ pointerEvents: "none" }}
        />
        <Title order={3} style={{ marginRight: 0 }} lh={"md"} ff="Readex Pro">
          vSuS
        </Title>
      </Box>
      <Group w="max-content">
        <Link to="/docs" style={{ color: "white", textDecoration: "none" }}>
          Docs
        </Link>
        <Link to="/pricing" style={{ color: "white", textDecoration: "none" }}>
          Pricing
        </Link>
        <Button
          visibleFrom="xs"
          color="black"
          variant="white"
          radius="xl"
          size="sm"
          ml="md"
          component={Link}
          to="https://dashboard.vsus.app"
        >
          <Group gap="xs">
            <Text fw="600">Dashboard</Text>
            <IconArrowRight />
          </Group>
        </Button>
      </Group>
    </Box>
  );
}
