import { Box, Group, Image, Title } from "@mantine/core";
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
    <Box
      fluid
      style={{
        padding: "15px 20px 15px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 100,
        justifyContent: "space-between",
        alignItems: "center",
        userSelect: "none",
        position: "sticky",
        top: visible ? "0" : "-100px",
        transition: "top 0.3s",
      }}
    >
      <Group>
        <Box
          display={"flex"}
          style={{ width: "min-content", marginRight: "30px" }}
        >
          <Image
            src={"/image/logo.svg"}
            height={35}
            width={"auto"}
            mr={10}
            style={{ pointerEvents: "none" }}
          />
          <Title order={3} color="white" style={{ marginRight: 0 }}>
            vSuS
          </Title>
        </Box>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        {!!os && (
          <Link
            to="/download"
            style={{ color: "white", textDecoration: "none" }}
          >
            Download
          </Link>
        )}
        <Link to="/pricing" style={{ color: "white", textDecoration: "none" }}>
          Pricing
        </Link>
      </Group>
    </Box>
  );
}
