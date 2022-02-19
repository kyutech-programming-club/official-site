import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Section from "../components/section";
import About from "../components/about";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CONTENT_IN_ABOUT_SECTION } from "../lib/constants";
import Post from "../types/post";
import Button from "../components/button";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const topPosts = allPosts.slice(0, 3);

  return (
    <>
      <Layout>
        <Head>
          <title>proken 216 website</title>
        </Head>

        <Hero imageUrl="/hero/hero.jpg" />

        {/* About sction */}
        <Section index="About" borderColor="cyan">
          <Container>
            <About content={CONTENT_IN_ABOUT_SECTION} />
          </Container>
        </Section>

        {/* Blog section */}
        <Section index="Blog" borderColor="teal">
          <Container>
            {topPosts.length > 0 && <MoreStories posts={topPosts} />}
            <Button
              href="/blog"
              message="もっとブログを見る"
              borderColor="teal"
            />
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
