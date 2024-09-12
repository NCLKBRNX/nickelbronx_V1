import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { WordPressTemplateProps } from "../types";
import { GetServerSideProps } from "next";

// Your page component
export default function Page(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}

// Updated getServerSideProps function
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch data dynamically on each request
  const props = await getWordPressProps({ ctx });
  
  return {
    props,
  };
};
