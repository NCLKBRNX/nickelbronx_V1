import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetStaticPaths, GetStaticProps } from "next";
import { WordPressTemplateProps } from "../types";

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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
