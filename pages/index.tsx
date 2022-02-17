import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CONTENT_IN_ABOUT_SECTION } from "../lib/constants";
import Post from "../types/post";
import Hero from "../components/hero";
import Section from "../components/section";
import CustomImage from "../components/custom-image";
import Activity from "../components/activity";

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

        <Hero imageUrl="/assets/hero/hero.jpg" />

        {/* About sction */}
        <Section
          index="About"
          borderColor="cyan"
          content={CONTENT_IN_ABOUT_SECTION}
        >
          <Container>
            <CustomImage imageUrl="/assets/hero/hero.jpg" alt="hero_image" />
          </Container>
        </Section>

        {/* Activity section */}
        {/* <Section index="Activity" borderColor="pink">
          <Container>
            <Activity />
          </Container>
        </Section> */}

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
