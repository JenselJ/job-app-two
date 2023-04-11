import './Home-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import AddJobModal from './AddJob';
import { Container } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import homeBg from '../home-bg.jpg';
import { UserAuth } from '../AuthContext';
import { uid } from 'react-uid';
import JobCardTwo from './JobCard';
import { useNavigate } from 'react-router-dom';
import JobDisplay from './JobDisplay';
import DeleteConfirm from './DeleteConfirm';

const apiUrl = 'https://job-app-backend.onrender.com';

// const apiUrl = 'http://localhost:5000';

// const apiUrl = 'https://git.heroku.com/job-app-backend-sunny.git';

// function JobCard({
//   job,
//   description,
//   id,
//   comments,
//   getComments,
//   setCommentsJobsArray,
//   commentsArray,
//   getJobs,
//   email,
//   userId,
// }) {
//   // useEffect(() => {
//   //   getComments()
//   //   setInterval(getComments, 5000)
//   // }, [])

//   const { user } = UserAuth();

//   const [comment, setComment] = useState('');

//   const myHeaders = new Headers();

//   const myRequest = new Request(`${apiUrl}/jobs`, {
//     method: 'GET',
//     headers: myHeaders,
//     mode: 'cors',
//     cache: 'default',
//   });

//   async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }

//   function handleCommentSubmit(e) {
//     e.preventDefault();
//     postData(`${apiUrl}/comments`, {
//       comment: comment,
//       id: id,
//       email: user.email,
//       userId: user.uid,
//       username: user.displayName,
//     }).then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//       setComment('');
//       getComments();
//     });
//   }

//   function deleteComment(commentId) {
//     postData(`${apiUrl}/deletecomment`, { id: commentId }).then(data => {
//       console.log(data);
//       console.log('calling getComments');
//       getComments(); // JSON data parsed by `data.json()` call
//     });
//   }

//   function deleteJob(jobId) {
//     postData(`${apiUrl}/deletejob`, { id: jobId }).then(data => {
//       console.log(data);
//       getJobs();
//       setJobId();
//     });
//   }

//   return (
//     <Card
//       style={{
//         width: '22rem',
//         margin: '30px auto',
//         boxShadow: '5px 5px 8px 0px #cbcbcb',
//       }}
//     >
//       <Card.Body>
//         <Card.Title>
//           {job} {email} {userId}
//         </Card.Title>
//         <Card.Text className="description-text">{description}</Card.Text>
//         <Button
//           key={id}
//           onClick={() => {
//             if (user.uid === userId) {
//               deleteJob(id);
//             }
//           }}
//         >
//           Delete Job
//         </Button>
//         <Form onSubmit={handleCommentSubmit}>
//           <div className="comment-div">
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   value={comment}
//                   placeholder="Write a comment..."
//                   onChange={e => setComment(e.target.value)}
//                 />
//               </Form.Group>
//             </div>
//             <div className="comment-button-div">
//               <Button
//                 variant="primary"
//                 type="submit"
//                 size="sm"
//                 className="comment-button"
//               >
//                 Post
//               </Button>
//             </div>
//           </div>
//         </Form>
//         <div>
//           {comments.map((comment, index) => (
//             <div
//               style={{
//                 backgroundColor:
//                   index % 2 === 0 ? '#e7e7e7' : 'whitesmoke',
//               }}
//               className="p-2"
//             >
//               {comment.username} : {comment.comment}
//               <Button
//                 key={comment.id}
//                 onClick={() => {
//                   if (user.uid === comment.userId) {
//                     deleteComment(comment.id);
//                   }
//                 }}
//               >
//                 Delete
//               </Button>
//             </div>
//           ))}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

