import Image from "next/image";
import Resturant from "./components/resturant";
import StatsSection from "./components/StatsSection";
import MenuAndChefSection from "./components/menuchefsection";
import Index from "./components";
import BlogPosts from "./components/blogpost";


const Page = () => {
  return (
    <div>
      {/* Resturant component */}
      <Resturant />

      {/* "About Us" section */}
      <section className="bg-black flex justify-center items-center left-40">
        <Image
          src="/images/About us.png"
          alt="About Us"
          width={1024}
          height={768}
        />
      </section>

      <section className="bg-black text-white py-16">
        {/* Food Category Heading */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <Image
              src="/images/Food Category.png"
              alt="food category"
              width={169}
              height={40}
              className="mx-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-center">
            <span className="text-[#FF9F0D]">Ch</span>oose food item
          </h2>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-4 px-72">
          {/* Food Item 1 */}
          <div className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:bg-yellow-200">
            <div className="relative group ">
              <Image
                src="/images/unsplash_-lHZUkiWM74.png"
                alt="Food Item 1"
                width={305}
                height={328}
                className="rounded-lg"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center rounded-lg z-10">
              <span className="bg-[#FF9F0D] text-black px-4 py-1 rounded-full mb-2">
                Save 30%
              </span>
              <p className="text-white font-semibold">Fast Food Dish</p>
            </div>
          </div>

          {/* Food Item 2 */}
          <div className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:bg-yellow-200">
            <Image
              src="/images/unsplash_dphM2U1xq0U (2).png"
              alt="Food Item 2"
              className="rounded-lg"
              width={306}
              height={329}
            />
          </div>
          {/* Food Item 3 */}
          <div className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:bg-yellow-200">
            <Image
              src="/images/unsplash_MRHyv-hHxgk.png"
              alt="Food Item 3"
              width={306}
              height={328}
              className="rounded-lg"
            />
          </div>
          {/* Food Item 4 */}
          <div className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:bg-yellow-200">
            <Image
              src="/images/unsplash_q54Oxq44MZs.png"
              alt="Food Item 4"
              width={306}
              height={329}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}

        <div className="grid grid-cols-2 gap-6 mt-12 px-64 items-center">
          {/* Food Images Grid */}

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/unsplash_lP5MCM6nZ5A.png"
                alt="Food Item 5"
                width={362}
                height={356}
              />
            
            <Image
              src="/images/unsplash_dphM2U1xq0U.png"
              alt="Food Item 6"
              width={281}
              height={231}
              className="mt-20"
            />
            <Image
              src="/images/unsplash_CLMpC9UhyTo.png"
              alt="Food Item 7"
              width={281}
              height={231}
            />
            <div className="relative">
              <Image
                src="/images/unsplash_-GFCYhoRe48.png"
                alt="Food Item 8"
                width={221}
                height={226}
                className="transform translate-x-[-50px] z-10"
              />
              <Image
                src="/images/unsplash_mmnKI8kMxpc.png"
                alt="Food Item 8"
                width={161}
                height={168}
                className="absolute top-48 left-48 z-20"
              />
              <Image
                src="/images/unsplash_tzl1UCXg5Es.png"
                alt="Food Item 8"
                width={161}
                height={168}
                className="absolute top-0 left-48 z-20"
              />
            </div>
          </div>

          {/* Why Choose Us Content */}
          <div style={{ position: "absolute", right: "0" }}>
            <Image
              src="/images/Group 1000002062.png"
              alt="heading"
              width={175}
              height={40}
            />
            <h2 className="text-3xl font-bold mt-2 leading-tight">
              Extraordinary taste And Experienced
            </h2>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum . non dui volutpat fringilla bibendum.
            </p>

            {/* Features List */}
            <div className="flex items-center space-x-6 mt-8 ">
              <div className="text-left">
                <div className="bg-[#FF9F0D] text-black w-16 h-16 flex items-center justify-center rounded-full mb-2">
                  <i className="fas fa-hamburger"></i>
                  <Image
                    src="/images/Hamburger.png"
                    alt="burger"
                    width={56}
                    height={56}
                  />
                </div>
                <p className="text-sm font-semibold">Fast Food</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FF9F0D] text-black w-16 h-16 flex items-center justify-center rounded-full mb-2">
                  <i className="fas fa-utensils"></i>
                  <Image
                    src="/images/Cookie.png"
                    alt="burger"
                    width={56}
                    height={56}
                  />
                </div>
                <p className="text-sm font-semibold">Lunch</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FF9F0D] text-black w-16 h-16 flex items-center justify-center rounded-full mb-2">
                  <i className="fas fa-pizza-slice"></i>
                  <Image
                    src="/images/Wine.png"
                    alt="burger"
                    width={56}
                    height={56}
                  />
                </div>
                <p className="text-sm font-semibold">Dinner</p>
              </div>
            </div>

            {/* Experience */}

            <div className="main-container w-[374px] h-[93px] relative mx-auto my-0 mt-6 ml-2.5">
              <div className="w-[374px] h-[92px] bg-[#fff] rounded-[6px] absolute top-0 left-0" />
              <div className="w-[10px] h-[93px] bg-[#ff9f0d] rounded-tl-[6px] rounded-tr-none rounded-br-none rounded-bl-[6px] absolute top-0 left-0 z-[2]" />
              <span className="flex h-[30.11%] justify-start items-start font-['Inter'] text-[20px] font-normal leading-[28px] text-[#1e1e1e] absolute top-[18.28%] left-[48.13%] text-left whitespace-nowrap z-[1]">
                Years of
              </span>
              <span className="flex h-[60.21%] justify-start items-start font-['Helvetica'] text-[48px] font-bold leading-[56px] text-[#ff9f0d] absolute top-[20.43%] left-[13.64%] text-left whitespace-nowrap z-[3]">
                30+
              </span>
              <span className="flex h-[32px] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#1e1e1e] absolute top-[42px] left-[180px] text-left whitespace-nowrap z-[4]">
                Experienced
              </span>
            </div>
          </div>
        </div>

        <StatsSection />
        <MenuAndChefSection />
        <Index />
        <BlogPosts />
      </section>
     
    </div>
  );
};

export default Page;

















