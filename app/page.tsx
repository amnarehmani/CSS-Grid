import React from "react";


export default function Home() {
  return (
 <div>
     <div className="grid grid-cols-4 3xl:grid-cols-6 grid-rows-[100px_200px_200px_200px_100px] sm:grid-rows-[100px_200px_200px_100px] lg:grid-rows-[100px_200px_200px_200px_100px]
        3xl:grid-rows-[100px_200px_200px_100px]
        gap-4 m-4">
       <div className="bg-pink-600 col-span-4 text-center content-center text-4xl font-bold text-white 3xl:col-span-6">
            Header
         </div>
          <div className="bg-green-700 row-span-2 text-center content-center text-4xl font-bold text-white max-sm:hidden sm:hidden lg:block lg:col-span-2 3xl:col-span-2">
          Sidebar
        </div>
      <div className="bg-purple-400 col-span-2 max-sm:col-span-4 text-center content-center text-4xl font-bold text-white sm:col-span-4 lg:col-span-2 3xl:col-span-4">
        Container-1
      </div>
       <div className="bg-blue-700 text-center content-center text-4xl font-bold text-white max-sm:col-span-4 sm:col-span-2 3xl:col-span-2 ">
        Container-2
       </div>
       <div className="bg-purple-900 text-center content-center text-4xl font-bold text-white max-sm:col-span-4 sm:col-span-2 lg:col-span-4 3xl:col-span-2">
        Container-3
      </div>
      <div className="bg-pink-400 col-span-4 text-center content-center text-4xl font-bold text-white 3xl:col-span-6">
       Footer
      </div>
     </div>
 </div>
  
  );
}
