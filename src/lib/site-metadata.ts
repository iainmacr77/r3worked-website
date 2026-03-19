import type { Metadata } from "next";

type SiteMetadataInput = {
  title: string;
  description: string;
};

export function createSiteMetadata({
  title,
  description,
}: SiteMetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "R3WORKED",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
