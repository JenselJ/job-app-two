import { useEffect, useState } from 'react';
import './JobDisplay.css';

const JobDisplay = ({ jobsArray, jobId }) => {
  const [job, setJob] = useState();

  useEffect(() => {
    jobsArray.map(job => {
      if (job.id === jobId) {
        setJob(job);
      }
    });
    console.log(job);
  }, [jobId]);

  return (
    <div className="jobDisplay mb-3">
      {job ? (
        <div>
          <div className="pb-2 header-div px-4 pt-4 rounded-t-xl">
            <div className="capitalize text-xl font-semibold">
              {job && job.job}
            </div>
            <div className="capitalize text-lg underline mt-2">
              {job && job.companyName}
            </div>
            <div className="capitalize text-lg mt-2">
              {job && job.location}
            </div>
            <button className="px-3 py-2 apply-button mt-3">
              Apply on Company Site
            </button>
          </div>
          <div className="px-4 pt-4 pb-4 h-3/4 jobDetails rounded-b-xl">
            <div className="capitalize text-xl font-semibold">
              Job Details
            </div>
            <ul className="ml-8 mt-2">
              <li>
                ${job && job.salary} {job && job.salaryUnit}
              </li>
              <li>{job && job.jobType}</li>
            </ul>
            <div className="text-md mt-3 font-semibold">
              Job Decription
            </div>
            <div className="mt-2">{job && job.description}</div>
            <div className="mt-3 text-sm text-gray-600">
              Contact email: {job && job.contactEmail}
            </div>
          </div>
        </div>
      ) : (
        <div className="jobDisplay">
          <div className="w-fit h-fit m-auto">Select a Job!</div>
        </div>
      )}
    </div>
  );
};

export default JobDisplay;
