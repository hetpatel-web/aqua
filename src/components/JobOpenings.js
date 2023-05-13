import { useState, useEffect } from "react";
import Head from "next/head";

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <Head>
        <title>Job Openings - Aqua</title>
      </Head>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Job Openings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="border border-gray-300 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <p className="text-gray-600">Location: {job.location}</p>
              <p className="text-gray-600">Salary: {job.salary}</p>
              <a href={job.applyUrl} className="text-blue-500 font-semibold">
                Apply now
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobOpenings;
