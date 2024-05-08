import { Avatar, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Glows() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box
      w="100vw"
      style={{ position: "absolute", zIndex: "-999", overflowX: "clip" }}
    >
      <Avatar
        size={512}
        variant="filled"
        color="#004f88"
        style={{
          transform: `translate(-100px, -200px)`,
          filter: "blur(120px)",
        }}
      >
        {" "}
      </Avatar>
      <Avatar
        size={364}
        variant="filled"
        color="#04FFFF"
        style={{
          transform: `translate(95vw, ${isMobile ? "20vh" : "-150px"})`,
          filter: "blur(120px)",
        }}
      >
        {" "}
      </Avatar>
      <Avatar
        size={425}
        variant="filled"
        color="#230088"
        style={{
          transform: `translate(-300px, ${isMobile ? "60vh" : "-150px"})`,
          filter: "blur(180px)",
        }}
      >
        {" "}
      </Avatar>
    </Box>
  );
}
