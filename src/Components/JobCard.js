import { useState, useEffect } from 'react';
import { UserAuth } from '../AuthContext';
import { currencyFormatter } from './utils';
import './JobCard.css';

const apiUrl = 'https://job-app-backend-sunny.herokuapp.com';

// const apiUrl = 'https://git.heroku.com/job-app-backend-sunny.git';

export default function JobCardTwo({
  job,
  description,
  id,
  comments,
  getComments,
  setCommentsJobsArray,
  commentsArray,
  getJobs,
  email,
  userId,
  jobSalary,
  jobSalaryUnit,
  contactEmail,
}) {
  const { user } = UserAuth();

  const [comment, setComment] = useState('');

  const [visibility, setVisibility] = useState('none');

  const [view, setView] = useState('View');

  const myHeaders = new Headers();

  const myRequest = new Request(`${apiUrl}/jobs`, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  });

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

  function handleCommentSubmit(e) {
    e.preventDefault();
    console.log('in comment submit function');
    postData(`${apiUrl}/comments`, {
      comment: comment,
      id: id,
      email: user.email,
      userId: user.uid,
      username: user.displayName,
    }).then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
      setComment('');
      getComments();
    });
  }

  function deleteComment(commentId) {
    postData(`${apiUrl}/deletecomment`, { id: commentId }).then(data => {
      console.log(data);
      console.log('calling getComments');
      getComments(); // JSON data parsed by `data.json()` call
    });
  }

  function deleteJob(jobId) {
    postData(`${apiUrl}/deletejob`, { id: jobId }).then(data => {
      console.log(data);
      getJobs();
    });
  }

  function commentVisiblity() {
    console.log('comment visiblity triggered');
    if (visibility === 'none') {
      setVisibility('block');
      setView('Hide');
    } else if (visibility === 'block') {
      setVisibility('none');
      setView('View');
    }
    console.log(visibility);
  }

  return (
    <>
      <div className="max-w-sm p-3 rounded-xl jobcard">
        <div>
          <div className="flex flex-row justify-between">
            <h5 className="job-title text-xl max-w-xs font-semibold tracking-tight text-gray-900 dark:text-white">
              {job}{' '}
            </h5>
            {/* <div>
              <button
                style={{
                  display: user.uid === userId ? 'block' : 'none',
                }}
                className="rounded-lg bg-red-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                key={id}
                onClick={() => {
                  if (user.uid === userId) {
                    deleteJob(id);
                  }
                }}
              >
                Remove
              </button>
            </div> */}
          </div>
          <div>GUCCI Australia</div>
          <div>Sydney</div>
          <div className="text-sm bg-gray-100 px-2 rounded-md w-fit">
            <div></div>
            <div>$25 an hour</div>
          </div>

          <h6 className="job-desc mt-4">{description}</h6>
          <div className="mt-3">Contact email: {contactEmail}</div>
          {/* <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              {currencyFormatter.format(jobSalary)}
              {jobSalaryUnit}
            </span>
            <a
              onClick={commentVisiblity}
              href="javascript:void(0)"
              className="rounded-lg bg-blue-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {view} Comments
            </a>
          </div>
          <div className="mt-3" style={{ display: visibility }}>
            {comments.map((comment, index) => (
              <div
                style={{
                  backgroundColor:
                    index % 2 === 0 ? '#e7e7e7' : 'whitesmoke',
                }}
                className="p-2 rounded-md"
              >
                {comment.username} : {comment.comment}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center mt-3">
            <input
              className="text-md placeholder:text-gray-400 placeholder:italic py-3 px-10 bg-gray-800 bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-0 outline-none border-none"
              placeholder="Your comment ..."
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <button
              className="post-btn bg-blue-600 text-white rounded-full md:rounded-tl-none md:rounded-bl-none text-md py-3 px-6 cursor-pointer hover:opacity-75 duration-150 outline-none"
              onClick={handleCommentSubmit}
            >
              Post
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
