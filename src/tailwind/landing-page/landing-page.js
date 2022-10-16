import './tailwind.css';
import { ReactComponent as ReactLogo } from './wormLogo.svg';
import { useNavigate } from 'react-router-dom';

export default function LandingPage({
  setSignupShow,
  setLoginShow,
  setEmail,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-white bgImage">
        <div className="bg-gradient-to-r from-black">
          <div className="px-6 py-12 max-w-xl grid grid-cols-1 gap-8">
            <div className="w-12">
              <ReactLogo className="fill-white" />
            </div>
            <div className="px-4 py-6 grid grid-cols-1 gap-8">
              <h2 className="text-xl uppercase font-bold">
                Become a member
              </h2>
              <h1 className="text-6xl font-bold">
                Find your work, share your joy
              </h1>
              <p className="text-lg">
                The art of hosting is rooted in thoughtful design. Share
                your unique aesthetic with guests and earn extra income on
                a schedule that works for you.
              </p>
              <div>
                <button
                  className="border-none text-white bg-gradient-to-r from-pink-600 to-orange-600 py-2 px-6 text-lg rounded-md w-48 cursor-pointer hover:opacity-75 duration-150"
                  onClick={() => {
                    setSignupShow(true);
                  }}
                >
                  Sign Up Now
                </button>
                <p className="opacity-75 italic pl-1 pt-1">
                  {' '}
                  Already a member?{' '}
                  <a
                    onClick={() => {
                      setLoginShow(true);
                    }}
                    className="cursor-pointer hover:opacity-75 duration-150 underline"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className="text-5xl">
            Your next chapter, made possible by JobWorm
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2">Find what you love</h3>
            <p className="text-lg">
              Indulge your love for design when you host Airbnb guests, who
              are drawn to authentic travel in creatively curated spaces.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Make a difference</h3>
            <p className="text-lg">
              You have 80000 hours in your career. How can you best use
              them to help solve what you find most important?{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
