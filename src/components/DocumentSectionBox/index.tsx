import { Box, Flex, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { TablerIcon } from "../../utils/types";

export default function DocumentSectionBox({
  section,
}: {
  section: {
    title: string;
    icon: TablerIcon;
    documents: { title: string; readable_id: string }[];
  };
}) {
  return (
    <Box id={section.title.toLowerCase().replaceAll(" ", "-")}>
      <Group gap="xs" mb="md">
        <section.icon size={30} />
        <Title order={4}>{section.title}</Title>
      </Group>
      <Flex direction="column">
        {section.documents.map((document) => (
          <Text
            key={document.readable_id}
            component={Link}
            to={`/doc/${document.readable_id}`}
            mb="md"
            w="max-content"
          >
            {document.title}
          </Text>
        ))}
      </Flex>
    </Box>
  );
}
