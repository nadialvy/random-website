import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({
  title,
  role,
  duration,
  description,
  link,
  techStack,
  bgImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trimmedText = `${description.slice(0, 100)}...`;
  return (
    <>
      <li
        className={`card rounded-3xl max-lg:rounded-xl  max-w-full grayscale hover:grayscale-0 transition-[filter] duration-300 ${bgImage} bg-center bg-no-repeat bg-cover group relative`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 lg:opacity-45" />

        {/* Card Body */}
        <div className="card-body relative flex flex-col w-full justify-between items-start z-10 h-full p-6 max-lg:p-4 text-white">
          <div className="flex w-full justify-between items-stretch">
            <h2 className="max-lg:text-[14px] text-[20px] text-white">
              {role}
            </h2>
            <p className="text-end max-lg:text-[14px] text-white force-white">
              {duration}
            </p>
          </div>

          {/* Project Details */}
          <div className="flex w-full flex-col justify-start items-start text-[14px]">
            <div className="flex max-lg:flex-col max-lg:justify-start max-lg:items-start justify-between w-full items-center gap-4">
              <p className="max-lg:text-[18px] force-white text-[24px] mb-2 font-semibold max-lg:-mb-4">
                {title}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-lg:text-[12px] max-lg:mt-2 text-end px-4 py-1 mb-2 hover:border-black hover:text-black hover:bg-white duration-150 transition-all"
              >
                View Project
              </a>
            </div>

            <p className="text-justify block lg:hidden [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
              {trimmedText}{" "}
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                className="text-yellow-500 font-medium underline"
                onClick={() => setIsModalOpen(true)}
              >
                Read more
              </button>
            </p>
            <p className="text-justify force-white hidden lg:block [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
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
                  <p className="force-white">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex px-3 items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full text-black relative">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-justify whitespace-pre-line text-[14px]">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

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
