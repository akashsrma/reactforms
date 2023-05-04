import Logo from '../../assets/images/dheena.png'
import product1 from '../../assets/images/elon.png'
import product2 from '../../assets/images/mass.png'


const About = ()=>{
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
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
                Elon Musk is a  dolor sit amet, consectetur adipiscing elit. Sed
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
                  Jack Smith is to dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;