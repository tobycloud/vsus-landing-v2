import { Container } from "@mantine/core";
import { useEffect, useState } from "react";

interface Props {
  title: string;
}

export default function Document(props: Props) {
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
      .catch(console.error);

    window.scrollTo(0, 0);
  }, [props.title]);

  return (
    <Container>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
        style={{ marginTop: "5vh", textAlign: "left", width: "99%" }}
      />
    </Container>
  );
}
