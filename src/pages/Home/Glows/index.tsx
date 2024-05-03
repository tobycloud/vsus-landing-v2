import { Avatar, Box } from "@mantine/core";

export default function Glows() {
  return (
    <Box vw="99vw" style={{ position: "absolute", zIndex: "-999" }}>
      <Avatar
        size={512}
        variant="filled"
        color="#004f88"
        style={{
          transform: "translate(-100px, -200px)",
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
          transform: "translate(95vw, -200px)",
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
          transform: "translate(-100px, -200px)",
          filter: "blur(180px)",
        }}
      >
        {" "}
      </Avatar>
    </Box>
  );
}
