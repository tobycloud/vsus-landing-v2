import { Box, Container, Text } from "@mantine/core";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1b2029" }}>
      <Box display={"flex"} p={20}>
        <Container>
          <Text>
            Copyright © {new Date().getFullYear()} DaCloud™. All rights
            reserved.
          </Text>
        </Container>
        <Container>
          <Text>Privacy Policy | Terms of Service | Legal</Text>
        </Container>
      </Box>
    </footer>
  );
}
