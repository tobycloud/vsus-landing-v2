import { Box, Center, Image, Text, Title } from "@mantine/core";

export default function Home() {
    return (
        <Box pos={"absolute"} top={0}>
            <Box style={{ position: "relative" }}>
                <video autoPlay={true} width={"100%"} height={"auto"} loop muted style={{ filter: "blur(2px)" }}>
                    <source src="/trailer.mp4" type="video/mp4" />
                </video>
                <Box style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", textAlign: "center", alignItems: "center" }}>
                    <Center>
                        <Image src={"/logo.svg"} height={"10vh"} width={"auto"} />
                    </Center>
                    <Title>Meet vSuS</Title>
                    <Text>Your deployable VM-like coding environments, access from anywhere.</Text>
                </Box>
            </Box>
        </Box>
    )
}
