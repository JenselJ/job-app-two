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
}) {
  const [dropdownShow, setDropdownShow] = useState(false);

  function dropdownVisiblity() {
    console.log('dropdown visiblity triggered');
    if (dropdownShow === false) {
      setDropdownShow(true);
    } else if (dropdownShow === true) {
      setDropdownShow(false);
    }
    console.log(dropdownShow);
  }

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
              <div className="py-6 px-6 lg:px-8">
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
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Job Description{' '}
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                      type="number"
                      onChange={e => setJobDescription(e.target.value)}
                    />
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
                          type="number"
                          min="1"
                          max="7"
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
                          per{' '}
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
                          className="z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 dropdown"
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
                                  id="default-radio-4"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  onClick={() => {
                                    setJobSalaryUnit('/hr');
                                  }}
                                />
                                <label
                                  for="default-radio-4"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  hour
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
                                    setJobSalaryUnit('/day');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-4"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  day
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-6"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  onClick={() => {
                                    setJobSalaryUnit('/wk');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-6"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  week
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-6"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  onClick={() => {
                                    setJobSalaryUnit('/mo');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-6"
                                  className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                >
                                  month
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-6"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  onClick={() => {
                                    setJobSalaryUnit('/yr');
                                  }}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-6"
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
                  </div>
                  <button
                    type="submit"
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
