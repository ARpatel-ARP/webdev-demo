import React from 'react'

export default async function Username({ params }) {
  const { username } = await params
  return (
    <>
      <div>

        <div className="text-white cover h-[60vh] w-full img">
          <img className='w-full h-full object-cover opacity-65 border-black rounded-3xl' src="https://i.pinimg.com/736x/e0/c5/cf/e0c5cf4983c7ec415cb1d020e343a194.jpg" alt="" />


          <div className=" absolute top-20  bg-neutral-primary-soft block max-w-sm p-6 border border-transparent rounded-base shadow-xs">
            <a href="#">
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Streamlining your design process today.</h5>
            </a>
            <p className="mb-6 text-body">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
            <a href="https://www.linkedin.com/in/ankit-raut-4a6900312 " className=" text-amber-200 inline-flex items-center text-body hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-1">
              Read more
              <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
            </a>
          </div>

          <div className="dp absolute top-85 right-[40%] rounded-full border-transparent text-center items-center">
            <img className=' w-30 object-cover h-30 ml-12 rounded-full border-[#dfdf0b] shadow-[0_0_7px_#dfdf0b,0_0_15px_#d1a20a]  ' src="https://i.pinimg.com/736x/74/5d/de/745dde23b8766cadd656a85cf449a98a.jpg" alt="" />
            <p className='text-center mt-2 text-amber-200 text-xl'>{username}</p>
            <p className='font-thin text-sm '> Converting creative ideas into websites </p>
            <p className='font-thin text-sm '> 230k-Followers | 35-Posts  </p>


          </div>
        </div>
        <div className="payment flex  gap-3 text-white mx-4 p-9 my-30 mt-50">
          <div className="supporters bg-gradient-to-br from-purple-900 via-gray-950 to-black w-1/2 p-4 bg-gray-950">
            <h1 className=' absolute -bottom-9 text-slate-400  font-bold text-3xl right-[34%]'>Leaderboard & Payments</h1>
            <ul>
              <li className='my-2'> shubham donated $20 with a message </li>
              <li className='my-2'> shubham donated $20 with a message </li>
              <li className='my-2'> shubham donated $20 with a message </li>
              <li className='my-2'> shubham donated $20 with a message </li>
            </ul>
          </div>


          <div className="makePayment w-1/2 bg-gradient-to-br from-black via-gray-950 to-purple-900">
            <div className="min-h-screen  flex items-center justify-center">

              <div className="bg-neutral-primary-soft w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-4">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center">Make Your Payment</h2>

                {/* Card Number */}
                <div>
                  <label className="text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full mt-1 text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-sm font-medium"> Write your message</label>
                  <input
                    type="text"
                    placeholder="message goes here"
                    className="w-full mt-1 border text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Select an amount</label>
                  <input
                    type="text"
                    placeholder="in $"
                    className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                <p className='font-thin text-sm'>or choose from...</p>
                <div className="buttons flex gap-3">

                  <button type="button" class="text-fg-brand bg-gray-950 rounded-2xl border-gray-600 hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle font-medium leading-5 rounded-base text-xs px-2 py-1 focus:outline-none">Pay $10</button>
                  <button type="button" class="text-fg-brand bg-gray-950 rounded-2xl border-gray-600 hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle font-medium leading-5 rounded-base text-sm px-4 py-1 focus:outline-none">Pay $20</button>
                  <button type="button" class="text-fg-brand bg-gray-950 rounded-2xl border-gray-600 hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle font-medium rounded-base text-base px-3 py-2 focus:outline-none">Pay $30</button>
                </div>

                {/* Pay Button */}
                <button className="w-full bg-gray-950 hover:bg-gray-900 text-white py-3 border-[#4e026c] shadow-[0_0_7px_#c026ff,0_0_10px_#a855f7] rounded-lg font-semibold transition">
                  Pay
                </button>

                {/* Footer */}
                <p className="text-xs text-gray-400 text-center">
                  🔒 Secure payment
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