function HomePage({ username }) {
  const [commentsJobsArray, setCommentsJobsArray] = useState([]);
  const [jobsArray, setJobsArray] = useState([]);
  const { user, logout } = UserAuth();

  const [addJobShow, setAddJobShow] = useState(false);
  useEffect(() => {
    getJobs();
    console.log('use effect');
    // setInterval(getJobs, 5000);
  }, [commentsJobsArray]);

  console.log(user);

  const backgroundImageStyle = {
    backgroundImage: `url(${homeBg})`,
    backgroundSize: 'cover',
  };

  async function getComments() {
    let commentsArray = [];

    await fetch(myRequest)
      .then(response => response.json())
      .then(myResponse => {
        myResponse.content.map(job => {
          if (job.id === job.id) {
            job.comments.map(data => {
              commentsArray.push({
                comment: data.comment,
                email: data.email,
                userId: data.userId,
              });
              console.log(commentsArray);
              return commentsArray;
            });
          } else {
            return 'no id match';
          }
        });
        return 'comments added';
      });

    setCommentsJobsArray(commentsArray);
  }

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // function getJobs() {
  //   fetch('http://localhost:4200/jobs')
  //   .then(data => {
  //   console.log(data.json())
  //   return data.json();
  //   })
  // }

  const myHeaders = new Headers();

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobSalary, setJobSalary] = useState();
  const [jobType, setJobType] = useState('Full-time');
  const [jobSalaryUnit, setJobSalaryUnit] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [location, setLocation] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [jobNameFail, setJobNameFail] = useState(false);
  const [locationFail, setLocationFail] = useState(false);
  const [companyNameFail, setCompanyNameFail] = useState(false);
  const [jobDescriptionFail, setJobDescriptionFail] = useState(false);
  const [jobSalaryFail, setJobSalaryFail] = useState(false);
  const [contactEmailFail, setContactEmailFail] = useState(false);
  const [jobId, setJobId] = useState();
  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const navigate = useNavigate();

  function deleteJob(jobId) {
    postData(`${apiUrl}/deletejob`, { id: jobId }).then(data => {
      console.log(data);
      setDeleteConfirmShow(false);
      getJobs();
      setJobId();
    });
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (error) {
      console.log(error.message);
    }
  };

  const myRequest = new Request(`${apiUrl}/jobs`, {
    method: 'GET',
    headers: { myHeaders, 'Content-Type': 'application/json' },
    mode: 'cors',
    cache: 'default',
  });

  function getJobs() {
    fetch(myRequest)
      .then(response => response.json())
      .then(myResponse => {
        console.log(myResponse.content);
        setJobsArray(myResponse.content);
      });
  }

  function displayName() {
    if (user.displayName) {
      return <div>{user.displayName}</div>;
    } else {
      return <div>{username}</div>;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (jobTitle === '' || jobTitle.length > 30) {
      setJobNameFail(true);
    } else {
      setJobNameFail(false);
    }
    if (companyName === '' || companyName.length > 20) {
      setCompanyNameFail(true);
    } else {
      setCompanyNameFail(false);
    }
    if (location === '' || location.length > 20) {
      setLocationFail(true);
    } else {
      setLocationFail(false);
    }
    if (jobDescription.length > 2000) {
      setJobDescriptionFail(true);
    } else {
      setJobDescriptionFail(false);
    }
    if (jobSalary.length > 8 || isNaN(jobSalary) === true) {
      setJobSalaryFail(true);
    } else {
      setJobSalaryFail(false);
    }
    if (
      contactEmail === '' ||
      contactEmail.length > 25 ||
      contactEmail.includes('@') === false ||
      contactEmail.includes('.') === false
    ) {
      setContactEmailFail(true);
    } else {
      setContactEmailFail(false);
    }

    if (
      jobTitle !== '' &&
      jobTitle.length < 31 &&
      companyName !== '' &&
      companyName.length < 21 &&
      location !== '' &&
      location.length < 21 &&
      jobDescription.length < 2001 &&
      jobSalary.length < 9 &&
      isNaN(jobSalary) === false &&
      contactEmail.length < 26 &&
      contactEmail !== '' &&
      contactEmail.includes('@') === true &&
      contactEmail.includes('.') === true
    ) {
      console.log(jobSalary, jobSalaryUnit);
      postData(`${apiUrl}/jobs`, {
        job: jobTitle,
        description: jobDescription,
        salary: jobSalary,
        salaryUnit: jobSalaryUnit,
        email: user.email,
        userId: user.uid,
        contactEmail: contactEmail,
        companyName: companyName,
        location: location,
        jobType: jobType,
      }).then(data => {
        console.log(data);
        getJobs(); // JSON data parsed by `data.json()` call
      });
      setAddJobShow(false);
      setJobTitle('');
      setJobDescription('');
      setCompanyName('');
      setLocation('');
    }
  }

  // const app = express();
  // const url = new URL('https://localhost:3000')
  // console.log(url)

  // function handleSubmit() {
  //   app.post("/jobs", async (req, res) => {
  //     const id = uuid();
  //     const content = {
  //           "title": jobTitle,
  //           "description": jobDescription
  //     };

  //     if(!content) {
  //       return res.sendStatus(400);
  //     }

  //     await fs.writeFile(`data/job-info/${id}.txt`, content)

  //     res.status(201).json({
  //       id: id
  //     });
  //   })
  // }

  // app.listen(3000, () => console.log("API Server is running..."));

  return (
    <>
      <div className="full-div">
        <div className="header sm:justify-between h-20 flex">
          <div className="text-4xl font-bold jobworm my-auto">
            JobWorm.net
          </div>
          <div className="header-child flex my-auto">
            <div className="mr-8">{displayName()}</div>
            <div
              className="nav-btn mr-8 text-blue-600 cursor-pointer hover:opacity-75 duration-150 sm:text-md text-center"
              onClick={() => setAddJobShow(true)}
            >
              Add Job
            </div>
            <div
              className="nav-btn mr-8 text-blue-600 cursor-pointer hover:opacity-75 duration-150 sm:text-md text-center"
              onClick={() => {
                handleLogout();
              }}
            >
              Log out
            </div>

            {/* <div className="flex">
              <div className="username text-center pt-2">
                {displayName()}
              </div>
              <button
                className="text-sm text-gray-400 cursor-pointer hover:opacity-75 duration-150 text-sm sm:text-md text-center pb-2 mr-20"
                onClick={() => {
                  handleLogout();
                }}
              >
                Log out
              </button>
            </div>
            <div className="mx-auto">
              <button
                type="submit"
                className="add-job-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setAddJobShow(true)}
              >
                Add Job
              </button>
            </div> */}
          </div>

          {/* <Container>
            <Stack
              direction="horizontal"
              gap="2"
              className="mb-4 d-flex justify-content-between"
            >
              <div className="title-div">
                <div className="nested-title-div">
                  <h1 className="me-auto">myJobs.net</h1>
                </div>
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={() => setModalShow(true)}
                  className="addJobButton"
                >
                  Add Job
                </Button>
                <p>{user.uid}</p>
              </div>
            </Stack>
          </Container> */}
        </div>
        <div className="flex w-screen">
          <div className="w-1/2 mt-20 grid grid-cols-1 h-fit">
            {jobsArray.map(job => (
              <div className="mb-10 max-w-90 mx-auto">
                <JobCardTwo
                  deleteJob={deleteJob}
                  job={job.job}
                  description={job.description}
                  id={job.id}
                  comments={job.comments}
                  email={job.email}
                  userId={job.userId}
                  commentsJobsArray={commentsJobsArray}
                  setCommentsJobsArray={setCommentsJobsArray}
                  getComments={getComments}
                  getJobs={getJobs}
                  jobSalary={job.salary}
                  jobSalaryUnit={job.salaryUnit}
                  jobType={job.jobType}
                  contactEmail={job.contactEmail}
                  setContactEmail={setContactEmail}
                  companyName={job.companyName}
                  setCompanyName={setCompanyName}
                  location={job.location}
                  setJobId={setJobId}
                  jobId={jobId}
                  setDeleteConfirmShow={setDeleteConfirmShow}
                  setDeleteId={setDeleteId}
                />
              </div>
            ))}

            {console.log(jobsArray)}
            {/* <div className="job-container-container">
            <div className="job-container">
              {jobsArray.map(job => (
                <div className="job-cards">
                  <JobCard
                    job={job.job}
                    description={job.description}
                    id={job.id}
                    comments={job.comments}
                    email={job.email}
                    userId={job.userId}
                    commentsJobsArray={commentsJobsArray}
                    setCommentsJobsArray={setCommentsJobsArray}
                    getComments={getComments}
                    getJobs={getJobs}
                  />
                </div>
              ))}
            </div>
          </div> */}
          </div>
          <div className="w-1/2">
            <div className="jobShow mx-auto rounded-xl mt-20">
              <JobDisplay jobId={jobId} jobsArray={jobsArray} />
            </div>
          </div>
        </div>

        <AddJobModal
          handleSubmit={handleSubmit}
          setJobTitle={setJobTitle}
          setJobDescription={setJobDescription}
          addJobShow={addJobShow}
          setAddJobShow={setAddJobShow}
          onHide={() => setAddJobShow(false)}
          setJobSalary={setJobSalary}
          setJobType={setJobType}
          setJobSalaryUnit={setJobSalaryUnit}
          setContactEmail={setContactEmail}
          jobTitle={jobTitle}
          companyName={companyName}
          setCompanyName={setCompanyName}
          jobDescription={jobDescription}
          jobSalary={jobSalary}
          jobType={jobType}
          contactEmail={contactEmail}
          jobNameFail={jobNameFail}
          jobDescriptionFail={jobDescriptionFail}
          jobSalaryFail={jobSalaryFail}
          contactEmailFail={contactEmailFail}
          setCompanyNameFail={setCompanyNameFail}
          setLocation={setLocation}
          locationFail={locationFail}
          setLocationFail={setLocationFail}
        />
        <DeleteConfirm
          deleteConfirmShow={deleteConfirmShow}
          setDeleteConfirmShow={setDeleteConfirmShow}
          deleteJob={deleteJob}
          deleteId={deleteId}
        />
      </div>
    </>
  );
}

export default HomePage;
