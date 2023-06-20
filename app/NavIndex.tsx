import { IconType } from "react-icons";
import {
  ArtifactDatabaseIcon,
  DocumentationIcon,
  FluxIcon,
  PrimaeLogo,
  WorldIcon,
} from "@/public/icons";

export type Item = {
  name?: string;
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
        icon: <FluxIcon className="w-full h-auto" />,
      },
    ],
  },
  {
    items: [
      {
        name: "World",
        slug: "world",
        description: "string",
        icon: <WorldIcon className="w-full h-auto" />,
      },
    ],
  },
  {
    items: [
      {
        name: "Artifacts",
        slug: "artifacts",
        description: "string",
        icon: <ArtifactDatabaseIcon className="w-full h-auto" />,
      },
    ],
  },
  {
    items: [
      {
        name: "Documentation",
        slug: "documentation",
        description: "string",
        icon: <DocumentationIcon className="w-full h-auto" />,
      },
    ],
  },
];
