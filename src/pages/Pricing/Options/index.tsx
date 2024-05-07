import { Box, Container, Flex, Grid, Text, Title } from "@mantine/core";
import PricingBox from "../../../components/PricingBox";
import classes from "./index.module.css";

export default function Options() {
  const mockdata = [
    {
      title: "Basic",
      topColor: "#0B8B00",
      bottomColor: "#001105",
      borderColor: "#00F881",
      price: "$2.99",
      description: "For individuals and small teams",
      features: ["2", "4", "15", "1", "20", "15GB", "10GB"],
    },
    {
      title: "Pro",
      topColor: "#3D008B",
      bottomColor: "#110027",
      borderColor: "#8B00F8",
      price: "$4.99",
      description: "For organizations and teams",
      features: ["4", "8", "25", "2", "35", "25GB", "15GB"],
    },
    {
      title: "Enterprise",
      topColor: "#AFB200",
      bottomColor: "#272600",
      borderColor: "#F8EE00",
      price: "Custom",
      description: "Unleash the impossible",
      features: ["8+", "16+", "40+", "4+", "50+", "30GB+", "20GB+"],
    },
  ];

  return (
    <Box
      mih={687}
      style={{
        background:
          "linear-gradient(180deg, rgba(0,100,100,1) 0%, rgba(17,17,17,1) 100%)",
      }}
      mt={-75}
      pt={75}
    >
      <Flex
        mt="calc(var(--mantine-spacing-lg) * 3)"
        direction="column"
        align="center"
      >
        <Box mx="lg">
          <Title ta="center" my="lg" fz={50}>
            Pick the plan that’s right for you
          </Title>
          <Text className={classes.description} ta="center" mb="xl" fz="lg">
            Simple plans. Simple prices. Only pay for what you really need.
          </Text>
        </Box>
        <Container size="lg">
          <Grid mt="xl" grow gutter={{ base: 30, lg: "xl" }}>
            {mockdata.map((data) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <PricingBox data={data} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Flex>
    </Box>
  );
}
