import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import OffersNumber from "../../../components/OffersNumber";
import classes from "./index.module.css";

export default function Offers() {
  const isMobile = useMediaQuery("(max-width: 62em)", true);

  const mockdata = [
    {
      number: "5",
      title: "Instances",
    },
    {
      number: "4",
      title: "Blocks",
    },
    {
      number: "5",
      title: "Deployments",
    },
    {
      number: "1",
      title: "CI/CD Jobs",
    },
  ];

  return (
    <Container mt="calc(var(--mantine-spacing-xl) * 3)" size="lg" w="100%">
      <Title ta="center" mt="sm" mb="lg">
        What vSuS Offers
      </Title>
      <Text className={classes.description} ta="center">
        Elevate your deployment capabilities with our resources, all available
        at no cost to you from the outset.
      </Text>
      <Grid mt="xl">
        {mockdata.map((offer, index) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <div
              data-aos="fade-up"
              data-aos-once
              data-aos-offset="250"
              data-aos-duration="1000"
              data-aos-delay={isMobile ? 0 : index * 100}
            >
              <OffersNumber offer={offer} />
            </div>
          </Grid.Col>
        ))}
      </Grid>
      <Center mt="calc(var(--mantine-spacing-xl) * 2)">
        <Button
          color="black"
          variant="white"
          radius="xl"
          size="md"
          component={Link}
          to="/pricing"
        >
          <Group gap="xs">
            <Text fw="600">See our Plans</Text>
            <IconShoppingCart />
          </Group>
        </Button>
      </Center>
    </Container>
  );
}
