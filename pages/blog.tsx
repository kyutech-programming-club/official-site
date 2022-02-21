import Container from "../components/container";
import PostPreview from "../components/post-preview";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Section from "../components/section";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const topPosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Blog | proken216</title>
        </Head>

        <Hero imageUrl="/assets/hero/hero2.jpg" />

        {/* All blog section */}
        <Section index="Blog" borderColor="teal">
          <Container>
            {topPosts.length > 0 && <PostPreview posts={topPosts} />}
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "coverImage"]);

  return {
    props: { allPosts },
  };
};
