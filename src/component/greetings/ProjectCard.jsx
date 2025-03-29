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
  const trimmedText = `${description.slice(0, 100)}...`;
  return (
    <li
      className={`card rounded-3xl max-lg:rounded-xl grayscale hover:grayscale-0 transition-[filter] duration-300 ${bgImage} bg-center bg-no-repeat bg-cover group relative overflow-hidden`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 lg:opacity-45" />

      {/* Card Body */}
      <div className="card-body relative flex flex-col w-full justify-between items-start z-10 h-full p-6 max-lg:p-4 text-white">
        <div className="flex w-full justify-between items-stretch">
          <h2 className="max-lg:text-[14px] text-[20px]">{role}</h2>
          <p className="text-end max-lg:text-[14px]">{duration}</p>
        </div>

        {/* Project Details */}
        <div className="flex w-full flex-col justify-start items-start text-[14px]">
          <div className="flex max-lg:flex-col max-lg:justify-start max-lg:items-start justify-between w-full items-center gap-4">
            <p className="max-lg:text-[18px] text-[24px] mb-2 font-semibold max-lg:-mb-4">
              {title}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white max-lg:text-[12px] max-lg:mt-2 text-end px-4 py-1 mb-2 hover:border-black hover:text-black hover:bg-white duration-150 transition-all"
            >
              View Project
            </a>
          </div>

          <p className="text-justify block lg:hidden [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
            {trimmedText}{" "}
            <span className="text-yellow-500 font-medium">Read more</span>
          </p>
          <p className="text-justify hidden lg:block [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
            {description}
          </p>

          <hr className="w-full h-[0.5px] bg-white my-4" />

          {/* Tech Stack */}
          <div className="flex w-full flex-wrap justify-start items-start gap-2">
            {techStack.map((tech, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="flex text-[10px] lg:text-[16px] bg-white bg-opacity-35 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] justify-start items-center gap-1 border border-white px-3 py-[2px]"
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
