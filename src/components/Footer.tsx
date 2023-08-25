import { Box, Container, Text } from "@mantine/core";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#1b2029" }}>
            <Box display={"flex"} p={25}>
                <Container>
                    <Text>TobyCloud™</Text>
                </Container>
                <Container>
                    <Text>Privacy Policy | ToS | Legal</Text>
                </Container>
                <Container>
                    <Text>Made with 💖 in Antelope, CA</Text>
                </Container>
            </Box>
        </footer>
    )
}