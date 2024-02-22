import { Box, Text } from "@mantine/core";

const AllPlansBox = ({ text }: { text: string }) => {
  return (
    <Box
      style={{
        padding: "10px 15px 10px 15px",
        borderRadius: "8px",
        backgroundColor: "#00000070",
      }}
    >
      <Text size="md" weight={500} style={{ color: "white" }}>
        {text}
      </Text>
    </Box>
  );
};

export default AllPlansBox;
