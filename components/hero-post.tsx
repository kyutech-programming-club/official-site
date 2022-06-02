import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
  coverImage: string;
};

const HeroPost = ({ title, date, slug, coverImage }: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">{date}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
