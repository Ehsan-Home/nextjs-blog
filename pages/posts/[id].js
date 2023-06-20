import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostsIDs, getPostData } from "../../lib/posts";
import { parseDate } from "../../lib/date";

import styles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostsIDs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
}

const Post = ({ postData }) => {
  const date = parseDate(postData.date);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.id}
      <br />
      <h1 className={styles.headingXl}>{postData.title}</h1>
      <br />
      <div className={styles.lightText}>{date}</div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
