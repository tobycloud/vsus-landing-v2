import { Box, Space } from "@mantine/core";
import { Helmet } from "react-helmet";
import HeroHeader from "./HeroHeader";
import Sections from "./Selections";

export default function Docs() {
  return (
    <Box>
      <Helmet>
        <title>Docs - vSuS</title>
      </Helmet>
      <HeroHeader />
      <Sections />
      {/* <Support /> */}
      <Space my="xl3" />
    </Box>
  );
}
