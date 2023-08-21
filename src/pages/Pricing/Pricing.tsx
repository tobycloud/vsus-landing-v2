import { Box, Title } from "@mantine/core";
import BackgroundVideo from "../../components/BackgroundVideo";
import PlansBox from "../../components/PlansBox";
import "./style.css";

export default function Home() {
  return (
    <Box pos={"absolute"} top={0}>
      <Box sx={{ position: "relative" }}>
        <BackgroundVideo video="/pricing-bg.mp4" isHome={false} />
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title sx={{ position: "absolute", top: "10%", fontSize: "50px" }}>
              Pricing
            </Title>
            <Box
              sx={{
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <PlansBox plan="Basic" />
              <PlansBox plan="Pro" />
              <PlansBox plan="God" />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Title sx={{ marginBottom: "15px" }}>Included in all plans</Title>
              <table>
                <tr>
                  <td>Universal Web Code Editor ✓</td>
                  <td>Professional Notes Organizer ✓</td>
                </tr>
                <tr>
                  <td>Always-On ✓</td>
                  <td>Real-time Collaboration ✓</td>
                </tr>
              </table>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
