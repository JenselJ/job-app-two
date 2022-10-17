import { useState, useEffect } from 'react';
import { UserAuth } from '../AuthContext';

// const apiUrl = 'https://job-app-backend-sunny.herokuapp.com'

const apiUrl = 'http://localhost:4200';

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
      <div className="max-w-sm p-3">
        <div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {job}{' '}
            </h5>
            <h6 className="mt-2 ml-2">{description}</h6>
          </a>
          {/* <div className="mt-2.5 mb-5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              5.0
            </span>
          </div> */}
          <div className="flex items-center justify-between mt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              onClick={commentVisiblity}
              href="#"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                {comment.email} : {comment.comment}
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
              className="bg-blue-600 text-white rounded-full md:rounded-tl-none md:rounded-bl-none text-md py-3 px-6 cursor-pointer hover:opacity-75 duration-150 outline-none"
              onClick={handleCommentSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
