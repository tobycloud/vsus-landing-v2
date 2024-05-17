import {
  Box,
  Breadcrumbs,
  Burger,
  Drawer,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import DocumentSectionNavlinks from "../../../components/DocumentSectionNavlinks";
import { LegalDocument } from "../../../database/models";
import { monthsKey } from "../../../utils";
import { Error404 } from "../../Errors/404";
import { documentsList } from "../documents_list";

export default function Document() {
  const { document } = useLoaderData() as { document: LegalDocument };

  const isMobile = useMediaQuery("(max-width: 75em)");

  const [opened, { toggle }] = useDisclosure();

  const sectionTitle = document
    ? documentsList.find((section) =>
        section.documents.some(
          (doc) => doc.readable_id === document.readable_id
        )
      )?.title || ""
    : "";

  const links = document
    ? [
        { title: "Docs", href: "/docs" },
        {
          title: sectionTitle,
          href: `/docs#${sectionTitle.toLowerCase().replace(" ", "-")}`,
        },
        { title: document.title, href: `/docs/${document.readable_id}` },
      ].map((item, index) => (
        <Text component={Link} to={item.href} key={index} c="white" fz="sm">
          {item.title}
        </Text>
      ))
    : null;

  useEffect(() => {
    if (!isMobile && opened) toggle();
  }, [isMobile, opened, toggle]);

  return (
    <>
      <Helmet>
        <title>{document ? document.title : "Not Found"} - Docs - vSuS</title>
      </Helmet>
      <Flex direction={isMobile ? "column" : "row"}>
        <Box
          visibleFrom="lg"
          mr="xl"
          miw={300}
          maw={300}
          h="calc(100vh - 75px)"
          style={{
            borderRight: "1px solid var(--mantine-color-dark-4)",
            position: "sticky",
            top: 75,
          }}
        >
          <DocumentSectionNavlinks toggle={() => {}} />
        </Box>
        <Box
          hiddenFrom="lg"
          px="lg"
          py="lg"
          style={{
            backgroundColor: "var(--mantine-color-dark-7)",
            borderBottom: "1px solid var(--mantine-color-dark-4)",
            position: "sticky",
            top: 75,
            transition: "top 0.3s",
            zIndex: 1,
          }}
        >
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" />
            <Breadcrumbs hidden={!document}>{links}</Breadcrumbs>
            <Text hidden={!!document} fz="sm">
              Document not found
            </Text>
          </Group>
        </Box>

        <Box
          mt="xl"
          pb="xl3"
          mx={{ base: "xl", lg: "auto" }}
          maw={isMobile ? "max-content" : "59em"}
        >
          {document ? (
            <>
              <Title mb="md">{document.title}</Title>
              <Text mb="sm">
                Effective Date: {document.created.slice(8, 10)}{" "}
                {
                  monthsKey[
                    document.created.slice(5, 7) as keyof typeof monthsKey
                  ]
                }{" "}
                {document.created.slice(0, 4)}
              </Text>
              <Text mb="xl">
                Last Updated: {document.updated.slice(8, 10)}{" "}
                {
                  monthsKey[
                    document.updated.slice(5, 7) as keyof typeof monthsKey
                  ]
                }{" "}
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
            </>
          ) : (
            <Error404 />
          )}
        </Box>
        <Box miw={300} maw={300} visibleFrom="lg" ml="xl" />
      </Flex>
      <Drawer opened={opened} onClose={toggle} hidden={!isMobile} size="xs">
        <DocumentSectionNavlinks toggle={toggle} />
      </Drawer>
    </>
  );
}
