import { Container, Grid } from "@mantine/core";
import DocumentSectionBox from "../../../../components/DocumentSectionBox";
import { documentsList } from "../../documents_list";

export default function Sections() {
  return (
    <Container mt="xl3" size="xl" px="xl">
      <Grid>
        {documentsList.map((section) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={section.title}>
            <DocumentSectionBox section={section} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
