import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './AddJob.css';
import { useState } from 'react';

export default function AddJobModal({
  addJobShow,
  setJobTitle,
  setJobDescription,
  handleSubmit,
  setAddJobShow,
  setJobSalary,
  setJobSalaryUnit,
  setContactEmail,
  jobTitle,
  jobDescription,
  jobSalary,
  contactEmail,
  jobNameFail,
  jobDescriptionFail,
  jobSalaryFail,
  contactEmailFail,
  companyName,
  setCompanyName,
  companyNameFail,
  setLocation,
  locationFail,
  jobType,
  setJobType,
}) {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [dropdownTwoShow, setDropdownTwoShow] = useState(false);

  const [jobSalaryUnitDisplay, setJobSalaryUnitDisplay] = useState('per');

  function dropdownVisiblity() {
    console.log('dropdown visiblity triggered');
    if (dropdownShow === false) {
      setDropdownShow(true);
    } else if (dropdownShow === true) {
      setDropdownShow(false);
    }
    console.log(dropdownShow);
  }

  function dropdownTwoVisiblity() {
    console.log('dropdownTwo visiblity triggered');
    if (dropdownTwoShow === false) {
      setDropdownTwoShow(true);
    } else if (dropdownTwoShow === true) {
      setDropdownTwoShow(false);
    }
    console.log(dropdownTwoShow);
  }

  // function submitButton() {
  //   // e.preventDefault();
  //   if (jobTitle === '' || jobTitle.length > 30) {
  //     setJobNameFail(true);
  //   } else {
  //     setJobNameFail(false);
  //   }
  //   if (jobDescription.length > 200) {
  //     setJobDescriptionFail(true);
  //   } else {
  //     setJobDescriptionFail(false);
  //   }
  //   if (jobSalary.length > 8 || isNaN(jobSalary) === true) {
  //     setJobSalaryFail(true);
  //   } else {
  //     setJobSalaryFail(false);
  //   }
  //   if (
  //     contactEmail === '' ||
  //     contactEmail.length > 25 ||
  //     contactEmail.includes('@') === false ||
  //     contactEmail.includes('.') === false
  //   ) {
  //     setContactEmailFail(true);
  //   } else {
  //     setContactEmailFail(false);
  //   }

  //   if (
  //     jobTitle !== '' &&
  //     jobTitle.length < 31 &&
  //     jobDescription.length < 201 &&
  //     jobSalary.length < 9 &&
  //     isNaN(jobSalary) === false &&
  //     contactEmail.length < 26 &&
  //     contactEmail !== '' &&
  //     contactEmail.includes('@') === true &&
  //     contactEmail.includes('.') === true
  //   ) {
  //     handleSubmit();
  //   }
  // }

  return (
    // <Modal
    // {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Form onSubmit={props.handleSubmit}>
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Add a new job listing
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <Form.Group className="mb-3">
    //       <Form.Label>Job Title</Form.Label>
    //       <Form.Control placeholder="Job Title" onChange={(e) => props.setJobTitle(e.target.value)}/>
    //     </Form.Group>

    //     <Form.Group className="mb-3">
    //       <Form.Label>Description</Form.Label>
    //       <Form.Control placeholder="Decription" onChange={(e) => props.setJobDescription(e.target.value)}/>
    //     </Form.Group>
    //   </Modal.Body>
    //   <Modal.Footer>
    //   <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Modal.Footer>
    //   </Form>
    // </Modal>
    <>
      <div style={{ display: addJobShow === true ? 'block' : 'none' }}>
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
        >
          <div className="modal-center p-4 w-full max-w-md h-full h-auto mx-auto place-self-center">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  setAddJobShow(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="addJob py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Add a Job Listing{' '}
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Job Name
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                      onChange={e => setJobTitle(e.target.value)}
                    />
                    <label
                      className="block mt-2 text-red-500 text-xs font-medium text-gray-900 dark:text-gray-300"
                      style={{
                        display: jobNameFail === true ? '' : 'none',
                      }}
                    >
                      Job name should be 1-30 characters long
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Company
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                      onChange={e => setCompanyName(e.target.value)}
                    />
                    <label
                      className="block mt-2 text-red-500 text-xs font-medium text-gray-900 dark:text-gray-300"
                      style={{
                        display: companyNameFail === true ? '' : 'none',
                      }}
                    >
                      Company name should be 1-20 characters long
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Location
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                      onChange={e => setLocation(e.target.value)}
                    />
                    <label
                      className="block mt-2 text-red-500 text-xs font-medium text-gray-900 dark:text-gray-300"
                      style={{
                        display: locationFail === true ? '' : 'none',
                      }}
                    >
                      Location name should be 1-20 characters long
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Job Description{' '}
                    </label>
                    {/* <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                      onChange={e => setJobDescription(e.target.value)}
                    /> */}
                    <textarea
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      rows="10"
                      maxLength={2000}
                      onChange={e => setJobDescription(e.target.value)}
                      required=""
                    ></textarea>
                    <label
                      className="block mt-2 text-red-500 text-xs font-medium text-gray-900 dark:text-gray-300"
                      style={{
                        display: jobDescriptionFail === true ? '' : 'none',
                      }}
                    >
                      Job description should be max 2000 characters long
                    </label>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Salary{' '}
                    </label>
                    <div className="flex flex-row">
                      <div className="w-12 bg-gray-200 flex items-center justify-center rounded-lg mr-1">
                        <div>$</div>
                      </div>
                      <div className="w-3/4">
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required=""
                          onChange={e => setJobSalary(e.target.value)}
                        />
                      </div>

                      <div className="w-1/4">
                        <button
                          id="dropdownRadioBgHoverButton"
                          data-dropdown-toggle="dropdownRadioBgHover"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 ml-1 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                          onClick={dropdownVisiblity}
                        >
                          {jobSalaryUnitDisplay}
                          <svg
                            className="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id="dropdownRadioBgHover"
                          className="mt-24 z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 dropdown"
                          style={{
                            visibility:
                              dropdownShow === true ? 'visible' : 'hidden',
                          }}
                          data-popper-reference-hidden=""
                          data-popper-escaped=""
                          data-popper-placement="bottom"
                        >
                          <ul
                            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownRadioBgHoverButton"
                          >
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-1"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  onClick={() => {
                                    setJobSalaryUnit('/hr');
                                    dropdownVisiblity();
                                    setJobSalaryUnitDisplay('/hr');
                                  }}
                                />
                                <label
                                  for="default-radio-1"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  hour
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-2"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  onClick={() => {
                                    setJobSalaryUnit('/day');
                                    dropdownVisiblity();
                                    setJobSalaryUnitDisplay('/day');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-2"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  day
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-3"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  onClick={() => {
                                    setJobSalaryUnit('/wk');
                                    dropdownVisiblity();
                                    setJobSalaryUnitDisplay('/wk');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-3"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  week
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-4"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  onClick={() => {
                                    setJobSalaryUnit('/mo');
                                    dropdownVisiblity();
                                    setJobSalaryUnitDisplay('/mo');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-4"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  month
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-5"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  onClick={() => {
                                    setJobSalaryUnit('/yr');
                                    dropdownVisiblity();
                                    setJobSalaryUnitDisplay('/yr');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-5"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  year
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <label
                      className="block mt-2 text-red-500 text-xs font-medium text-gray-900 dark:text-gray-300"
                      style={{
                        display: jobSalaryFail === true ? '' : 'none',
                      }}
                    >
                      Job salary should be 1-8 digits long and only contain
                      numbers
                    </label>

                    <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Job Type{' '}
                    </label>

                    <div className="w-full h-10 flex rounded mt-4 border">
                      <div
                        className="w-1/4 jobType flex hover:bg-gray-400 hover:cursor-pointer"
                        onClick={() => {
                          setJobType('Full-time');
                        }}
                        style={{
                          backgroundColor:
                            jobType === 'Full-time' ? '#e7e7e7' : 'white',
                        }}
                      >
                        <div
                          className="m-auto"
                          style={{
                            fontWeight:
                              jobType === 'Full-time' ? '600' : '',
                          }}
                        >
                          Full-time
                        </div>
                      </div>
                      <div
                        className="w-1/4 jobType flex hover:bg-gray-400 hover:cursor-pointer"
                        onClick={() => {
                          setJobType('Part-time');
                        }}
                        style={{
                          backgroundColor:
                            jobType === 'Part-time' ? '#e7e7e7' : 'white',
                        }}
                      >
                        <div
                          className="m-auto"
                          style={{
                            fontWeight:
                              jobType === 'Part-time' ? '600' : '',
                          }}
                        >
                          Part-time
                        </div>
                      </div>
                      <div
                        className="w-1/4 jobType flex hover:bg-gray-400 hover:cursor-pointer"
                        onClick={() => {
                          setJobType('Casual');
                        }}
                        style={{
                          backgroundColor:
                            jobType === 'Casual' ? '#e7e7e7' : 'white',
                        }}
                      >
                        <div
                          className="m-auto"
                          style={{
                            fontWeight: jobType === 'Casual' ? '600' : '',
                          }}
                        >
                          Casual
                        </div>
                      </div>
                      <div
                        className="w-1/4 flex hover:bg-gray-400 hover:cursor-pointer"
                        onClick={() => {
                          setJobType('Contract');
                        }}
                        style={{
                          backgroundColor:
                            jobType === 'Contract' ? '#e7e7e7' : 'white',
                        }}
                      >
                        <div
                          className="m-auto"
                          style={{
                            fontWeight:
                              jobType === 'Contract' ? '600' : '',
                          }}
                        >
                          Contract
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Contact Email{' '}
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required=""
                        onChange={e => setContactEmail(e.target.value)}
                      />
                      <label
                        className="block mt-2 text-red-500 text-xs font-medium text-gray-900 dark:text-gray-300"
                        style={{
                          display: contactEmailFail === true ? '' : 'none',
                        }}
                      >
                        Contact email should be 1-25 characters long and
                        contain an '@' and '.'
                      </label>
                    </div>
                  </div>
                  <button
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                  >
                    Submit{' '}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
