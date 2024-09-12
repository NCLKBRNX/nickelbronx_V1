import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetServerSideProps } from "next";
import { WordPressTemplateProps } from "../types";

// Page component
export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

// Fetch data on each request
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch WordPress data dynamically on each request
  const props = await getWordPressProps({ ctx });

  return {
    props,
  };
};
