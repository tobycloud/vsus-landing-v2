import { Box, Button, Flex, Group, Image, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const isInDoc = () => {
  return (
    !["/docs", "/docs/"].includes(window.location.pathname) &&
    window.location.pathname.includes("/docs/")
  );
};

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

  const [inDoc, setInDoc] = useState(isInDoc());

  useEffect(() => {
    setInDoc(isInDoc());
  }, [window.location.pathname]);

  return (
    <Box
      style={{
        zIndex: 1,
        userSelect: "none",
        position: "sticky",
        top: visible || inDoc ? "0" : "-100px",
        transition: "top 0.3s",
      }}
    >
      <Box
        w="100%"
        h={75}
        style={{
          WebkitBackdropFilter: "blur(5px)",
          backdropFilter: "blur(5px)",
          backgroundColor: `rgba(0, 0, 0, ${inDoc ? 1 : 0.5})`,
        }}
      />
      <Flex
        mt={-75}
        align="center"
        justify="space-between"
        style={{
          padding: "20px 25px 20px 25px",
          position: "relative",
        }}
      >
        <Box
          display={"flex"}
          style={{
            width: "min-content",
            textDecoration: "none",
            color: "white",
          }}
          component={Link}
          to="/"
        >
          <Image
            src={"/images/logo.svg"}
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
          <Link
            to="/pricing"
            style={{ color: "white", textDecoration: "none" }}
          >
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
      </Flex>
    </Box>
  );
}
