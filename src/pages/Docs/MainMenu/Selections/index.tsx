import { Container, Grid } from "@mantine/core";
import DocumentSectionBox from "../../../../components/DocumentSectionBox";
import { documentsList } from "../../documents_list";

export default function Sections() {
  return (
    <Container mt="xl3" size="xl" px="xl">
      <Grid>
        {documentsList.map((data) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={data.title}>
            <DocumentSectionBox
              title={data.title}
              documents={data.documents}
              icon={data.icon}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
