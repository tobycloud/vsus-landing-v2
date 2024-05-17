import { Badge, Box, Container, Table, TableData, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function Breakdown() {
  const fourCheckIcons = [
    <IconCheck />,
    <IconCheck />,
    <IconCheck />,
    <IconCheck />,
  ];

  const tableData: TableData = {
    head: ["", "Free", "Basic", "Pro", "Enterprise"],
    body: [
      ["Price (Monthly)", "Free", "$2.99", "$4.99", "Custom"],
      ["vCPUs", "1", "2", "4", "8+"],
      ["vRAMs", "2GB", "4GB", "8GB", "16GB+"],
      ["Packages", "5", "15", "25", "40+"],
      ["CI/CD Jobs", "1", "1", "2", "4+"],
      ["Deployments", "5", "20", "35", "50+"],
      ["Volume Capacity", "10GB", "15GB", "25GB", "30GB+"],
      ["CDN", "5GB", "10GB", "15GB", "20GB+"],
      ["Bandwidth", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
      ["Online VSCode", ...fourCheckIcons],
      ["Online Markdown Editor", ...fourCheckIcons],
      ["Online Chat", ...fourCheckIcons],
      ["Always On", ...fourCheckIcons],
      ["SSH, HTTP Expose", ...fourCheckIcons],
      [
        "",
        <Badge color="#00AFB8" size="lg">
          Default
        </Badge>,
        "",
        "",
        "",
      ],
    ],
  };

  return (
    <Box mt="xl3" mx="xl" visibleFrom="xs">
      <Title ta="center" order={2}>
        Let we break it down for you
      </Title>
      <Container
        size="lg"
        mt="xl"
        bg="#1a1a1a"
        px="xs"
        py="lg"
        style={{ borderRadius: "var(--mantine-radius-md)" }}
      >
        <Table
          data={tableData}
          fz="md"
          withColumnBorders
          withRowBorders={false}
          borderColor="gray"
          bg="#1a1a1a"
        />
      </Container>
    </Box>
  );
}
