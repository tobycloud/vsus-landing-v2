import { Card, Text, rem } from "@mantine/core";
import { FeatureType } from "../../utils/types";
import classes from "./index.module.css";

export default function FeaturesCard({
  title,
  icon: IconComponent,
  description,
  bg,
}: FeatureType) {
  return (
    <Card
      bg={bg}
      c="white"
      key={title}
      shadow="md"
      radius="lg"
      className={classes.card}
      padding="xl"
      h="100%"
    >
      <IconComponent style={{ width: rem(50), height: rem(50) }} stroke={2} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" mt="sm">
        {description}
      </Text>
    </Card>
  );
}
