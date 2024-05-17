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
  const allData = [
    {
      avatar: "https://avatars.githubusercontent.com/u/72681678",
      name: "nbth",
      position: "Co-Founder of DaCloud",
      review: "tui nghi ngờ chất lượng của vsus",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/78996937",
      name: "pdteggman",
      position: "chém gió at DaCloud",
      review:
        "nhìn vào vsus bạn sẽ thấy x, thấy reddit, thấy discord, thấy fb, thấy abcxyz",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/73780382",
      name: "CookieGMVN",
      position: "Designer & Front-end Dev at DaCloud",
      review:
        "với 0 star đc chấm trên trustpilot, đây thực sự là bước tiến mới của giới công nghệ. hãy bỏ replit và dùng vSuS ngay ngày hôm nay!", // riel btw
    },
  ];

  return (
    <Box bg="#1a1a1a" mt="xl3" py="xl2">
      <Center>
        <Badge color="#111111" size="lg">
          Testimonials
        </Badge>
      </Center>
      <Title ta="center" my="lg" mx="xs">
        Read What Others Have to Say
      </Title>
      <Text className={classes.description} ta="center" mb="xl">
        Reviews from satisfied developers who have revolutionized their
        deployment process with our platform.
      </Text>
      <Container size="lg" w="100%">
        <Grid grow>
          {allData.map((data) => (
            <Grid.Col
              span={{ base: 12, md: 6, lg: 4 }}
              mb="100"
              key={data.name}
            >
              <TestimonialBox data={data} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
