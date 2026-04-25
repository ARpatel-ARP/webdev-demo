import Image from "next/image";

export default function Home() {
  return (
  <>
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-4xl flex mt-5 font-bold mb-4">Welcome to Patreon-cl. <span className="ml-2 "><svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#8C1AF6"><path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" /></svg></span></h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        A crowd-funding platform for projects and ideas. Fund your dreams and
        bring your projects to life with the support of our community.
      </p>
      <div className="flex gap-13">

        <button type="button" className="w-30 cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl">
          Start Here</button>

        <button type="button" className="w-30 cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl">
          Read more...</button>

      </div>
      <div className="line bg-white h-0.5 opacity-15 mt-7 w-full"></div>

          <h1 className="mt-2 font-bold text-xl">Your Fans can buy you a chai</h1>
      <div className="text-white container mt-6 flex justify-between ">
        <div className="flex flex-col items-center">
          <div className="item bg-slate-900 rounded-full p-5 w-fit cursor-pointer shadow-[0_0_5px_#c026ff,0_0_25px_#a855f7] text-black">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="39px" viewBox="0 -960 960 960" width="39px" fill="#75FBFD"><path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" /></svg></span>
          </div>
          <h1></h1>
          <p></p>
        </div>

        <div className="flex flex-col items-center">
          <div className="item bg-slate-800 rounded-full p-5 w-fit cursor-pointer shadow-[0_0_5px_#c026ff,0_0_25px_#a855f7] text-black">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="39px" viewBox="0 -960 960 960" width="39px" fill="#75FBFD"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <div className="item bg-slate-900 rounded-full p-5 w-fit cursor-pointer shadow-[0_0_5px_#c026ff,0_0_25px_#a855f7] shadow-[0_0_5px_#c026ff,0_0_25px_#a855f7] text-black">
            <span><svg xmlns="http://www.w3.org/2000/svg" height="39px" viewBox="0 -960 960 960" width="39px" fill="#75FBFD"><path d="m160-419 101-101-101-101L59-520l101 101Zm540-21 100-160 100 160H700Zm-220-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-160q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640Zm0 40ZM0-240v-63q0-44 44.5-70.5T160-400q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm560-160q72 0 116 26.5t44 70.5v63H780v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5Zm-320 30q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-370Zm0 50Z"/></svg></span>          </div>
        </div>

      </div> 
    <div className="line bg-white h-0.5 opacity-15 mt-7 w-full"></div>
    <h1 className="mt-2 font-bold text-xl text-white text-center" >Learn more about us...</h1>
    <div className="w-fit cursor-pointer m-15 shadow-[0_0_5px_#c026ff,0_0_25px_#a855f7] items-center justify-center">
      <iframe  width="420" height="250" src="https://www.youtube.com/embed/wP6nHR7cI58?si=RJBSQHJL4u-SFPLV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
    </div>

</>

  )
}
