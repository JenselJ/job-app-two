import './tailwind.css'
import { ReactComponent as ReactLogo } from './wormLogo.svg'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const navigate = useNavigate()

  return (
    <div>

      <div className='tw-text-white bgImage'>
        <div className='tw-bg-gradient-to-r tw-from-black'>
          <div className="tw-px-6 tw-py-12 tw-max-w-xl tw-grid tw-grid-cols-1 tw-gap-8">
            <div className='tw-w-12'>
              <ReactLogo className='tw-fill-white' />
            </div>
            <div className='tw-px-4 tw-py-6 tw-grid tw-grid-cols-1 tw-gap-8'>
              <h2 className="tw-text-xl tw-uppercase tw-font-bold">Become a member</h2>
              <h1 className="tw-text-6xl tw-font-bold">Find your work, share your joy</h1>
              <p className="tw-text-lg">
                The art of hosting is rooted in thoughtful design.
                Share your unique aesthetic with guests and earn extra
                income on a schedule that works for you.
              </p>
              <div>
                <button
                  className='tw-border-none tw-text-white tw-bg-gradient-to-r tw-from-pink-600 tw-to-orange-600 tw-py-2 tw-px-6 tw-text-lg tw-rounded-md tw-w-48 tw-cursor-pointer hover:tw-opacity-75 tw-duration-150'
                  onClick={() => { navigate('/signup') }}
                >Sign Up Now</button>
                <p className='tw-opacity-75 tw-italic tw-pl-1 tw-pt-1'> Already a member? <a onClick={() => { navigate('/login') }} className="tw-cursor-pointer hover:tw-opacity-75 tw-duration-150 tw-underline">Login</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='tw-px-8 tw-py-16'>
        <div className='tw-max-w-md tw-mb-16'>
          <h2 className='tw-text-5xl'>Your next chapter, made possible by JobWorm</h2>
        </div>

        <div className='tw-grid tw-grid-cols-2 tw-gap-4 tw-text-slate-600'>
          <div>
            <h3 className='tw-text-2xl tw-font-bold tw-mb-2'>Find what you love</h3>
            <p className='tw-text-lg'>
              Indulge your love for design when you host Airbnb guests, who are drawn to authentic travel in creatively curated spaces.
            </p>
          </div>

          <div>
            <h3 className='tw-text-2xl tw-font-bold tw-mb-2'>
              Make a difference
            </h3>
            <p className='tw-text-lg'>
              You have 80000 hours in your career. How can you best use them to help solve what you find most important? </p>
          </div>

        </div>


      </div>


    </div>
  )
}
