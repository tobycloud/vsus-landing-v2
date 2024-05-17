import { IconGavel } from "@tabler/icons-react";
import { TablerIcon } from "../../utils/types";

export const documentsList: {title: string; icon: TablerIcon; documents: {title: string; readable_id: string}[]}[] = [
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
