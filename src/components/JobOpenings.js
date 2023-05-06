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
        <ul>
          {jobs.map((job) => (
            <li key={job.id} className="mb-4">
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p className="text-gray-600">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JobOpenings;
