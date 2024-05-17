import { Box, Group, Text } from "@mantine/core";
import { IconHelpHexagon, IconSocial } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Still() {
  const allData = [
    { icon: IconSocial, title: "Get help from the community", link: "" },
    { icon: IconHelpHexagon, title: "Contact support", link: "" },
  ];

  return (
    <Box>
      <Text fw="500">Still need help?</Text>
      <Box mt="md">
        {allData.map((data) => (
          <Group
            key={data.title}
            mb="sm"
            component={Link}
            style={{ color: "white", textDecoration: "none" }}
          >
            <data.icon />
            <Text>{data.title}</Text>
          </Group>
        ))}
      </Box>
    </Box>
  );
}
