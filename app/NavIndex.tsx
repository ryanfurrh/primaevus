import { IconType } from "react-icons";
import {
  ArtifactDatabaseIcon,
  DeveloperLogIcon,
  FluxIcon,
  WorldIcon,
} from "@/public/icons";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ReactComponentElement } from "react";

export type Item = {
  name: string;
  slug: string;
  description?: string;
  icon: any;
};

export const NavIndex: { items: Item[] }[] = [
  {
    items: [
      {
        name: "Flux",
        slug: "flux",
        description: "string",
        icon: <FluxIcon />,
      },
    ],
  },
  {
    items: [
      {
        name: "The World",
        slug: "the-world",
        description: "string",
        icon: <WorldIcon />,
      },
    ],
  },
  {
    items: [
      {
        name: "Artifact Database",
        slug: "artifact-database",
        description: "string",
        icon: <ArtifactDatabaseIcon />,
      },
    ],
  },
  {
    items: [
      {
        name: "Developer Log",
        slug: "dev-log",
        description: "string",
        icon: <DeveloperLogIcon />,
      },
    ],
  },
];
