import { Icon, IconProps } from "@tabler/icons-react";
import react from "react";
import { PBDocument } from "../database/models";

export type TablerIcon = react.ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & react.RefAttributes<Icon>
>;

export type FooterContent = {
  title: string;
  links: { label: string; link: string }[];
};

export type DocumentSectionType = {
  title: string;
  icon: TablerIcon;
  documents: { title: string; readable_id: string }[];
};

export type StillNeedHelpType = {
  icon: TablerIcon;
  title: string;
  link: string;
};

export type OfferType = { number: string; title: string };

export type FAQType = { value: string; question: string; answer: string };

export type FeatureType = {
  title: string;
  icon: TablerIcon;
  description: string;
  bg: string;
};

export type PricingBoxType = {
  title: string;
  topColor: string;
  bottomColor: string;
  borderColor: string;
  price: string;
  description: string;
  features: string[];
};

export type TesimonialType = {
  avatar: string;
  name: string;
  position: string;
  review: string;
};

export type FetchedDocumentType = {
  document: PBDocument;
  sectionTitle: string;
};
