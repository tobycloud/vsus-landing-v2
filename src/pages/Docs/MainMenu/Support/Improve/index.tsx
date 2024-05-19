import { Box, Button, Text } from "@mantine/core";

export default function Improve() {
  return (
    <Box>
      <Text fw="500">Help us improve the docs!</Text>
      <Text mt="md">
        All docs are open-sourced. If there is something unclear, feel free to
        contribute and improve it
      </Text>
      <Button radius="lg" variant="outline" color="white" mt="md">
        Make a contribution
      </Button>
    </Box>
  );
}
