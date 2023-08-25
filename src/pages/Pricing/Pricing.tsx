import { Box, Center, SimpleGrid, Title } from "@mantine/core";
import PlansBox from "../../components/PlansBox";
import "./style.css";

export default function Pricing() {
  return (
      <Box mb={35}>
        <Title order={1} ml={15} mt={15}>Pricing</Title>
        <Center>
          <SimpleGrid cols={3} spacing={"xl"} breakpoints={[
            { maxWidth: "md", cols: 1, spacing: "md" },
          ]}>
            <PlansBox plan="Basic" />
            <PlansBox plan="Pro" />
            <PlansBox plan="God" />
          </SimpleGrid>
        </Center>
      </Box>
  );
}
