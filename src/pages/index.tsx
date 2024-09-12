import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { WordPressTemplateProps } from "../types";
import { getServerSideProps } from "next";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getServerSideProps: getServerSideProps = (ctx) => {
  return getWordPressProps({ ctx });
};
