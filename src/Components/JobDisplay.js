import './JobDisplay.css';

const JobDisplay = () => {
  return (
    <div className="jobDisplay mb-3">
      <div className="pb-2 header-div px-4 pt-4 rounded-t-xl">
        <div className="capitalize text-xl font-semibold">Maison</div>
        <div className="capitalize text-lg underline mt-2">Maison</div>
        <div className="capitalize text-lg mt-2">Japan</div>
        <button className="px-3 py-2 apply-button mt-3">
          Apply on Company Site
        </button>
      </div>
      <div className="px-4 pt-4 pb-4 h-3/4 jobDetails rounded-b-xl">
        <div className="capitalize text-xl font-semibold">Job Details</div>
        <ul className="ml-8 mt-2">
          <li>$100 per day</li>
          <li>Full-time</li>
        </ul>
        <div className="text-md mt-3 font-semibold">Job Decription</div>
        <div className="mt-2">
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison maison
          maison maison maison maison maison maison maison maison
        </div>
        <div className="mt-3 text-sm text-gray-600">
          Contact email: maison@gmail.com
        </div>
      </div>
    </div>
  );
};

export default JobDisplay;
