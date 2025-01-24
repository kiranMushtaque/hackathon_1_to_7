
import Image from "next/image";
import React from 'react';

const Index = () => {
  return (
    <div className="bg-black">
      <div className="bg-black ml-[60px] mt-9 z-10">
        <Image
          src="/images/Group 1000002250.png"
          alt="testimonial"
          width={129}
          height={40}
        />
        <h3 className="text-[48px] text-white font-bold">
          What our clients are saying
        </h3>

        <div className="flex justify-center relative">
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

        <div className="flex flex-col items-center mt-20 relative">
          <Image
            src="/images/unsplash_E6DsqnZbZ4o.png"
            alt="follower"
            width={1918}
            height={558}
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center ml-96  text-center left-96">
            <Image
              src="/images/Restaurant Active Process.png"
              alt="heading"
              width={273}
              height={40}
              className="object-cover mb-4 ml-48"
            />
            <div className="text-4xl font-bold text-white mb-4">
              <h2>
                <span className="text-[#FF9F0D]">We</span> Document Every Food{" "}
                <br /> Bean Process until it is saved
              </h2>
            </div>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              ducimus incidunt similique <br />
              nulla a natus eligendi saepe molestiae animi laboriosam at modi
              dolorum, tenetur molestias <br />
              officiis atque, quibusdam dignissimos. Vel.
            </p>
          </div>
        </div>
      </div>

      {/*what our client sying */}
    </div>
  );
};

export default Index;
