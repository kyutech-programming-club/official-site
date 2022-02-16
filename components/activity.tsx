import { ACTIVITY_INFO } from "../lib/constants";
import ActivityElement from "./activity-element";

const Activity = () => {
  const activities = ACTIVITY_INFO;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {activities.map((activity) => (
            <ActivityElement
              index={activity.index}
              content={activity.content}
            />
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default Activity;
