import { Container, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

const useStyles = createStyles(() => ({
  main: {
    textAlign: "left",
    marginTop: "30px",
    marginBottom: "5vh",
  },
}));

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - vSuS";
  }, []);
  const { classes } = useStyles();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/documents/terms_of_service.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Container className={classes.main}>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      />
    </Container>
  );
}
