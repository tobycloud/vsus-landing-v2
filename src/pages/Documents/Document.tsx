import { Box, Center, Container, Loader, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getDocument } from "../../database";
import { LegalDocument } from "../../database/models";
import { monthsKey, setDocumentTitle } from "../../utils";

export default function Document({ id }: { id: string }) {
  const [document, setDocument] = useState<LegalDocument | null>(null);

  useEffect(() => {
    setDocument(null);
    async function document() {
      const document = await getDocument(id);
      if (!document) return;
      setDocument(document);
      setDocumentTitle(document.title);
    }
    document();
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  if (!document)
    return (
      <Center>
        <Loader size="lg" color="white" />
      </Center>
    );

  return (
    <Container mt="xl">
      <Title mb="md">{document.title}</Title>
      <Text mb="sm">
        Effective Date: {document.created.slice(8, 10)}{" "}
        {monthsKey[document.created.slice(5, 7) as keyof typeof monthsKey]},{" "}
        {document.created.slice(0, 4)}
      </Text>
      <Text mb="xl">
        Last Updated: {document.updated.slice(8, 10)}{" "}
        {monthsKey[document.updated.slice(5, 7) as keyof typeof monthsKey]},{" "}
        {document.updated.slice(0, 4)}
      </Text>
      <Box
        dangerouslySetInnerHTML={{
          __html: document.content.replace(
            /<a\b([^>]+)>/g,
            "<a style='color: white;' $1>"
          ),
        }}
      />
    </Container>
  );
}
