import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import companylogo from '../src/assessts/companylogo.png';

import Carousel from 'react-bootstrap/Carousel';
import education1 from './assessts/education1.jpg';
import education2 from './assessts/education2.jpg';
import education3 from './assessts/education3.jpg';
import education4 from './assessts/education4.jpg';
import education5 from './assessts/education5.jpg';
import education6 from './assessts/education6.jpg';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { GoHorizontalRule } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import companylogo1 from '../src/assessts/companylogo1.png';

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdBorderColor } from 'react-icons/md';






function App() {


  const slides = [
    {
      url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkhwnitfLE29WLBOFJk2ilOAcDwZ2pbE_gXyqR5dsUB5kqFZc4",
    },
    {
      url:"https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717632000&semt=sph",
    },
    {
      url: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/education.jpg",
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="App">
            {/* Header */}
            <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={companylogo} alt="Credenza Logo" className="h-10" />
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-violet-950 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-violet-950 hover:text-blue-600">Home</a>
          <a href="#" className="text-violet-950 hover:text-blue-600">About us</a>
          <a href="#" className="text-violet-950 hover:text-blue-600">Learning Science</a>
          <a href="#" className="text-violet-950 hover:text-blue-600">Learning Vedic Math</a>
          <a href="#" className="text-violet-950 hover:text-blue-600">Learning Bespoke</a>
        </nav>
        <a href="#" className="hidden md:block bg-violet-950 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Us</a>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <a href="#" className="block text-violet-950 hover:text-blue-600">Home</a>
            <a href="#" className="block text-violet-950 hover:text-blue-600">About us</a>
            <a href="#" className="block text-violet-950 hover:text-blue-600">Learning Science</a>
            <a href="#" className="block text-violet-950 hover:text-blue-600">Learning Vedic Math</a>
            <a href="#" className="block text-violet-950 hover:text-blue-600">Learning Bespoke</a>
            <a href="#" className="block bg-violet-950 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Us</a>
          </nav>
        </div>
      )}
      <div className="breakline">
        <hr className="break" />
      </div>
    </header>
            <div className='breakline'>
                <hr className='break' />
                </div>
            {/* Hero Section */}
            <section className="hero text-center text-white py-20">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-violet-950">The future of learning with <span className="text-blue-400">Credenza!</span></h1>
                    <p className="mt-4 text-lg text-black">Our visual approach fosters critical thinking, creativity, <br/> and a true passion for learning.</p>
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center">
                        <input type="email" placeholder="Enter your email" className="px-8 py-2  border-0 text1" />
                        <button className="bg-violet-950 text-white px-6 py-2 mt-4 md:mt-0 hover:bg-blue-700 button1">Let's Talk</button>
                    </div>
                    <p className="mt-4 text-lg text-gray-400">We care about your data in our <span className='text'>Privacy Policy</span></p>




                    <div className='card1'>
                    <div className=' py-6 px-4 relative group' style={{height:"400px", width:"900px"}}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <GoHorizontalRule />
          </div>
        ))}
      </div>
    </div>
                    
    </div>
    <p className="mt-4 text-lg text-black">Our visual approach fosters critical thinking, creativity, <br/> and a true passion for learning.</p>

                    
                    
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats py-8 text-center">
                <div className="container mx-auto flex flex-col md:flex-row justify-around">
                    <div>
                        <h2 className="text-4xl font-bold text-violet-950">6<span className='text-4xl  text-blue-600'>+</span></h2>
                        <p className='text-blue-600'>Years of Experience</p>
                    </div>
                    <div className='vertical'></div>
                    <div>
                        <h2 className="text-4xl font-bold text-violet-950">1000<span className='text-4xl  text-blue-600'>+</span></h2>
                        <p className='text-blue-600'>Assets and Environment</p>
                    </div>
                    <div className='vertical'></div>
                    <div>
                        <h2 className="text-4xl font-bold text-violet-950">10K<span className='text-4xl  text-blue-600'>+</span></h2>
                        <p className='text-blue-600'>Minutes of Content</p>
                    </div>
                    <div className='vertical'></div>
                    <div>
                        <h2 className="text-4xl font-bold text-violet-950">2000<span className='text-4xl text-blue-600'>+</span></h2>
                        <p className='text-blue-600'>High Definition Video</p>
                    </div>
                </div>
            </section>
            
            

            {/* Learning Sections */}
            <section className="section-title py-12">
                <div className="container mx-auto px-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div className="max-w-5xl mx-auto py-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 relative">
                            <img src={education4} alt="A vibrant, multicolored butterfly perched on a piece of wood, showcasing its detailed wings" className="w-96 h-96 md:w-full md:h-full object-cover"/>
                        </div>
                        <div className=" md:w-1/2 bg-violet-950 text-white p-8">
                            <h2 className="text-3xl font-bold mb-4">Learning Science</h2>
                            <p className="mb-6">
                                Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly.
                            </p>
                            <a href="#" className="flex items-center text-white hover:text-blue-300 px-2">
                                Read more <IoIosArrowDroprightCircle style={{marginLeft:"10px"}} size={20}/>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="max-w-5xl mx-auto py-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                        
                        <div className="md:w-1/2 bg-violet-950 text-white p-8">
                            <h2 className="text-3xl font-bold mb-4">Learning Science</h2>
                            <p className="mb-6">
                                Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly.
                            </p>
                            <a href="#" className="flex items-center text-white hover:text-blue-300">
                                Read more <IoIosArrowDroprightCircle style={{marginLeft:"10px"}} size={20}/>
                            </a>
                        </div>

                        <div className="md:w-1/2 relative">
                            <img src={education5} alt="A vibrant, multicolored butterfly perched on a piece of wood, showcasing its detailed wings" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>



                <div className="max-w-5xl mx-auto py-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 relative">
                            <img src={education6} alt="A vibrant, multicolored butterfly perched on a piece of wood, showcasing its detailed wings" className="w-full h-full object-cover"/>
                        </div>
                        <div className="md:w-1/2 bg-violet-950 text-white p-8">
                            <h2 className="text-3xl font-bold mb-4">Learning Science</h2>
                            <p className="mb-6">
                                Our approach involves delving into every science concept, meticulously crafting audio visual presentations that bring the subject matter to life. We are dedicated to transforming complex ideas into engaging visual experiences, ensuring that learners grasp the essence of each concept effortlessly.
                            </p>
                            <a href="#" className="flex items-center text-white hover:text-blue-300">
                                Read more <IoIosArrowDroprightCircle style={{marginLeft:"10px"}} size={20}/>
                            </a>
                        </div>
                    </div>
                </div>
                        
                        
                        
                        
                    </div>
                </div>
            </section>

            {/* Catalogue Section */}
            <section className="py-12 text-center">
                <div className="container mx-auto px-4">
                <div className="relative w-full flex items-center justify-center bg-white py-8">
                  
                    <button className="absolute left-4 p-2 bg-white rounded-full carosel1 ">
                    <IoIosArrowBack size={20}/>
                    </button>
                    
                    <div className="text-center">
                        <div className="bg-blue-100 inline-block px-4 py-1 rounded-full text-blue-500 uppercase tracking-wide text-xs font-semibold">Library</div>
                        <h2 className="text-xl md:text-3xl font-bold text-violet-950 mt-2">Our Sample Catalogue</h2>
                        <p className="text-md md:text-lg text-blue-400 mt-1">Where Learning Unfolds like a story!</p>
                    </div>
                    <button className="absolute right-4 p-2 bg-white rounded-full carosel1">
                    <IoIosArrowForward size={20}/>
                    </button>
                </div>
                    <div className="card2 ">
                      <div className='card8 md:space-x-4'>
                        <div className="catalogue-card  p-4  rounded">
                            <div className='text2'>
                            <h3 className="text-xl md:text-sm  text-white">PROTISTA FAMILY</h3>
                            <div className='text3'>
                            <a href="#" className="text-white hover:underline">Learn more</a>
                            <IoIosArrowDroprightCircle  size={20} style={{marginLeft:"10px"}}/>
                            </div>
                            </div>
                        </div>
                        <div className="catalogue-card1  p-4 rounded">
                        <div className='text2'>
                            <h3 className="text-xl md:text-sm   text-white">ATOMIC STRUCTURE</h3>
                            <div className='text3'>
                            <a href="#" className="text-white hover:underline  inline-block">Learn more</a>
                            <IoIosArrowDroprightCircle style={{marginLeft:"10px"}} size={20}/>
                            </div>
                            </div>
                        </div>
                        <div className="catalogue-card2  p-4 rounded">
                        <div className='text2'>
                            <h3 className="text-xl md:text-sm  text-white">EARTH CORE</h3>
                            <div className='text3'>
                            <a href="#" className="text-white hover:underline  inline-block">Learn more</a>
                            <IoIosArrowDroprightCircle style={{marginLeft:"10px"}} size={20}/>
                            </div>
                            </div>
                        </div>
                        <div className="catalogue-card3  p-4 rounded">
                        <div className='text2'>
                            <h3 className="text-xl md:text-sm   text-white">POLLINATION</h3>
                            <div className='text3'>
                            <a href="#" className="text-white hover:underline  inline-block">Learn more</a>
                            <IoIosArrowDroprightCircle style={{marginLeft:"10px"}} size={20}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

          

            <div className="bg-gray-100 p-8">
                    <div className="card3">
                        <h1 className="text-2xl font-bold text-violet-950">Connect with us to unveil a new<br/> world of learning.</h1>
                        <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
                            <input type="email" placeholder="Enter your email" className="px-10 py-2 border border-gray-300 rounded-l-lg text4" />
                            <button className="bg-violet-950 text-white px-6 py-2 mt-4 md:mt-0 rounded-r-lg button2" >Let's Talk</button>
                        </div>
                    </div>
                </div>


                <footer className="bg-violet-950 text-white">
                    <div className="container mx-auto py-8">
                        <div className="card4">
                            <img src={companylogo1} alt="Credenza logo" className="h-12" />
                            <nav className="flex space-x-1 md:space-x-4">
                                <a href="#" className="hover:text-blue-400 text6">Home</a>
                                <a href="#" className='hover:text-blue-400 text6'>About us</a>
                                <a href="#" className='hover:text-blue-400 text6'>Learning Science</a>
                                <a href="#" className='hover:text-blue-400 text6'>Learning Vedic Maths</a>
                                <a href="#" className='hover:text-blue-400 text6'>Learning Bespoke</a>
                            </nav>
                        </div>
                        <div className="border-t border-indigo-700  pt-4 card5 text-sm">
                            <p className='text7 flex justify-center'>2023 &copy; Copyright by The Credenza | Developed by <a href="#" className="text-blue-400 text5">ValueThoughtz</a></p>
                            <div className="flex justify-center md:space-x-4">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms</a>
                                <a href="#">Cookies</a>
                            </div>
                        </div>
                    </div>
                </footer>








            
        </div>
  );
}

export default App;
