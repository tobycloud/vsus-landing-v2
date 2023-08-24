import { Box, Center, Image, Text, Title } from "@mantine/core";
import BackgroundVideo from "../../../components/BackgroundVideo";

export default function Home() {
  return (
    <Box pos={"absolute"} top={0}>
      <Box sx={{ position: "relative" }}>
        <BackgroundVideo video="/home-bg.mp4" isHome={true} />
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
            Your deployable VM-like coding environments, accessible from
            anywhere.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
