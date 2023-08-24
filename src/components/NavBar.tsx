import {
  Anchor,
  Box,
  Container,
  Group,
  Header,
  Image,
  Title,
} from "@mantine/core";
import "/logo.svg";

export default function NavBar() {
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
          <Box display={"flex"}>
            <Image src={"/logo.svg"} height={35} width={"auto"} /> &nbsp;&nbsp;
            <Title order={3} color="white" sx={{ margin: "auto" }}>
              vSuS
            </Title>
          </Box>
          <Anchor href="/" underline={false} color="white">
            Overview
          </Anchor>
          <Anchor href="/pricing" underline={false} color="white">
            Pricing
          </Anchor>
        </Group>
      </Container>
    </Header>
  );
}
