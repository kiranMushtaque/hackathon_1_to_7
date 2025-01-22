import Image from "next/image";

export default function BlogPosts() {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/Blog Post.png"
            alt="post"
            width={123}
            height={40}
          />
          <h2 className="text-white text-4xl font-bold mt-4 mb-8">
            <span className="text-[#FF9F0D]">Latest News & Blog</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <Image
              src="/images/Image Placeholder.png"
              alt="Burger"
              width={423}
              height={349}
            />
            <div className="p-4">
              <p className="text-yellow-400 text-sm mb-2">10 February 2022</p>
              <h3 className="text-white text-lg font-semibold mb-4">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </h3>
              <p className="text-yellow-500 text-sm underline cursor-pointer">
                Learn More
              </p>
              <div className="flex justify-end gap-4 mt-4">
                <i className="text-yellow-400 fas fa-share-alt cursor-pointer"></i>
                <i className="text-yellow-400 fas fa-heart cursor-pointer"></i>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <Image
              src="/images/Image Placeholder (1).png"
              alt="Pizza"
              width={423}
              height={349}
            />
            <div className="p-4">
              <p className="text-yellow-400 text-sm mb-2">10 February 2022</p>
              <h3 className="text-white text-lg font-semibold mb-4">
                Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
              </h3>
              <p className="text-yellow-500 text-sm underline cursor-pointer">
                Learn More
              </p>
              <div className="flex justify-end gap-4 mt-4">
                <i className="text-yellow-400 fas fa-share-alt cursor-pointer"></i>
                <i className="text-yellow-400 fas fa-heart cursor-pointer"></i>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <Image
              src="/images/Image Placeholder (2).png"
              alt="Tacos"
              width={423}
              height={349}
              className="mr-1"
            />
            <div className="p-4">
              <p className="text-yellow-400 text-sm mb-2">10 February 2022</p>
              <h3 className="text-white text-lg font-semibold mb-4">
                Curabitur Rutrum Velit Ac Congue Malesuada
              </h3>
              <p className="text-yellow-500 text-sm underline cursor-pointer">
                Learn More
              </p>
              <div className="flex justify-end gap-4 mt-4">
                <i className="text-yellow-400 fas fa-share-alt cursor-pointer"></i>
                <i className="text-yellow-400 fas fa-heart cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <i className="text-yellow-400 fas fa-share-alt cursor-pointer"></i>
          <i className="text-yellow-400 fas fa-heart cursor-pointer ml-4"></i>
        </div>
      </div>
    </div>
  );
}
