// import Akash from "../../assets/images/Akash.jpg"
// import Dheena from "../../assets/images/Dheena.jpg"

import { motion } from "framer-motion";
 
const Team =()=>{
    return(
      <>
  <div className="flex flex-row mx-[13rem] my-[7rem] gap-[3rem] ">
 
      <motion.div 
          whileHover={{
            scale:1.1,
            
          }}
          transition={{
            duration:1
          }}
          className="w-96 h-96 bg-center opacity-100 bg-cover rounded-r-lg rounded-b-lg"  style={{
            backgroundImage:`url("https://th.bing.com/th/id/OIP.YtDlFUwsas8immSsLrncqgHaH0?w=208&h=219&c=7&r=0&o=5&pid=1.7")`
          }}>
            <button className="bg-white opacity-0 hover:opacity-90  text-black p-1 rounded-full mx-[9rem] my-[18rem] h">AkashSrma</button>
          </motion.div>

       

          
          <motion.div 
          whileHover={{
            scale:1.1,
            
          }}
          transition={{
            duration:1
          }}
          className="w-96 h-96 bg-center opacity-100  bg-cover rounded-r-lg rounded-b-lg"  style={{
            backgroundImage:`url("https://i2.wp.com/elrincon.tv/wp-content/uploads/2014/04/Faruq-Personajes-de-El-Pr%C3%ADncipe.jpg?fit=789%2C457&ssl=1")`
          }}>
            <button className="bg-white text-black  opacity-0 hover:opacity-90 p-1 rounded-full mx-[9rem] my-[18rem]">DheenaMass</button>

          </motion.div>

      
     </div>     

     <div className="border-cyan-400 my-[-3rem] ">
       <p className="text-2xl font-extrabold text-blue-500 mx-[30rem] hover:text-gray-600">Front-End Developer</p>
     </div>
     </>
    )
}

export default Team;