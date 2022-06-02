import Container from "../components/container";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Section from "../components/section";
import About from "../components/about";
import Button from "../components/button";
import PostPreview from "../components/post-preview";
import Recruitment from "../components/recruitment";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CONTENT_IN_ABOUT_SECTION } from "../lib/constants";
import Post from "../types/post";

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
            {topPosts.length > 0 && <PostPreview posts={topPosts} />}
            <Button
              href="/blog"
              message="もっとブログを見る"
              borderColor="teal"
            />
          </Container>
        </Section>

        {/* Recruitment section */}
        <Section index="Recruitment" borderColor="pink">
          <Container>
            <Recruitment />
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
