import mainImg from "../../../assets/images/1.jpg";
import ownerImg from "../../../assets/images/26.jpg";

const LeadershipSplit = () => {
  return (
    <section className="px-6 py-20 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={mainImg}
              alt="team"
              className="w-full h-[320px] lg:h-[380px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between gap-8 ">
            <h2 className="text-3xl text-[#0e3b3b] lg:text-4xl font-bold">
              At Lambda, we prioritize transparency & inclusivity
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our mission is rooted in the belief that every individual deserves
              the opportunity to live a dignified and fulfilling life. We aim to
              support communities through real impact and long-term solutions.
            </p>

            {/* OWNER (IMPORTANT — YOU MISSED THIS BEFORE) */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={ownerImg}
                alt="owner"
                className="object-cover w-16 h-16 rounded-full"
              />

              <div>
                <h4 className="text-lg font-semibold text-[#0e3b3b]">
                  Aimee Preece
                </h4>
                <p className="text-sm text-gray-500">CEO, Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSplit;
