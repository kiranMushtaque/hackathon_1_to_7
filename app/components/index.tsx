import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="bg-black">
      {/* Main Container */}
      <div className="bg-black px-6 md:px-12 lg:px-24 xl:px-32 mt-9 z-10">
        {/* Header Section */}
        <div className="text-center">
          <Image
            src="/images/Group 1000002250.png"
            alt="testimonial"
            width={129}
            height={40}
            className="mx-auto"
          />
          <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-4">
            What our clients are saying
          </h3>
        </div>

        {/* Testimonial Image Section */}
        <div className="relative flex justify-center mt-12">
          <Image
            src="/images/Text.png"
            alt="testimonial"
            width={868}
            height={451}
            className="z-10"
          />
          <div
            className="absolute inset-0 bg-white z-0"
            style={{
              width: "868.47px",
              height: "550px",
              top: "80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col items-center mt-20 relative">
          <Image
            src="/images/unsplash_E6DsqnZbZ4o.png"
            alt="follower"
            width={1918}
            height={558}
            className="object-cover w-full h-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 text-center">
            <Image
              src="/images/Restaurant Active Process.png"
              alt="heading"
              width={273}
              height={40}
              className="object-cover mb-4"
            />
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              <h2>
                <span className="text-[#FF9F0D]">We</span> Document Every Food{" "}
                <br /> Bean Process until it is saved
              </h2>
            </div>
            <p className="text-white text-base sm:text-lg lg:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              ducimus incidunt similique <br />
              nulla a natus eligendi saepe molestiae animi laboriosam at modi
              dolorum, tenetur molestias <br />
              officiis atque, quibusdam dignissimos. Vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
