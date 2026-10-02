"use client";

import { NextStudio } from "next-sanity/studio";
import sanityConfig from "../../../../studio-white-edge/sanity.config";

export default function Studio() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <NextStudio config={sanityConfig as any} />;
}
