import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Glows() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box
      w="100vw"
      style={{ position: "absolute", zIndex: "-1", overflowX: "hidden" }}
      mt={-77}
      mih="3000px" // just a large number to ensure the background is covered
    >
      <Box
        style={{
          transform: `translate3d(-100px, -200px, 0)`,
          filter: "blur(120px)",
          backgroundColor: "#004f88",
          width: "512px",
          height: "512px",
          borderRadius: "50%",
        }}
      />
      <Box
        style={{
          transform: `translate3d(${isMobile ? "85vw" : "95vw"}, ${
            isMobile ? "20vh" : "-150px"
          }, 0)`,
          filter: "blur(120px)",
          backgroundColor: "#004fff",
          width: "364px",
          height: "364px",
          borderRadius: "50%",
        }}
      />
      <Box
        style={{
          transform: `translate3d(${isMobile ? "-150px" : "-300px"}, ${
            isMobile ? "60vh" : "-150px"
          }, 0)`,
          filter: "blur(180px)",
          backgroundColor: "#230088",
          width: "425px",
          height: "425px",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
}
