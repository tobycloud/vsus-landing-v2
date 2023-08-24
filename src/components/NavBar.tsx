import { Box, Container, Group, Header, Image, Text, Title } from "@mantine/core";
import "/logo.svg";

export default function NavBar() {
    return (
        <Header height={60} sx={{ borderBottom: 0, background: "rgba(0,0,0,0)", padding: 10 }} pos={"sticky"}>
            <Container fluid sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Group>
                    <Box display={"flex"}>
                        <Image src={"/logo.svg"} height={35} width={"auto"} /> &nbsp;&nbsp;
                        <Title order={3}>vSuS</Title>
                    </Box>
                    <Text>Home</Text>
                    <Text>Pricing</Text>
                </Group>
            </Container>
        </Header>
    )
}