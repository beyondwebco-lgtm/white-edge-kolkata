import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";
import type { SanityImage } from "./types";

const imageBuilder = createImageUrlBuilder(client);

type SanityImageSource =
  | SanityImage
  | {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };

export function urlForImage(source?: SanityImageSource | null) {
  if (!source || !source.asset) {
    return null;
  }
  return imageBuilder.image(source).auto("format").fit("max");
}
