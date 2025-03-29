import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  role,
  duration,
  description,
  link,
  techStack,
  bgImage,
}) => {
  return (
    <li
      className={`card rounded-3xl max-lg:rounded-xl grayscale hover:grayscale-0 transition-[filter] duration-300 ${bgImage} bg-center bg-no-repeat bg-cover group relative overflow-hidden`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-35" />

      {/* Card Body */}
      <div className="card-body relative flex flex-col w-full justify-between items-start z-10 h-full p-6 text-white">
        <div className="flex w-full justify-between items-stretch">
          <h2 className="text-[20px]">{role}</h2>
          <p className="text-end">{duration}</p>
        </div>

        {/* Project Details */}
        <div className="flex w-full flex-col justify-start items-start text-[14px]">
          <div className="flex max-lg:flex-col max-lg:justify-start max-lg:items-start justify-between w-full items-center gap-4">
            <p className="text-[24px] font-semibold max-lg:-mb-4">{title}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-end px-4 py-1 mb-2 hover:border-black hover:text-black hover:bg-white duration-150 transition-all"
            >
              View Project
            </a>
          </div>

          <p className="text-justify [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
            {description}
          </p>

          <hr className="w-full h-[0.5px] bg-white my-4" />

          {/* Tech Stack */}
          <div className="flex w-full flex-wrap justify-start items-start gap-2">
            {techStack.map((tech, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="flex [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] justify-start items-center gap-1 border border-white px-3 py-[2px]"
              >
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

// Define Prop Types
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgImage: PropTypes.string.isRequired,
};

export default ProjectCard;
