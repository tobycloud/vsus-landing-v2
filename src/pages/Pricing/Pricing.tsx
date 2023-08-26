import { Box, Center, SimpleGrid, Title } from "@mantine/core";
import { useEffect } from "react";
import PlansBox from "../../components/PlansBox";
import "./style.css";

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing - vSuS";
  }, []);
  return (
    <Box>
      <Title order={1} style={{ textAlign: "center" }} mt={30} mb={30}>
        Pricing
      </Title>
      <Center>
        <SimpleGrid
          cols={3}
          spacing={"xl"}
          breakpoints={[{ maxWidth: "80em", cols: 1, spacing: "md" }]}
        >
          <PlansBox plan="Basic" />
          <PlansBox plan="Pro" />
          <PlansBox plan="God" />
        </SimpleGrid>
      </Center>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title mt={"8vh"} order={1}>
          Included in all plans
        </Title>
        <table>
          <tr>
            <td>Universal Web Code Editor</td>
            <td>Professional Notes Organizer</td>
          </tr>
          <tr>
            <td>Always-On™️</td>
            <td>Real-time Collaboration</td>
          </tr>
        </table>
      </Box>
    </Box>
  );
}
