import { Box, Center, SimpleGrid, Title } from "@mantine/core";
import { useEffect } from "react";
import AllPlansBox from "../../components/AllPlansBox";
import PlansBox from "../../components/PlansBox";
import { setDocumentTitle } from "../../utils";

export default function Pricing() {
  useEffect(() => {
    setDocumentTitle("Pricing");
  }, []);
  return (
    <Box>
      <Title
        order={1}
        style={{ textAlign: "center" }}
        size={50}
        mt={50}
        mb={50}
      >
        Pricing
      </Title>
      <Center>
        <SimpleGrid cols={{ base: 1, minplans: 3 }} spacing={"xl"}>
          <PlansBox plan="Basic" />
          <PlansBox plan="Pro" />
          <PlansBox plan="God" />
        </SimpleGrid>
      </Center>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title mt={"8vh"} order={1} style={{ textAlign: "center" }}>
          Included in all plans
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={"md"} mt="xl">
          <AllPlansBox text="Universal Web Code Editor" />
          <AllPlansBox text="Professional Notes Organizer" />
          <AllPlansBox text="Private Git Server (coming soon)" />
          <AllPlansBox text="Always-On™" />
          <AllPlansBox text="Real-time Collaboration" />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
