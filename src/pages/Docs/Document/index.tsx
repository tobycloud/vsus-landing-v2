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
import { monthsKey } from "../../../utils";
import { FetchedDocumentType } from "../../../utils/types";
import { Error404 } from "../../Errors/404";
import { handleAnchorClicks, handleScrollToHash } from "./utils";

export default function Document() {
  const { document: fetchedDocument, sectionTitle } =
    useLoaderData() as FetchedDocumentType;

  const isMobile = useMediaQuery("(max-width: 75em)");

  const [opened, { toggle }] = useDisclosure();

  const breadcumbLinks =
    fetchedDocument &&
    [
      { title: "Docs", href: "/docs" },
      {
        title: sectionTitle,
        href: `/docs#${sectionTitle.toLowerCase().replace(" ", "-")}`,
      },
      {
        title: fetchedDocument.title,
        href: `/docs/${fetchedDocument.readable_id}`,
      },
    ].map((item, index) => (
      <Text component={Link} to={item.href} key={index} c="white" fz="sm">
        {item.title}
      </Text>
    ));

  useEffect(() => {
    if (!isMobile && opened) toggle();
  }, [isMobile, opened, toggle]);

  useEffect(() => {
    if (document) {
      handleScrollToHash(isMobile);
      setTimeout(() => {
        return handleAnchorClicks(isMobile);
      }, 200);
    }
  }, [isMobile]);

  return (
    <>
      <Helmet>
        <title>
          {fetchedDocument ? fetchedDocument.title : "Not Found"} - Docs - vSuS
        </title>
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
            <Breadcrumbs hidden={!fetchedDocument}>
              {breadcumbLinks}
            </Breadcrumbs>
            <Text hidden={!!fetchedDocument} fz="sm">
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
          {fetchedDocument ? (
            <Box>
              <Title mb="md">{fetchedDocument.title}</Title>
              <Text mb="sm">
                Effective Date: {fetchedDocument.created.slice(8, 10)}{" "}
                {
                  monthsKey[
                    fetchedDocument.created.slice(
                      5,
                      7
                    ) as keyof typeof monthsKey
                  ]
                }{" "}
                {fetchedDocument.created.slice(0, 4)}
              </Text>
              <Text mb="xl">
                Last Updated: {fetchedDocument.updated.slice(8, 10)}{" "}
                {
                  monthsKey[
                    fetchedDocument.updated.slice(
                      5,
                      7
                    ) as keyof typeof monthsKey
                  ]
                }{" "}
                {fetchedDocument.updated.slice(0, 4)}
              </Text>
              <Box
                dangerouslySetInnerHTML={{
                  __html: fetchedDocument.content.replace(
                    /<a\b([^>]+)>/g,
                    "<a style='color: white;' $1>"
                  ),
                }}
              />
            </Box>
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
