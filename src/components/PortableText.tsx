import { PortableText as BasePortableText } from "@portabletext/react";
import type { PortableTextComponents, PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mt-6 mb-3 uppercase tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mt-5 mb-2 uppercase tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#EF2028] pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-gray-600 mb-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-1.5 text-sm sm:text-base text-gray-600 mb-4">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-[#EF2028] hover:underline font-medium"
        >
          {children}
        </a>
      );
    },
  },
};

export function PortableText({ value }: { value?: PortableTextBlock[] }) {
  if (!value) return null;
  return <BasePortableText value={value} components={components} />;
}
