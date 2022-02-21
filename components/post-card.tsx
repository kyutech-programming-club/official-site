import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
  coverImage: string;
};

const PostCard = ({ title, date, slug, coverImage }: Props) => {
  return (
    <div className="max-w-sm bg-white rounded-lg">
      <Link href={`/posts/${slug}`}>
        <div>
          <img className="rounded-lg" src={coverImage} alt="" />
          <div className="p-5 text-left">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            {date}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
