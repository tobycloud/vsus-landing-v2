import { Container, Divider, Grid, Title } from "@mantine/core";
import Did from "./Did";
import Improve from "./Improve";
import Still from "./Still";

const threeGrids: React.ReactNode[] = [<Did />, <Improve />, <Still />];

export default function Support() {
  return (
    <Container size="xl" my="xl3">
      <Title order={3} ta="left">
        Help and Support
      </Title>
      <Divider my="lg" color="grey" />
      <Grid gutter={{ base: 50, md: "xl3" }}>
        {threeGrids.map((grid, index) => (
          <Grid.Col
            span={{ base: 12, md: 6, lg: 4 }}
            key={`support_grid_${index}`}
          >
            {grid}
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
