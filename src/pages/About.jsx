import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Swati Srivastav
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          🚀 Frontend Developer (Software Engineer 🇮🇳 ) specializing in building
          scalable web applications. Passionate about crafting intuitive user
          interfaces, seamless user experiences, and optimizing system
          efficiency.
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            💡 Collaborated closely with clients and cross-functional teams to
            bridge the gap between business needs and technical solutions.
            Played a pivotal role in feature ideation at an early-stage startup,
            taking on diverse responsibilities to accelerate product growth and
            innovation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences?.length > 0 ? (
              experiences.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={exp.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={exp.icon}
                        alt={exp.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: exp.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: exp.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {exp.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {exp.company_name}
                    </p>
                  </div>

                  {/* Experience Points */}
                  {Array.isArray(exp.points) && exp.points.length > 0 ? (
                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {exp.points.map((point, index) => (
                        <li
                          key={index}
                          className="text-black-500/50 font-normal pl-1 text-sm"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic mt-3">
                      No details available.
                    </p>
                  )}
                </VerticalTimelineElement>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No work experience found.
              </p>
            )}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
