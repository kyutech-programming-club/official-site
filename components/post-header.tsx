import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
  coverImage: string;
};

const PostHeader = ({ title, date, coverImage }: Props) => {
  return (
    <div className="">
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-32 w-auto place-items-center">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
