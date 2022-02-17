import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CONTENT_IN_ABOUT_SECTION } from "../lib/constants";
import Post from "../types/post";
import Hero from "../components/hero";
import Section from "../components/section";
import CustomImage from "../components/custom-image";

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
        <Section
          index="About"
          borderColor="cyan"
          content={CONTENT_IN_ABOUT_SECTION}
        >
          <Container>
            <CustomImage imageUrl="/hero/hero.jpg" alt="hero_image" />
          </Container>
        </Section>

        {/* Blog section */}
        <Section index="Blog" borderColor="teal">
          <Container>
            {topPosts.length > 0 && <MoreStories posts={topPosts} />}
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
