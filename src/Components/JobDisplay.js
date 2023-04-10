import './JobDisplay.css';

const JobDisplay = () => {
  return (
    <div>
      <div className="pb-2 header-div px-4 pt-4">
        <div className="capitalize text-xl font-semibold">Maison</div>
        <div className="capitalize text-lg underline mt-2">Maison</div>
        <div className="capitalize text-lg mt-2">Japan</div>
        <button className="px-3 py-2 apply-button mt-3">
          Apply on Company Site
        </button>
      </div>
      <div className="px-4 pt-4 pb-4">
        <div className="capitalize text-xl font-semibold">Job Details</div>
        <div>$100 per day - Full-time</div>
        <div>Job Decription</div>
      </div>
    </div>
  );
};

export default JobDisplay;
