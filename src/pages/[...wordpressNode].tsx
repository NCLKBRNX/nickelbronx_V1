import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetStaticPaths, GetServerSideProps  } from "next";
import { WordPressTemplateProps } from "../types";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps  = (ctx) => {
  return getWordPressProps({ ctx });
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
