import React from "react";
import TechStackItem from "./TechStackItem";
export default function TechStack() {
  return (
    <div className="flex max-lg:px-3 flex-col justify-start items-start w-full text-[15px] gap-y-4 mt-12 cursor-default">
      <p className="font-roboto font-bold text-[24px] max-md:text-[19px]">
        Stacks
      </p>
      <div className="w-full flex max-md:flex-col max-md:gap-4 gap-12 -mt-4 justify-start items-start">
        <div className="lg:w-1/2 flex flex-col justify-start items-start max-md:gap-4 gap-8">
          <div>
            <p className="font-roboto text-[16px] font-medium lg:font-semibold">
              Programming Language
            </p>
            <div className="flex justify-start flex-wrap items-center gap-2">
              <TechStackItem
                icon="/images/stack/ts.svg"
                altText="typescript"
                label="Typescript"
              />
              <TechStackItem
                icon="/images/stack/js.svg"
                altText="javascript"
                label="Javascript"
              />
              <div className="hidden md:block md:w-[10px] lg:w-[10%]" />
              <TechStackItem
                icon="/images/stack/go.svg"
                altText="golang"
                label="Golang"
              />
            </div>
          </div>
          <div>
            <p className="font-roboto text-[16px] font-medium lg:font-semibold">
              Framework and Library
            </p>
            <div className="flex justify-start flex-wrap items-center gap-2">
              <TechStackItem
                icon="/images/stack/next.svg"
                altText="next"
                label="Next JS"
              />
              <TechStackItem
                icon="/images/stack/tailwind.svg"
                altText="tailwind"
                label="Tailwind"
              />
              <TechStackItem
                icon="/images/stack/shadcn.svg"
                altText="shadcn"
                label="Shadcn-ui"
              />
              <TechStackItem
                icon="/images/stack/flutter.svg"
                altText="flutter"
                label="Flutter"
              />
              <TechStackItem
                icon="/images/stack/go.svg"
                altText="gin"
                label="Gin"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-start items-start max-md:gap-4 gap-8">
          <div>
            <p className="font-roboto text-[16px] font-medium lg:font-semibold">
              Animation
            </p>
            <div className="flex justify-start flex-wrap items-start gap-2">
              <TechStackItem
                icon="/images/stack/gsap.jpg"
                altText="gsap"
                label="GSAP"
              />
              <TechStackItem
                icon="/images/stack/scrollmagic.jpg"
                altText="scrollmagic"
                label="Scroll Magic"
              />
              <TechStackItem
                icon="/images/stack/frammer.svg"
                altText="frammer"
                label="Frammer Motion"
              />
              <TechStackItem
                icon="/images/stack/aos.png"
                altText="aos"
                label="AOS"
              />
            </div>
          </div>
          <div>
            <p className="font-roboto text-[16px] font-medium lg:font-semibold">
              Project Management
            </p>
            <div className="flex justify-start flex-wrap items-center gap-2">
              <TechStackItem
                icon="/images/stack/gh.svg"
                altText="github project"
                label="Github Projects"
              />
              <TechStackItem
                icon="/images/stack/jira.svg"
                altText="jira"
                label="Jira"
              />
              <TechStackItem
                icon="/images/stack/notion.svg"
                altText="notion"
                label="Notion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
