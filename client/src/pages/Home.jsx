import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Contact from '../components/Contact';
import Places from '../components/Places';
import Cuisines from '../components/Cuisines';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);


  const slides = [
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033269/522_t8o7q5.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033269/Downloader.la_-65dc63acde3de_poeipx.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033267/24_02_2023-opium_poppy_crops_mandsaur_2023225_153651_okp1ss.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033264/Downloader.la_-65dc62089b055_pb0cjs.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033447/hat-stock958428_fdvqit.png'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033440/HDStockImages.com-IibABX_kstnob.png'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033421/HDStockImages.com-egT6ht_lrvdye.png'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033412/Rani_Roopmati_mahal___Mandu_Madhya_Pradesh_w44fzk.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033405/HDStockImages.com-RO342E_vnstjl.png'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033392/HDStockImages.com-2GQvq3_pnlmgl.png'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033342/Downloader.la_-65dc5cd80ec35_e9ein7.jpg'
    },
    {
      url: 'https://res.cloudinary.com/dwrbxnw11/image/upload/v1709033286/Downloader.la_-65dc624f85e2a_d63yjn.jpg'
    },
  ];

  const desc = [
    "Sheep Herder in Traditional Attire.",
    "Khajuraho Dance Festival, 26/02/2018.",
    "Farmer in an Opium Field in Malwa, Mandsaur.",
    "Malwa Utsav, 07/05/2015.",
    "Malwa's Typical Snack - Bhutta Ri Kees.",
    "Rang Panchami Celebration at Rajwada Indore, 06/03/2018.",
    "Jahaz Mahal, Mandu.",
    "Rani Roopmati Pavilion, Mandu.",
    "A Lady Praying at the Ghats of Maheshwar.",
    "Ahilya Fort, Maheshwar.",
    "Holkar Palace (Rajwada), Indore.",
    "Malwa Utsav, 07/05/2015."
  ];
  

  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentDesc, setCurrentDesc] = useState(desc[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIdx + 1) % slides.length;
      setCurrentIdx(newIndex);
      setCurrentDesc(desc[newIndex]);
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentIdx, desc, slides.length]);

  const prevSlide = () => {
    const newIndex = (currentIdx - 1 + slides.length) % slides.length;
    setCurrentIdx(newIndex);
    setCurrentDesc(desc[newIndex]);
  };

  const nextSlide = () => {
    const newIndex = (currentIdx + 1) % slides.length;
    setCurrentIdx(newIndex);
    setCurrentDesc(desc[newIndex]);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIdx(slideIndex);
    setCurrentDesc(desc[slideIndex]);
  };

  return (
    <div>
      <div className='flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto h-[160px] '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to <span className='text-[#0694A2]'>Malwa</span></h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Step into the lively world of Malwa, where Gujarati, Rajasthani, and Marathi influences blend seamlessly. From the enchanting beats of Lavani (folk music) to the mouthwatering aromas of traditional cuisine, immerse yourself in a colorful journey of flavor and rhythm.
        </p>
      </div>
    
    {/* curosal */}
      <div className="  max-w-[900px] h-[500px] w-full relative m-auto py-16 px-4 group">
      <div style={{ backgroundImage: `url(${slides[currentIdx].url})` }} className="shadow w-full h-full rounded-2xl bg-center bg-cover duration-500">
      </div>
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}><BsChevronCompactLeft size={30} /></div>
      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}><BsChevronCompactRight size={30} /></div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, index) => (
          <div key={index} onClick={() => goToSlide(index)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
      <div className="flex justify-center -my-3 font-bold">{currentDesc}</div>
    </div>
    
       {/* About Malwa Region */}
       <div className='flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto text-justify'>

          <p> Step into the heart of India and discover Malwa, a region where cultures intertwine to create a weaving of traditions, flavors, and celebrations. Nestled between Gujarat, Rajasthan, and Maharashtra, Malwa's cultural identity is shaped by a rich history of interactions with neighboring regions. Influenced by its proximity to Gujarat, Rajasthan, and Maharashtra, Malwa's culture is a vibrant fusion of Gujarati, Rajasthani, and Marathi influences. The language of Malwa, Malvi, serves as a bridge between communities, while Hindi resonates in the urban centers, adding to the region's linguistic diversity.</p>

          <p> Music Indulge your senses in Malwa's culinary delights, where traditional dishes like baati, bafla, and mawa-bati showcase the region's culinary diversity. From the savory aroma of freshly roasted corn to the sweet indulgence of mawa-based desserts, every bite tells a story of tradition and innovation. Music and dance are integral to Malwa's cultural fabric, with soulful melodies of Lavani and lively rhythms of Swang filling the air during festive occasions. Artistic traditions like Mandana paintings adorn the walls, adding color and vibrancy to everyday life.</p>

          <p>Experience the spirit of Malwa through its vibrant festivals, where communities come together to celebrate unity and diversity. From the magnificence of the Simhastha mela to the joyous fervor of Gana-gour, each event is a proof to Malwa's rich cultural heritage. Malwa is more than just a region—it's a community of diverse traditions and customs, where every aspect of life is steeped in history and reverence. Join us on a cultural journey through the enchanting land of Malwa and discover the stories that shape its identity.</p>
    </div>

    <div className='max-w-6xl mx-auto mb-12'>
      <h2 className=' px-3 text-2xl font-bold text-teal-500 '>Explore the Rich Heritage of Malwa</h2>
      <Places/>
    </div>


    <div className='max-w-6xl mx-auto mb-12'>
    <h2 className=' px-3 text-2xl font-bold text-teal-500 '>Discover Malwa's Cuisine</h2>
      <Cuisines/>
    </div>


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 mb-12'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center text-teal-500'>Recent Community Blogs</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
     <p className=' max-w-6xl mx-auto p-3'>As of now, we are not allowing everyone to contribute a blog. If you want to contribute, you can contact us below.</p>
      <Contact></Contact>
    </div>
  );
}
