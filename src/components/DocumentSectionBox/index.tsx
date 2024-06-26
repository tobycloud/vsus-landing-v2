import { Box, Flex, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { DocumentSectionType } from "../../utils/types";

export default function DocumentSectionBox({
  title,
  icon: IconComponent,
  documents,
}: DocumentSectionType) {
  return (
    <Box id={title.toLowerCase().replaceAll(" ", "-")}>
      <Group gap="xs" mb="md">
        <IconComponent size={30} />
        <Title order={4}>{title}</Title>
      </Group>
      <Flex direction="column">
        {documents.map((document) => (
          <Text
            key={document.readable_id}
            component={Link}
            to={`/docs/${document.readable_id}`}
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
