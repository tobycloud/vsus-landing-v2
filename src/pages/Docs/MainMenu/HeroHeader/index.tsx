import { Box, Container, Flex, Text, Title } from "@mantine/core";

export default function HeroHeader() {
  return (
    <Box
      mt={-75}
      style={{
        backgroundImage: "url('/images/components/docs-hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "0% 45%",
      }}
    >
      <Box
        style={{ background: "rgba(0,0,0,0.75)" }}
        pt="calc(var(--mantine-spacing-xl3) + 75px)"
        pb="xl3"
      >
        <Container size="xl" px="xl">
          <Flex>
            <Box>
              <Title fz={50} mb="xl">
                vSuS Docs
              </Title>
              <Text fz="lg">
                Help for wherever you are on your vSuS journey.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
