import React from "react";
import jobs from "../../../public/jobs.json";
import { CheckCircleIcon, MapIcon } from "@heroicons/react/solid";
import { FaCalendarCheck, FaFire } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RxPlusCircled } from "react-icons/rx";
import { FaRegCalendarMinus } from "react-icons/fa6";

interface prop {
  params: {
    id: string;
  };
}
const page = ({ params: { id } }: prop) => {
  const job = jobs.job_postings[+id];
  return (
    <div className="flex flex-row my-3 container mx-auto p-4 border-b border-grey-200">
      <div>
        <div className="text-xl font-bold mb-3">Description</div>
        <p className="text-gray-700 mt-3">{job.description}</p>
        <div className="my-3 pborder-b border-gray-200">
          <h1 className="text-xl font-bold">Resposibilities</h1>
          <ul className=" mt-3">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="text-gray-700 flex mb-2">
                <CheckCircleIcon className="h-6 w-6 border-green-700 text-green-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-3 container mx-auto p-1">
          <div className="text-xl font-bold">Ideal candidate we want</div>
          <ul>
            <li className="list-disc m-4">
              <p>
                Young ({job.ideal_candidate.age} years old){" "}
                {job.ideal_candidate.gender} {job.title}
              </p>
            </li>
          </ul>
          <ul className="list-disc pl-4">
            {job.ideal_candidate.traits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>

        <h1 className="text-xl font-bold my-3">When & where</h1>
        <div className=" flex items-center ">
          <HiOutlineLocationMarker className="h-6 w-6 text-blue-500 mr-2" />
          <p>{job.when_where}</p>
        </div>
      </div>
      <div className="md:w-1/3 md:ml-4 border-b border-grey-200 grid-cols-2  ">
        <h3 className="text-xl font-bold">About</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <RxPlusCircled className="h-6 w-6 text-blue-500 mr-2"/>
            <div>
              <h1 className="ml-auto text-grey-700">Posted on</h1>
              <p className="text-gray-700 font-bold">{job.about.posted_on}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaFire className="h-6 w-6 text-blue-500 mr-2"/>
            <div>
              <p className="text-gray-700">Dead Line</p>
              <p className="text-gray-700 font-bold">{job.about.deadline}</p>
            </div>
          </div>
          <div className="flex items-center">
            <HiOutlineLocationMarker className="h-6 w-6 text-blue-500 mr-2" />   
            <div>
              <p className="text-gray-700">Location</p>
              <p className="text-gray-700 font-bold">{job.about.location}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaRegCalendarMinus className="h-6 w-6 text-blue-500 mr-2" />
            <div>
              <h1 className="text-gray-700">Start Date</h1>
              <p className="text-gray-700 font-bold">{job.about.start_date}</p>
            </div>
          </div>
          <div className="flex items-center" >
            <FaCalendarCheck className="h-6 w-6 text-blue-500 mr-2" />
            <div>
              <h1 className="text-gray-700">End Date</h1>
              <p className="text-gray-700 font-bold">{job.about.end_date}</p>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t m-3">
          <h1 className="text-xl font-bold">Categories</h1>
          {job.about.categories.map((categ, index) => (
            <span key={index} className="mr-3 text-yellow-500 bg-yellow-200 rounded-full">
              {categ}
            </span>
          ))}
        </div>

        <div className="my-4 border-t">
          <h2 className="text-xl font-bold">Required Skills</h2>

          {job.about.required_skills.map((skill, index) => (
            <span key={index} className="my-5 mr-3 text-[#1010d3] bg-blue-400 rounded-md">
              {skill}

            </span>

          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
