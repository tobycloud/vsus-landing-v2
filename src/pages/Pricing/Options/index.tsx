import { Box, Container, Flex, Grid, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import PricingBox from "../../../components/PricingBox";
import { Dots } from "./Dots";
import classes from "./index.module.css";

export default function Options() {
  const isMobile = useMediaQuery("(max-width: 62em)");

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
    <Box mih={687} mt={-75} pt={75}>
      <Dots className={classes.dots} style={{ left: 0, top: 110 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 110 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 250 }} />
      <Box visibleFrom="xs">
        <Dots className={classes.dots} style={{ right: 0, top: 160 }} />
      </Box>
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
            {mockdata.map((data, index) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <div
                  data-aos="fade-up"
                  data-aos-once
                  data-aos-offset="250"
                  data-aos-duration="1000"
                  data-aos-delay={isMobile ? 0 : index * 100 + 50}
                >
                  <PricingBox data={data} />
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Flex>
    </Box>
  );
}
