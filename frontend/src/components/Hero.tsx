
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

import logo from '../assets/AceLogo.png';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image6.png';
import img3 from '../assets/4750.jpg';

import image5 from '../assets/Group6.png';
import DemoButton from './DemoButton';

const Hero = () => {
  return (
    <div className="relative min-h-fit overflow-hidden bg-blue-600" id="top">
      
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative min-h-fit container mx-auto">
     
        <div className="absolute top-32 left-10 md:left-20 lg:left-32">
          <div className="w-12 h-12  flex items-center justify-center ">
            <Image src={image5} alt="icon" className="w-8 h-8  rectangle" width={32} height={32} />
          </div>
        </div>
        <div className="absolute bottom-40 right-80 hidden lg:block">
          <div className="w-8 h-8  border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Image src={image5} alt="icon" className="w-4 h-4 opacity-80" width={16} height={16} />
          </div>
        </div>
        <div className="absolute bottom-20 left-8 md:left-16 xl:left-96">
          <div className="w-10 h-10 flex items-center justify-center backdrop-blur-sm">
            <Image src={image5} alt="icon" className="w-10 h-10 opacity-70" width={12} height={12} />
          </div>
        </div>
       
        <div className="hidden lg:block absolute top-32 2xl:top-44 left-[800px]">
          <div className="w-28 h-px bg-white/30" />
        </div>
        <div className="absolute top-72 right-16 md:right-24">
          <div className="w-3 h-3 rounded-full border-2 border-white/40 bg-white/10" />
        </div>
     

        <div className="relative z-10 max-w- mx-auto px-4 sm:px-6 py-4">
          <nav aria-label="Main navigation">
            <Navbar />
          </nav>

          <div className="md:hidden flex gap-1 mx-auto justify-center w-fit py-4 px-6 md:mt-10  -mt-16 ">
            <Image src={logo} alt="logo" className="w-8 h-8 " width={32} height={32}  />
            <span className="text-lg font-bold text-white tracking-wide mt-1">ACE CMS</span>
          </div>

          <section className="flex flex-col lg:flex-row items-center md:max-w-11/12 mx-auto justify-between  min-h-fit 2xl:pb-10  md:gap-12 lg:gap-8">
            <div className="relative w-full  order-1 lg:order-2">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="absolute -inset-8 bg-violet-400/20 rounded-3xl blur-2xl" />
               <div className="grid grid-cols-1 gap-6">

  <div className="relative bg-white/10 rounded-2xl border border-white/20 p-2 md:p-6 shadow-2xl backdrop-blur-sm">
    <Image
      src={img1}
      alt="image"
      className="w-full max-w-full mx-auto rounded-xl shadow-lg "
      width={484}
      height={588}
      priority
    />
  </div>

  <div className=" hidden lg:grid grid-cols-2 md:grid-cols-2 gap-6">
    <div className="relative bg-white/10 rounded-2xl border border-white/20 p-2 md:p-4 shadow-2xl backdrop-blur-sm ">
      <Image
        src={img2}
        alt="image"
        className="w-full max-w-full mx-auto rounded-lg shadow-lg  "
        width={484}
        height={588}
      />
   
    </div>

    <div className="relative bg-white/10 rounded-2xl border border-white/20 p-2 md:p-4 shadow-2xl backdrop-blur-sm">
      <Image
        src={img3}
        alt="image"
        className="w-full max-w-full mx-auto rounded-lg shadow-lg "
        width={484}
        height={588}
      />
      {/* <div className="hidden md:block absolute -bottom-4 -right-4 bg-white/15 rounded-xl border border-white/30 p-3 shadow-xl ">
        <Image src={gear} alt="icon" className="md:w-8 md:h-8" width={48} height={48} />
      </div> */}
    </div>
  </div>
</div>
              </div>
            </div>

            <div className="w-full text-center lg:text-left order-2 lg:order-1 mt-10 ">
              <div className="max-w-2xl mx-auto lg:mx-0 space-y-6 md:space-y-8  ">
                <div className="space-y-4">
                  <h1 className='md:hidden text-xl text-white font-bold md:text-center'>Streamline Calibration Management, Ensure Regulatory Compliance, and Boost Efficiency with ACE CMS.</h1>
                  <h1 className=" hidden md:block text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-black text-white leading-tight">
                    Streamline Calibration Management and Ensure Compliance with <span className='relative text-white'>ACE CMS
                       <div className="absolute -bottom-2 left-0 right-0 h-1 bg-cyan-400 rounded-full" />
                    </span>
                  </h1>
                </div>

                <p className="  md:text-xl text-gray-200 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  Efficient, compliant, and <span className="text-cyan-300 font-semibold">cloud-based calibration management</span> tailored for manufacturing excellence.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0">
                  <div className="text-center lg:text-left p-2 md:p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-xl md:text-2xl font-bold text-white text-center">100 % </div>
                    <div className="text-sm text-gray-300 text-center">Cloud-Based</div>
                  </div>
                  <div className="text-center lg:text-left p-2 md:p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className=" text-xl md:text-2xl font-bold text-white text-center">200 +</div>
                    <div className="text-sm text-gray-300 text-center">Live Users</div>
                  </div>
                  <div className="hidden md:block text-center lg:text-left p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-white text-center">95 %</div>
                    <div className="text-sm text-gray-300 text-center">Positive feedback</div>
                  </div>
                </div>

                <div className="pt-4 flex gap-5 mx-auto justify-evenly md:justify-center lg:justify-start">
                 <div>
                   <Link href="#contact" className="group inline-flex items-center gap-3 px-4 py-2  md:px-8 md:py-3 lg:px-6 lg:py-3 bg-gray-800  text-white md:text-lg font-bold rounded  shadow-xl hover:shadow-2xl">
                    <span>Contact Us</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                 </div>
                      <div className=''>
                        <DemoButton/>
                      </div>
                  
                </div>

           
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;