import { leadershipSplitData } from "./leadershipSplitData";

const LeadershipSplit = () => {
  return (
    <section className="px-6 py-20">

      <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">

        {/* Image */}
        <img
          src={leadershipSplitData.image}
          className="rounded-xl"
        />

        {/* Content */}
        <div>

          <h2 className="mb-4 text-2xl font-bold">
            {leadershipSplitData.title}
          </h2>

          <p className="mb-6 text-gray-600">
            {leadershipSplitData.description}
          </p>

          <div>
            <h4 className="font-semibold">
              {leadershipSplitData.name}
            </h4>
            <p className="text-sm text-gray-500">
              {leadershipSplitData.role}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default LeadershipSplit;