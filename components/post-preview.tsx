import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
  coverImage: string;
};

const PostPreview = ({ title, date, slug, coverImage }: Props) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <Link href={`/posts/${slug}`}>
        <div>
          <img className="rounded-t-lg" src={coverImage} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <DateFormatter dateString={date} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
