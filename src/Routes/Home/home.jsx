

const Home = ()=>{
        const Data = [{
            id:1,
            images:"https://images.pexels.com/photos/1122411/pexels-photo-1122411.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:2,
            images:"https://images.pexels.com/photos/1910521/pexels-photo-1910521.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:3,
            images:"https://images.pexels.com/photos/2850286/pexels-photo-2850286.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];
    return (
      <div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover text-white text-8xl flex items-center justify-center "
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/154243/pexels-photo-154243.jpeg?auto=compress&cs=tinysrgb&w=600)`,
          }}
        >
          Photographer
        </div>
        <div>
          <img src={Data.images} alt="images" />
        </div>
      </div>
    );


};

export default Home;