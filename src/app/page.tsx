import React from "react";
import Header from "../components/Header/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col md:flex-row h-[90vh]">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start m-4 md:m-12">
          <h1 className="font-bodoni text-[40px] md:text-[60px] font-bold">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="font-bodoni text-[20px] md:text-[35px] w-full md:w-10/12 px-2 py-2 text-[#787256]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="font-bodoni text-[20px] md:text-[30px] px-3 py-2 bg-[#787256] text-white rounded-md m-2 md:m-5 hover:bg-[#6d6d50]"> 
            Explore Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="overflow-hidden rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[150px] md:rounded-br-[150px]">
            <Image
              src={"/images/image.png"}
              alt="elegant necklaces and chains"
              width={422}
              height={611}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
