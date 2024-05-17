import { Icon, IconProps } from "@tabler/icons-react";
import react from "react";

export type TablerIcon = react.ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & react.RefAttributes<Icon>
>;
