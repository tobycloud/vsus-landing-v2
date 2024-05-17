import { Box, Container, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

export function Error404() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Box className={classes.mobileImage}>
          <Image
            src="/images/components/404.svg"
            className={classes.mobileImage}
            maw={512}
            ml="auto"
            mr="auto"
          />
          <Link
            to="https://freepik.com"
            style={{
              color: "var(--mantine-color-dimmed)",
            }}
          >
            <Text size="sm" ta="center" mt="lg">
              Designed by storyset / Freepik
            </Text>
          </Link>
        </Box>
        <Box className={classes.content}>
          <Title className={classes.title}>Something is not right...</Title>
          <Text size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error, contact us.
          </Text>
        </Box>
        <Box className={classes.desktopImage}>
          <Image src="/images/components/404.svg" />
          <Link
            to="https://freepik.com"
            style={{
              color: "var(--mantine-color-dimmed)",
            }}
          >
            <Text size="sm" ta="center" mt="lg">
              Designed by storyset / Freepik
            </Text>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
