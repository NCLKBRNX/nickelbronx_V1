import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { WordPressTemplateProps } from "../types";
import { GetStaticProps } from "next";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const wordpressProps = await getWordPressProps({ ctx });

  return {
    ...wordpressProps,
    revalidate: 5,  // Revalidate after 60 seconds (set the desired interval)
  };
};