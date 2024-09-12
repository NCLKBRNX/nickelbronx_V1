import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { WordPressTemplateProps } from "../types";
import { GetServerSideProps } from "next";

export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps = (ctx) => {
  return getWordPressProps({ ctx });
};
