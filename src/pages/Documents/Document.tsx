import { Container, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

interface Props {
  title: string;
}

const useStyles = createStyles(() => ({
  main: {
    textAlign: "left",
    marginTop: "30px",
    marginBottom: "5vh",
    width: "99%",
  },
}));

export default function Document(props: Props) {
  const { classes } = useStyles();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    document.title =
      props.title === "privacy"
        ? "Privacy Policy - vSuS"
        : "Terms of Service - vSuS";

    fetch(
      props.title === "privacy"
        ? "/documents/privacy_policy.html"
        : "/documents/terms_of_service.html"
    )
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error:", error));

    window.scrollTo(0, 0);
  }, [props.title]);

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
