import Image from "next/image";

export default function Home() {
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
            <a href="#">
              <Image src="/logo.png" alt="logo" width={140} height={140} />
            </a>
          </li>
          <li className="animate-fadein w-[46px] font-semibold text-[16px] leading-[19px] tracking-[0.15em] text-[#FFEFCA] opacity-0" style={{ animationDelay: `${2}s` }}>
            <a href="#">HOME</a>
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
      <div className="relative overflow-x-hidden top-[500px] mt-[85vh]">
        {/* FULL-SCREEN BACKGROUND SECTION */}
        <section className="relative h-screen w-screen animate-fadein opacity-0" style={{ animationDelay: `${2}s` }}>
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
        <section className="py-20 px-8 text-black border-t border-gray-800">
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
        </section>

        {/* FINAL SECTION */}
        <section className="py-20 px-8 text-black border-t border-gray-800">
          <h3 className="
            relative
            right-[10px]
            top-[-100px]
            text-[1rem]
            font-semibold
            leading-[6rem]
            text-gray-500
          ">
            Project
          </h3>
          <h2 className="
            relative
            right-[10px]
            top-[-160px]
            text-[2rem]
            font-semibold
            leading-[6rem]
            text-[#FFEFCA]
          ">
            Voor coke en beffe bel Nico effe
          </h2>
        </section>
      </div>
    </div>
  );
}
