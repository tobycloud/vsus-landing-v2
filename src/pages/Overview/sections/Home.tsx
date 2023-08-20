import { Box, Center, Image, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Box pos={"absolute"} top={0}>
      <Box sx={{ position: "relative" }}>
        <div
          style={{
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay={true}
            loop
            muted
            style={{
              filter: "blur(5px) brightness(50%)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          >
            <source src="/trailer.mp4" type="video/mp4" />
          </video>
        </div>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Center>
            <Image src={"/logo.svg"} height={"10vh"} width={"auto"} />
          </Center>
          <Title sx={{ margin: "2vh 0 2vh 0" }}>vSuS</Title>
          <Text>
            Your deployable VM-like coding environments, access from anywhere.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
