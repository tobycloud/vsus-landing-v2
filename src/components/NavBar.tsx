import {
  Box,
  Container,
  Group,
  Header,
  Image,
  Title,
} from "@mantine/core";
import "/logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  /** No need to use Anchor, use Link from React Router instead for full-SPA support. */
  return (
    <Header
      height={60}
      sx={{ borderBottom: 0, background: "rgba(0,0,0,0)", padding: 15 }}
      pos={"sticky"}
    >
      <Container
        fluid
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Group>
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            <Box display={"flex"}>
              <Image src={"/logo.svg"} height={35} width={"auto"} /> &nbsp;&nbsp;
              <Title order={3} color="white" sx={{ margin: "auto" }}>
                vSuS
              </Title>
            </Box>
          </Link>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/pricing" style={{ color: "white", textDecoration: "none" }}>
            Pricing
          </Link>
        </Group>
      </Container>
    </Header>
  );
}
