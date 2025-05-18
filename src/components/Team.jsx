import { mongodblogo } from "../assets";
import Sajal from "../assets/sajal-pic.png";
import DemoPersion from "../assets/person.avif";

function Team() {
  const teamMembers = [
    { name: "Sajal Ghosh", role: "Full Stack Developer", image: Sajal },
    { name: "Abhik Laha", role: "Full Stack Developer", image: DemoPersion },
    { name: "Subhrodeep Das", role: "Full Stack Developer", image: DemoPersion },
  ];

  return (
    <section className="w-full mb-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-center text-4xl mb-4 text-blue-900 font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">
          Meet Our Team
          {/* <span className="block w-24 h-1 bg-gradient-to-r from-red-500 to-transparent mt-2 mx-auto" /> */}
        </h1>
      </div>

      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8 flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-[200px]">
            <img
              src={member.image}
              alt={member.name}
              className="h-[150px] w-[150px] rounded-full border border-gray-300 mb-3 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-900">{member.name}</h2>
            <p className="text-gray-600 text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
