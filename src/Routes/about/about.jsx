import Logo from "../../assets/images/dheena.png";
import product1 from "../../assets/images/elon.png";
import product2 from "../../assets/images/mass.png";
import product3 from "../../assets/images/Bscholarly.png";
import product4 from "../../assets/images/apdul.png";
import product5 from "../../assets/images/alexander.png";
// import look from "../../assets/images/about.png";
import Footer from "../Footer/footer";
import man from "../../assets/images/man.jpg"
import number from "../../assets/images/number.jpg"

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About US
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Dogecoin (DOGE) was created as a lighthearted alternative to
            traditional cryptocurrencies like Bitcoin in 2013.
          </p>
        </div>
        <div className="mt-20 flex justify-around items-center flex-wrap">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <img
              className="w-full h-56 object-cover"
              src={Logo}
              alt="Team member"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">John Doe</div>
              <p className="text-gray-700 text-base">
                John Doe was a dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <img
              className="w-full h-56 object-cover"
              src={product1}
              alt="Team member"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Elon Musk</div>
              <p className="text-gray-700 text-base">
                Elon Musk is a dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <img
              className="w-full h-56 object-cover"
              src={product2}
              alt="Team member"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Jack Smith</div>
              <p className="text-gray-700 text-base">
                Jack Smith is todolor sit amet, consectetur adipiscing elit. Sed
                to do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <img
              className="w-full h-56 object-cover"
              src={product3}
              alt="Team member"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Bscholarly</div>
              <p className="text-gray-700 text-base">
                Jack Smith is todolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <img
              className="w-full h-56 object-cover"
              src={product4}
              alt="Team member"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">A.P.J. Apdul Kalam</div>
              <p className="text-gray-700 text-base">
                Jack Smith is todolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <img
              className="w-full h-56 object-cover"
              src={product5}
              alt="Team member"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Alexendar</div>
              <p className="text-gray-700 text-base">
                Jack Smith is todolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div>
        <p className="text-black text-7xl mx-[12rem] my-[3rem] shadow-xl">Passion Fules Purpose</p>
        </div>
       <div className="flex flex-row">

        <div className="w-[30rem]">
          <p className="font-extrabold hover:cursor-pointer hover:text-blue-400">
          BIOGRAPHY
          </p>
          <p>
          Before we can answer this question we need to define passion. Passion, as this executive exemplifies, is energy and engagement for people and the work they do. Passion as an emotion is a valuable trait when channeled appropriately. Focused on helping others understand and doing good work is positive passion. Losing your cool when things go wrong is negative passion. The challenge is to channel the positive to ameliorate or eliminate the negative.
          </p>
          <p>Passion becomes the catalyst that galvanizes individuals to commit to their own development as well as to deliver products and services that customers need. Passion too develops when employees commit – on company time – to give back to their community as volunteers.</p>
           <p>
           Passion is a powerful driver when applied to purpose. It becomes the personal commitment to making a positive difference to achieve sustainable results.
           </p>
        
        </div>
        <div>
          <img src={man} alt="man" className="my-[5rem] mx-[5rem]  cursor-pointer hover:shadow-2xl h-[15rem] w-[18rem]" />
        </div>
        <div>
          <img src={number} alt="number" className="mx-3 w-[20rem] h-[25rem]"  />
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;

// const About =()=>{
//   return(
//     <>

//        <img src={look} alt="look"  className="my-3"/>

//         {/* <p className="text-black text-8xl mx-[12rem] my-[3rem] shadow-xl">Passion Fules Purpose</p>
//       </div>
//       <div className="">
//         <div>
//           <p>BIOGRAPHY</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id officia ullam vitae vero unde placeat consequuntur doloremque doloribus nemo delectus, a, quam molestias libero beatae voluptatibus neque eaque voluptate, at excepturi maxime! Quibusdam eligendi non rem expedita, mollitia alias iusto ducimus eos repudiandae, nostrum illo eveniet voluptates facere asperiores?</p>
//         </div>
//         <div>
//           <img src={look} alt="look" />
//         </div>
//         <div>

//         </div> */}

//     </>
//   )
// }

// export default About;
