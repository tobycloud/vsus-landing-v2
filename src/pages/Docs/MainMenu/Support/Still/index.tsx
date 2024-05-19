import { Box, Group, Text } from "@mantine/core";
import { IconHelpHexagon, IconSocial } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { StillNeedHelpType } from "../../../../../utils/types";

const contentData: StillNeedHelpType[] = [
  { icon: IconSocial, title: "Get help from the community", link: "" },
  { icon: IconHelpHexagon, title: "Contact support", link: "" },
];

export default function Still() {
  return (
    <Box>
      <Text fw="500">Still need help?</Text>
      <Box mt="md">
        {contentData.map((data) => (
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
