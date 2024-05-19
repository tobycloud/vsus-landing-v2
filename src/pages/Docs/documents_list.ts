import { IconGavel } from "@tabler/icons-react";
import { DocumentSectionType } from "../../utils/types";

export const documentsList: DocumentSectionType[] = [
  {
    title: "Legal",
    icon: IconGavel,
    documents: [
      {
        title: "Terms of Service",
        readable_id: "terms-of-service",
      },
      {
        title: "Privacy Policy",
        readable_id: "privacy-policy",
      },
    ],
  },
];
