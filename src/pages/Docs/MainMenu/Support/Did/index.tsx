import { Box, Button, Group, Text, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Did() {
  const [buttonPressed, setButtonPressed] = useState<string>("");

  const form = useForm({
    initialValues: {
      feedback: "",
      message: "",
      email: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) || value.length == 0 ? null : "Invalid email",
    },
  });

  useEffect(() => {
    form.setFieldValue("feedback", buttonPressed);
  }, [buttonPressed]);

  return (
    <Box>
      <Text fw="500">Did the docs help you?</Text>
      <Group mt="md">
        <Button
          radius="lg"
          variant={buttonPressed == "good" ? "light" : "outline"}
          color={buttonPressed == "good" ? "green" : "white"}
          onClick={() => setButtonPressed("good")}
        >
          <IconThumbUp />
        </Button>
        <Button
          radius="lg"
          variant={buttonPressed == "bad" ? "light" : "outline"}
          color={buttonPressed == "bad" ? "red" : "white"}
          onClick={() => setButtonPressed("bad")}
        >
          <IconThumbDown />
        </Button>
      </Group>
      {!!buttonPressed && (
        <Box
          mt="lg"
          component="form"
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <Textarea
            mb="md"
            label={
              buttonPressed == "good"
                ? "What do we do well?"
                : "What can we improve?"
            }
            placeholder="Optional"
            autosize
            minRows={3}
            maxRows={3}
            {...form.getInputProps("message")}
          />
          <TextInput
            mb="md"
            label="If we can contact you with more questions, please enter your email address"
            placeholder="Optional"
            {...form.getInputProps("email")}
          />
          <Text fz="sm">
            If you need a reply, please contact support instead.
          </Text>
          <Group mt="md" ml="auto" w="max-content">
            <Text
              td="underline"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                setButtonPressed("");
                form.setFieldValue("email", "");
                form.setFieldValue("message", "");
              }}
            >
              Cancel
            </Text>
            <Button type="submit" radius="lg" color="#90FFC2" variant="light">
              Send
            </Button>
          </Group>
        </Box>
      )}
    </Box>
  );
}
