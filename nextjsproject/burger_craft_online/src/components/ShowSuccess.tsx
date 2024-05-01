import React from 'react';
export const  ShowSuccess:React.FC=()=>{
 return(
      <>
       <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
        <div className="bg-white p-8 rounded shadow-lg">
         <h2 className="text-2xl font-semibold mb-4">Success!</h2>
         <p>Your purchase is being processed.</p>
        </div>
       </div>

      </>
 )
}

