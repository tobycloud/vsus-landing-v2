import { Box, Container, Group, Header, Image, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Header
      height={60}
      sx={{ borderBottom: 0, background: "#00000080", padding: 15 }}
      pos={"sticky"}
    >
      <Container
        fluid
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        <Group>
          <Box display={"flex"}>
            <Image
              src={"/image/logo.svg"}
              height={35}
              width={"auto"}
              mr={10}
              sx={{ pointerEvents: "none" }}
            />
            <Title order={3} color="white" sx={{ margin: "auto" }}>
              vSuS
            </Title>
          </Box>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/pricing"
            style={{ color: "white", textDecoration: "none" }}
          >
            Pricing
          </Link>
        </Group>
      </Container>
    </Header>
  );
}
