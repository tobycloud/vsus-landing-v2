import {
  Badge,
  Box,
  Center,
  Container,
  Grid,
  Text,
  Title,
} from "@mantine/core";
import TestimonialBox from "../../../components/TestimonialBox";
import classes from "./index.module.css";

export default function Testimonials() {
  const mockdata = [
    {
      avatar:
        "https://archive.org/download/discordprofilepictures/discordblue.png",
      name: "nbth",
      position: "Co-Founder of DaCloud",
      review: "tui nghi ngờ chất lượng của vsus",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/62174797?v=4",
      name: "Toby Cm",
      position: "Co-Founder of DaCloud",
      review: "vsus coming in 2025 😭",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/78996937?v=4",
      name: "pdteggman",
      position: "chém gió at DaCloud",
      review: "sus",
    },
  ];

  return (
    <Box
      bg="#1E1E1E"
      mt="calc(var(--mantine-spacing-xl) * 3)"
      pt="calc(var(--mantine-spacing-xl) * 2)"
      pb="calc(var(--mantine-spacing-xl) * 4.5)"
    >
      <Center>
        <Badge color="#111111" size="lg">
          Testimonials
        </Badge>
      </Center>
      <Title ta="center" mt="lg" mb="lg">
        Read What Others Have to Say
      </Title>
      <Text className={classes.description} ta="center" mb="xl">
        Reviews from satisfied developers who have revolutionized their
        deployment process with our platform
      </Text>
      <Container size="lg" w="100%">
        <Grid gutter={{ base: 100, lg: "auto" }} grow>
          {mockdata.map((data) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <TestimonialBox data={data} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
