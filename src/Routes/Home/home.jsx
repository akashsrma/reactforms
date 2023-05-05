// import Teach from "../../assets/images/teach.webp"



// const Home = () => {
//   return (
//           <>
//           <img src={Teach} alt="teah" className="bg-cover bg-center w-[100%] h-[40rem]"/>
          
          
//           </>
//   )
// }

// export default Home;

import React from 'react';
import image from '../../assets/images/doge.jpg';
import elon from "../../assets/images/step.webp"
import don from "../../assets/images/DOGECOIN-1.webp"
import phone from "../../assets/images/phone.png"
// import Teach from "../../assets/images/gun.jpg"

function Homepage() {
  return (
    <>          
    
     {/* <img src={Teach} alt="teah" className="bg-cover bg-center w-[100%] h-[40rem]"/> */}

    <div className='flex mx-9 ' >
      <div className="bg-white shadow-2xl rounded-lg p-10 mx-3 my-4 ">
        <img className="w-64 h-64 rounded-full mx-auto mb-5" src={image} alt="Homepage" />
        <img className="w-64 h-64 rounded-full mx-auto mb-5" src={image} alt="Homepage" />
        <img className="w-64 h-64 rounded-full mx-auto mb-5" src={image} alt="Homepage" />
       <p className='text-blue-600 text-xl font-extrabold mx-24'> Crypto</p>
      </div>
      <div className='my-[1rem] mx-7 w-[50rem]'>
        <div className='flex'>
            <img src={elon} className='w-[75%] rounded-lg my-3' alt='elon'/>
            <img src={phone} alt='phone' className='w-[50%] mx-9 hover: cursor-pointer'/>
            </div>

        <img src={don} className='w-[100%] my-3  rounded-lg' alt='don' />
        </div>



    </div>
    </>

  );
}

export default Homepage;


