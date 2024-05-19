import { Accordion, Container, Text, Title } from "@mantine/core";
import { FAQType } from "../../../utils/types";

const faqs: FAQType[] = [
  {
    value: "q1",
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. Once you cancel, you’ll be downgraded to the free plan at the end of your billing cycle.",
  },
  {
    value: "q2",
    question: "Do you offer discounts for students?",
    answer:
      "Yes, we offer a 50% discount on all plans for students. Simply sign up with your student email and the discount will be applied automatically.",
  },
  {
    value: "q3",
    question: "Can I change my plan later on?",
    answer:
      "Yes, you can change your plan at any time. Simply go to your account settings and select a new plan.",
  },
  {
    value: "q4",
    question: "Do you offer refunds?",
    answer:
      "We do not offer refunds. If you cancel your subscription, you’ll be able to use vSuS until the end of your billing cycle.",
  },
];

export default function Questions() {
  return (
    <Container mt="lg3" mb="xl3" size="lg" w="100%">
      <Title order={2} ta="center">
        Have pricing questions? We have answers.
      </Title>
      <Accordion chevronPosition="right" variant="separated" mt="xl">
        {faqs.map((faq) => (
          <Accordion.Item value={faq.value} key={faq.value} bg="#1a1a1a">
            <Accordion.Control c="white" w="100%">
              <Text fw="600">{faq.question}</Text>
            </Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
