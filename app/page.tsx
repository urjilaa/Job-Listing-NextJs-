import React from "react";
import Card from "./components/Card";
import jobs from "../public/jobs.json";
import Link from "next/link";
const Home = () => {
  return (
    <div className="px-28">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="m-3 text-xl font-bold">Opportunities</h1>
          <p className="m-3">Showing 73 results</p>
        </div>
        <div>
          <select>
            <option>
              Sort by: Most relevent
            </option>
            <option>
              Sort by: Size
            </option>
          </select>
        </div>
      </div>
      <div>
        {jobs.job_postings.map((job, index) => (
          <Link href={`/discription/${index}`}>
            <Card
              key={index}
              jobTitle={job.title}
              companyName={job.company}
              jobDescription={job.description}
              imageUrl={job.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
