"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const imageCount = 10; // Number of images
  const imageWidth = 700; // Each image width in pixels
  const gap = 16; // Gap between images
  const containerWidth = 500; // Visible container width in pixels
  const totalWidth = imageCount * (imageWidth + gap); // Total carousel width
  const dragLimit = -(totalWidth - containerWidth); // Drag constraint for left
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, imageCount - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  useEffect(() => {
    // Simulate logo animation duration
    const logoTimer = setTimeout(() => {
      setShowLogo(false); // Hide logo after animation
      setShowPage(true); // Show page after logo animation ends
    }, 2000); // Adjust time (2s for bounce and fade-out)

    return () => clearTimeout(logoTimer); // Cleanup timer
  }, []);

  if (showLogo) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{ backgroundColor: "#0E0E10" }}
      >
        {/* Bouncing Logo */}
        <Image
          src="/logo.png"
          alt="logo"
          width={140}
          height={140}
          className="animate-bounce opacity-1"
        />
      </div>
    );
  }

  if (showPage) {

  return (
    <div className="
      scrollbar-thin
      scroll-smooth
      scrollbar-thumb-gray-400
      scrollbar-track-gray-200
      grid grid-rows-[20px_1fr_20px]
      items-center
      justify-items-center
      min-h-screen
      p-8
      pb-20
      gap-16
      sm:p-20
      font-mono
    ">
      {/* FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {/* NAVIGATION */}
      <nav>
        <ul className="relative right-[40px] flex space-x-44 mt-[-60px]">
          <li className="animate-fadein opacity-0 relative -top-2 font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA]" style={{ animationDelay: `${2}s` }}>
            <a href="/">
              <Image src="/logo.png" alt="logo" width={140} height={140} />
            </a>
          </li>
          <li className="animate-fadein w-[46px] font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA] opacity-0" style={{ animationDelay: `${2}s` }}>
            <a href="/">HOME</a>
          </li>
          <li className="animate-fadein opacity-0 w-[106px] font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA]" style={{ animationDelay: `${2}s` }}>
            <a href="#">PROJECTEN</a>
          </li>
          <li className="animate-fadein opacity-0 w-[70px] font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA]" style={{ animationDelay: `${2}s` }}>
            <a href="#">AGENDA</a>
          </li>
          <li className="animate-fadein opacity-0 w-[104px] font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA]" style={{ animationDelay: `${2}s` }}>
            <a href="#">OVER ONS</a>
          </li>
          <li className="animate-fadein opacity-0 w-[82px] font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA]" style={{ animationDelay: `${2}s` }}>
            <a href="#">CONTACT</a>
          </li>
          <li className="animate-fadein opacity-0 w-[140px] font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA]" style={{ animationDelay: `${2}s` }}>
            <a href="#">PRODUCTEN 0</a>
          </li>
        </ul>
      </nav>

      {/* HERO TEXT */}
      <div className="mt-[100px]">
        <div
          className="
            relative
            right-[120px]
            top-[10px]
            text-[10rem]
            font-semibold
            leading-[10rem]
            text-[#FFEFCA]
            flex flex-wrap items-center justify-center
          "
        >
          {/* First Line: "WONING &" */}
          <h1 className="relative left-[20px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.8s` }}>
            W
          </h1>
          <h1 className="relative left-[20px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.7s` }}>
            O
          </h1>
          <h1 className="relative left-[20px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.6s` }}>
            N
          </h1>
          <h1 className="relative left-[20px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.5s` }}>
            I
          </h1>
          <h1 className="relative left-[20px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.2s` }}>
            N
          </h1>
          <h1 className="relative left-[20px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.5s` }}>
            G
          </h1>
          <h1 className="relative left-[100px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.6s` }}>
            & {/* Fastest, no delay */}
          </h1>

          {/* Second Line: "PROJECT STOFFERING" */}
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.65s` }}>
            P
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.55s` }}>
            R
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.45s` }}>
            O
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.35s` }}>
            J
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.25s` }}>
            E
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.35s` }}>
            C
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.45s` }}>
            T
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.55s` }}>
            S
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.65s` }}>
            T
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.75s` }}>
            O
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.85s` }}>
            F
          </h1>
          <h1 className="relative top-[150px] right-[600px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `1.95s` }}>
            F
          </h1>
          <h1 className="relative left-[450px] bottom-[10px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `2.05s` }}>
            E
          </h1>
          <h1 className="relative left-[450px] bottom-[10px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `2.15s` }}>
            R
          </h1>
          <h1 className="relative left-[450px] bottom-[10px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `2.25s` }}>
            I
          </h1>
          <h1 className="relative left-[450px] bottom-[10px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `2.35s` }}>
            N
          </h1>
          <h1 className="relative left-[450px] bottom-[10px] inline-block opacity-0 animate-fadeInSlideUp" style={{ animationDelay: `2.45s` }}>
            G
          </h1>
        </div>
        <h2 className="
          relative
          left-[200px]
          top-[100px]
          text-[16px]
          font-medium
          text-[#FFEFCA]
          animate-fadein opacity-0
        " style={{ animationDelay: `${2}s` }}>
          Wij helpen uw ruimtes tot leven komen met stofferingen,
        </h2>
        <h2 className="
          relative
          left-[150px]
          top-[100px]
          text-[16px]
          font-medium
          text-[#FFEFCA]
          animate-fadein opacity-0
        " style={{ animationDelay: `${2}s` }}>
          afgestemd op stijl en functionaliteit.
        </h2>
        <h2 className="
          relative
          left-[950px]
          top-[52px]
          text-[16px]
          tracking-[0.15rem]
          font-semibold
          text-[#FFEFCA]
          animate-fadein opacity-0
        " style={{ animationDelay: `${2}s` }}>
          GEMAAKT OP MAAT
        </h2>
        <h2 className="
          relative
          left-[1300px]
          top-[26px]
          text-[16px]
          tracking-[0.15rem]
          font-medium
          text-[#FFEFCA]
          animate-fadein opacity-0
        " style={{ animationDelay: `${2}s` }}>
          VAKMANSCHAP SINDS 2014 <br />
          BETROUWBAAR EN ERKEND
        </h2>
        <Image
          className="
            relative
            left-[1600px]
            bottom-[34px]
            tracking-[0.15rem]
            font-medium
            text-[#FFEFCA]
            animate-fadein opacity-0
          "
          src="/logo2.png"
          alt="logo"
          width={100}
          height={100}
          style={{ animationDelay: `${2}s` }}
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="
        fixed
        bottom-0
        left-0
        w-full
        bg-[#0E0E10]
        shadow-lg
        z-50
        flex
        items-center
        justify-between
        border-t
        border-gray-800
        px-8
        py-4
      ">
        <div className="text-sm text-gray-500 pr-4 border-r border-gray-800">
          <span className="font-medium">Page: <br /></span>
          <p className="font-extrabold text-[#FFEFCA]">Woning & Projectstoffering</p>
        </div>
        <div className="flex space-x-4">
          <button className="
            px-4
            py-2
            text-[#0E0E10]
            bg-[#FFEFCA]
            hover:bg-[#0E0E10]
            hover:text-[#FFEFCA]
          ">
            Chat Online <i className="fa fa-wechat"></i>
          </button>
          <button className="
            px-4
            py-2
            border
            bg-[#0E0E10]
            text-[#FFEFCA]
            hover:bg-[#FFEFCA]
            hover:text-[#0E0E10]
          ">
            Vraag een offerte aan
          </button>
        </div>
      </div>

      {/* BACKGROUND + NEW SECTIONS */}
      <div className="relative overflow-x-hidden overflow-hidden top-[500px] mt-[713vh]">
        {/* FULL-SCREEN BACKGROUND SECTION */}
        <section className="relative h-screen overflow-hidden w-screen animate-fadein opacity-0" style={{ animationDelay: `${2}s` }}>
          <Image
            src="/background.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="z-10 relative flex h-full items-center justify-center">
            <h2 className="
              z-10
              text-[16px]
              text-[#FFEFCA]
              relative
              left-[280px]
              top-[-360px]
            ">
              BEDRIJF WIEDIJK
            </h2>
          </div>
        </section>

        {/* UITGELICHTE PROJECTEN SECTION */}
        <motion.section 
          className="py-20 px-8 text-black border-t border-gray-800"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
          transition={{ duration: 1 }} // Animation duration
          >

          <h3 className="
            relative
            right-[10px]
            top-[-60px]
            text-[6rem]
            font-semibold
            leading-[6rem]
            text-[#FFEFCA]
          ">
            UITGELICHTE <br />
            PROJECTEN
          </h3>
          <p className="
            relative
            left-[1100px]
            top-[-240px]
            text-[16px]
            font-medium
            text-[#FFEFCA]
          ">
            Onze op maat gemaakte stofferingsoplossingen <br />
            brengen ruimtes tot leven. Functioneel en <br />
            stijlvol, ontworpen om zowel comfort als <br />
            een unieke uitstraling te bieden <br />
          </p>
          <button className="
            rounded-full
            border-2
            border-[#FFEFCA]
            px-4
            py-2
            text-[#FFEFCA]
            bg-[#0E0E10]
            hover:bg-[#FFEFCA]
            hover:text-[#0E0E10]
            relative
            top-[-210px]
            left-[1100px]
          ">
            ALLE PROJECTEN <i className="text-gray-500">BEKIJKEN</i>
          </button>
        </motion.section>

        {/* FINAL SECTION */}
        <motion.section
          className="py-20 px-8 text-black border-t border-gray-800 flex flex-col"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <div className="flex w-full">
            {/* Left Section with Text */}
            <div className="w-1/2 pr-8">
              <h3 className="text-[1rem] font-semibold leading-[6rem] text-gray-500 relative top-[-80px]">
                Project
              </h3>
              <h2 className="text-[2rem] font-semibold leading-[6rem] text-[#FFEFCA] relative top-[-130px]">
                Voor coke en beffe bel Nico effe
              </h2>
            </div>

            {/* Vertical Border Line */}
            <div className="border-l border-gray-800 mx-4"></div>

            {/* Right Section with Scrollable and Navigable Images */}
            <div className="relative w-1/2 pl-8 overflow-hidden">
              {/* Scrollable Images */}
              <motion.div
                className="flex space-x-4"
                drag="x"
                dragConstraints={{ left: dragLimit, right: 0 }}
                animate={{ x: -currentIndex * (imageWidth + gap) }} // Sync drag with buttons
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {Array.from({ length: imageCount }).map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    onDragStart={(e) => e.preventDefault()} // Prevent native drag
                  >
                    <img
                      src={`https://picsum.photos/700/500?random=${index}`}
                      alt={`Random ${index}`}
                      className="rounded-lg shadow-lg pointer-events-none" // Disable pointer events on images
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Descriptions */}
          <div className="mt-16 flex items-start justify-between">
            {/* BESCHRIJVING */}
            <div className="w-1/2">
              <h4 className="font-bold text-[#FFEFCA]">BESCHRIJVING</h4>
              <p className="text-gray-500 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius.
              </p>
            </div>

            {/* MEDEWERKERS */}
            <div className="w-1/2 text-center pr-8">
              <h4 className="font-bold text-[#FFEFCA]">MEDEWERKERS</h4>
              <p className="text-gray-500 mt-2 text-sm">
                John Doe, Jane Smith, Alex Johnson.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-start space-x-4">
            <button
              onClick={handlePrev}
              className="bg-[#0E0E10] text-[#FFEFCA] px-4 py-2 rounded-l-full border border-[#FFEFCA] hover:bg-[#FFEFCA] hover:text-[#0E0E10]"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-[#0E0E10] text-[#FFEFCA] px-4 py-2 rounded-r-full border border-[#FFEFCA] hover:bg-[#FFEFCA] hover:text-[#0E0E10]"
            >
              →
            </button>
          </div>
        </motion.section>
        <motion.section
          className="py-20 px-8 text-black border-t border-gray-800 flex flex-col"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <div className="flex w-full">
            {/* Left Section with Text */}
            <div className="w-1/2 pr-8">
              <h3 className="text-[1rem] font-semibold leading-[6rem] text-gray-500 relative top-[-80px]">
                Project
              </h3>
              <h2 className="text-[2rem] font-semibold leading-[6rem] text-[#FFEFCA] relative top-[-130px]">
                Voor coke en beffe bel Nico effe
              </h2>
            </div>

            {/* Vertical Border Line */}
            <div className="border-l border-gray-800 mx-4"></div>

            {/* Right Section with Scrollable and Navigable Images */}
            <div className="relative w-1/2 pl-8 overflow-hidden">
              {/* Scrollable Images */}
              <motion.div
                className="flex space-x-4"
                drag="x"
                dragConstraints={{ left: dragLimit, right: 0 }}
                animate={{ x: -currentIndex * (imageWidth + gap) }} // Sync drag with buttons
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {Array.from({ length: imageCount }).map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    onDragStart={(e) => e.preventDefault()} // Prevent native drag
                  >
                    <img
                      src={`https://picsum.photos/700/500?random=${index}`}
                      alt={`Random ${index}`}
                      className="rounded-lg shadow-lg pointer-events-none" // Disable pointer events on images
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Descriptions */}
          <div className="mt-16 flex items-start justify-between">
            {/* BESCHRIJVING */}
            <div className="w-1/2">
              <h4 className="font-bold text-[#FFEFCA]">BESCHRIJVING</h4>
              <p className="text-gray-500 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius.
              </p>
            </div>

            {/* MEDEWERKERS */}
            <div className="w-1/2 text-center pr-8">
              <h4 className="font-bold text-[#FFEFCA]">MEDEWERKERS</h4>
              <p className="text-gray-500 mt-2 text-sm">
                John Doe, Jane Smith, Alex Johnson.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-start space-x-4">
            <button
              onClick={handlePrev}
              className="bg-[#0E0E10] text-[#FFEFCA] px-4 py-2 rounded-l-full border border-[#FFEFCA] hover:bg-[#FFEFCA] hover:text-[#0E0E10]"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-[#0E0E10] text-[#FFEFCA] px-4 py-2 rounded-r-full border border-[#FFEFCA] hover:bg-[#FFEFCA] hover:text-[#0E0E10]"
            >
              →
            </button>
          </div>
        </motion.section>
        <motion.section
          className="py-20 px-8 text-black border-t border-gray-800 flex flex-col"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <div className="flex w-full">
            {/* Left Section with Text */}
            <div className="w-1/2 pr-8">
              <h3 className="text-[1rem] font-semibold leading-[6rem] text-gray-500 relative top-[-80px]">
                Project
              </h3>
              <h2 className="text-[2rem] font-semibold leading-[6rem] text-[#FFEFCA] relative top-[-130px]">
                Voor coke en beffe bel Nico effe
              </h2>
            </div>

            {/* Vertical Border Line */}
            <div className="border-l border-gray-800 mx-4"></div>

            {/* Right Section with Scrollable and Navigable Images */}
            <div className="relative w-1/2 pl-8 overflow-hidden">
              {/* Scrollable Images */}
              <motion.div
                className="flex space-x-4"
                drag="x"
                dragConstraints={{ left: dragLimit, right: 0 }}
                animate={{ x: -currentIndex * (imageWidth + gap) }} // Sync drag with buttons
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {Array.from({ length: imageCount }).map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    onDragStart={(e) => e.preventDefault()} // Prevent native drag
                  >
                    <img
                      src={`https://picsum.photos/700/500?random=${index}`}
                      alt={`Random ${index}`}
                      className="rounded-lg shadow-lg pointer-events-none" // Disable pointer events on images
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Descriptions */}
          <div className="mt-16 flex items-start justify-between">
            {/* BESCHRIJVING */}
            <div className="w-1/2">
              <h4 className="font-bold text-[#FFEFCA]">BESCHRIJVING</h4>
              <p className="text-gray-500 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius.
              </p>
            </div>

            {/* MEDEWERKERS */}
            <div className="w-1/2 text-center pr-8">
              <h4 className="font-bold text-[#FFEFCA]">MEDEWERKERS</h4>
              <p className="text-gray-500 mt-2 text-sm">
                John Doe, Jane Smith, Alex Johnson.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-start space-x-4">
            <button
              onClick={handlePrev}
              className="bg-[#0E0E10] text-[#FFEFCA] px-4 py-2 rounded-l-full border border-[#FFEFCA] hover:bg-[#FFEFCA] hover:text-[#0E0E10]"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-[#0E0E10] text-[#FFEFCA] px-4 py-2 rounded-r-full border border-[#FFEFCA] hover:bg-[#FFEFCA] hover:text-[#0E0E10]"
            >
              →
            </button>
          </div>
        </motion.section>
        <motion.section 
          className="py-20 px-8 text-black border-t border-gray-800"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
          transition={{ duration: 1 }} // Animation duration
          >

          <h3 className="
            relative
            right-[10px]
            top-[-60px]
            text-[6rem]
            font-semibold
            leading-[6rem]
            text-[#FFEFCA]
          ">
            SPECIAAL ADVIES <br />
            OP MAAT GEMAAKT.
          </h3>
          <p className="
            relative
            left-[1100px]
            top-[-240px]
            text-[16px]
            font-medium
            text-[#FFEFCA]
          ">
            Heeft u snel een antwoord nodig? <br />
            Onze specialisten staan klaar om U te helpen, <br />
            wanneer U het ook maar nodig heeft. <br />
          </p>
          <button className="
            rounded-full
            border-2
            border-[#FFEFCA]
            px-4
            py-2
            text-[#FFEFCA]
            bg-[#0E0E10]
            hover:bg-[#FFEFCA]
            hover:text-[#0E0E10]
            relative
            top-[-210px]
            left-[1100px]
          ">
            EMAIL <i className="text-gray-500">COKEBEFFE@NICO.NL</i>
          </button> <br></br>
          <button className="
            rounded-full
            border-2
            border-[#FFEFCA]
            px-4
            py-2
            text-[#FFEFCA]
            bg-[#0E0E10]
            hover:bg-[#FFEFCA]
            hover:text-[#0E0E10]
            relative
            top-[-190px]
            left-[1100px]
          ">
            BEL <i className="text-gray-500">+31 123 45678</i>
          </button>
          <motion.div className="relative mt-8"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
            transition={{ duration: 1 }} // Animation duration
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
            >
              <path
                fill="#FFEFCA"
                fillOpacity="1"
                d="M0,96L120,128C240,160,480,224,720,240C960,256,1200,224,1320,96L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-10">
              {/* Dots with Labels */}
              {[
                { label: "Precisie", pos: "15%" },
                { label: "Duur", pos: "50%" },
                { label: "Kwaliteit", pos: "85%" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute text-center"
                  style={{ left: item.pos, bottom: "20px" }}
                >
                  <div className="h-8 w-8 bg-[#0E0E10] border-2 border-[#FFEFCA] rounded-full mx-auto"></div>
                  <span className="mt-2 block text-sm text-[#0E0E10]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>
        <motion.section 
          className="py-20 px-8 text-black border-t border-gray-800"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
          transition={{ duration: 1 }} // Animation duration
          >

          <h3 className="
            relative
            right-[10px]
            top-[-60px]
            text-[6rem]
            font-semibold
            leading-[6rem]
            text-[#FFEFCA]
          ">
            STOFFERING <br />
            PRODUCTEN
          </h3>
          <p className="
            relative
            left-[1100px]
            top-[-240px]
            text-[16px]
            font-medium
            text-[#FFEFCA]
          ">
            In ons werk is kwaliteit een <em>must</em>.<br />
            Onze producten zijn daarom ook niet goed, <br />
            maar perfect, zoals bij uw project hoort. <br />
            Neem een kijkje in onderstaande lijst. <br />
          </p>
          <button className="
            rounded-full
            border-2
            border-[#FFEFCA]
            px-4
            py-2
            text-[#FFEFCA]
            bg-[#0E0E10]
            hover:bg-[#FFEFCA]
            hover:text-[#0E0E10]
            relative
            top-[-210px]
            left-[1100px]
          ">
            ALLE PRODUCTEN <i className="text-gray-500">BEKIJKEN</i>
          </button>
          {/* Product List */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <div key={colIndex} className="space-y-4">
                <img
                  src={`https://picsum.photos/800/800?random=${colIndex}`}
                  alt={`Product ${colIndex}`}
                  className="rounded-lg shadow-lg"
                />
                <h4 className="text-[#FFEFCA] text-[1.5rem] font-semibold">Product {colIndex + 1}</h4>
                <div className="text-sm text-gray-500">
                  <p><span className="font-bold">CATEGORY</span>: Stoffering</p>
                  <p><span className="font-bold">MATERIAL</span>: Hoogwaardige kwaliteit</p>
                  <p><span className="font-bold">USAGE</span>: Binnen / Buiten</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <div key={colIndex} className="space-y-4">
                <img
                  src={`https://picsum.photos/800/800?random=${colIndex}`}
                  alt={`Product ${colIndex}`}
                  className="rounded-lg shadow-lg"
                />
                <h4 className="text-[#FFEFCA] text-[1.5rem] font-semibold">Product {colIndex + 1}</h4>
                <div className="text-sm text-gray-500">
                  <p><span className="font-bold">CATEGORY</span>: Stoffering</p>
                  <p><span className="font-bold">MATERIAL</span>: Hoogwaardige kwaliteit</p>
                  <p><span className="font-bold">USAGE</span>: Binnen / Buiten</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.section 
          className="py-20 px-8 text-black border-t border-gray-800"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
          transition={{ duration: 1 }} // Animation duration
          >

          <h3 className="
            relative
            right-[10px]
            top-[-60px]
            text-[6rem]
            font-semibold
            leading-[6rem]
            text-[#FFEFCA]
          ">
            UITGELICHTE <br />
            PROJECTEN
          </h3>
          <p className="
            relative
            left-[1100px]
            top-[-240px]
            text-[16px]
            font-medium
            text-[#FFEFCA]
          ">
            Onze op maat gemaakte stofferingsoplossingen <br />
            brengen ruimtes tot leven. Functioneel en <br />
            stijlvol, ontworpen om zowel comfort als <br />
            een unieke uitstraling te bieden <br />
          </p>
          <button className="
            rounded-full
            border-2
            border-[#FFEFCA]
            px-4
            py-2
            text-[#FFEFCA]
            bg-[#0E0E10]
            hover:bg-[#FFEFCA]
            hover:text-[#0E0E10]
            relative
            top-[-210px]
            left-[1100px]
          ">
            ALLE PROJECTEN <i className="text-gray-500">BEKIJKEN</i>
          </button>
        </motion.section>
        <motion.div
          className="bg-[#0E0E10] text-[#FFEFCA] py-16 px-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-6 gap-8 max-w-7xl mx-auto">
            {/* Column 1: Logo and Newsletter */}
            <div className="relative right-[250px] bottom-[30px]">
              <img src="/logo.png" alt="Logo" className="w-24 mb-8" />
              <h4 className="font-bold mb-4">Subscribe to our newsletter</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 bg-[#0E0E10] border border-[#FFEFCA] rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 bg-[#0E0E10] border border-[#FFEFCA] rounded"
                />
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 bg-[#0E0E10] border border-[#FFEFCA] rounded"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FFEFCA] text-[#0E0E10] px-4 py-2 rounded-full hover:bg-[#0E0E10] hover:text-[#FFEFCA]"
                  >
                    →
                  </button>
                </div>
              </form>
              <p className="text-sm mt-8">
                Woning & Projectstoffering pays respect to the past, present, and future custodians of the land.
              </p>
            </div>

            {/* Column 2: Social */}
            <div className="relative right-[150px] bottom-[30px]">
              <h4 className="font-bold mb-4">SOCIAL</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="https://www.stokreef.com" className="hover:underline relative top-[200px]">
                    Gemaakt door Paul Stokreef
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="relative right-[150px] bottom-[30px]">
              <h4 className="font-bold mb-4">PRODUCTS</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Panels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Slats
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Designer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Projects */}
            <div className="relative right-[150px] bottom-[30px]">
              <h4 className="font-bold mb-4">PROJECTEN</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Residential
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Commercial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Custom Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Inspiration
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Resources */}
            <div className="relative right-[-500px] bottom-[-220px] text-right">
              <h4 className="font-bold mb-4">RESOURCES</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 6: Contact */}
            <div className="relative right-[150px] bottom-[-220px]">
              <h4 className="font-bold mb-4">CONTACT</h4>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+3112345678" className="hover:underline">
                    +31 123 45678
                  </a>
                </li>
                <li>
                  <a href="mailto:coke&beffe@mailnico.nl" className="hover:underline">
                    coke&beffe@mailnico.nl
                  </a>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-sm">© Woning & Projectstoffering 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
return null;
}
