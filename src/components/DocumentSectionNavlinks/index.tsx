import { Box, Divider, Group, NavLink, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowLeft, IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { documentsList } from "../../pages/Docs/documents_list";

export default function DocumentSectionNavlinks({
  toggle,
}: {
  toggle: () => void;
}) {
  const currentDocument = window.location.pathname.split("/").pop();

  const isMobile = useMediaQuery("(max-width: 75em)");

  return (
    <Box pb="xl3">
      <Box pl={isMobile ? "0" : "lg"} pt={isMobile ? "0" : "md"}>
        <Link
          to="/docs"
          style={{
            color: "white",
            textDecoration: "none",
            width: "max-content",
            display: "block",
          }}
        >
          <Group gap="xs" mb="sm">
            <IconArrowLeft />
            <Text>Back</Text>
          </Group>
        </Link>
        <Title order={2}>vSuS Docs</Title>
      </Box>
      <Divider my="md" />
      {documentsList.map((group) => (
        <NavLink
          key={group.title}
          defaultOpened
          label={group.title}
          leftSection={<group.icon stroke={1.5} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
        >
          {group.documents.map((doc) => (
            <NavLink
              key={doc.title}
              label={doc.title}
              component={Link}
              to={`/docs/${doc.readable_id}`}
              active={doc.readable_id === currentDocument}
              onClick={toggle}
            />
          ))}
        </NavLink>
      ))}
    </Box>
  );
}
