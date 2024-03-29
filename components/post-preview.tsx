import PostCard from "./post-card";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const PostPreview = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid md:grid-cols-3 md:gap-x-12 lg:gap-x-20 gap-y-20 md:gap-y-32 mb-16 place-content-center mt-10">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            coverImage={post.coverImage}
          />
        ))}
      </div>
    </section>
  );
};

export default PostPreview;
