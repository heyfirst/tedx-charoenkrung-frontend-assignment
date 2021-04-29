import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

const TYPES = [
  {
    icon: "/static/icon-1.png",
    title: "Confident",
  },
  {
    icon: "/static/icon-2.png",
    title: "Shy",
  },
  {
    icon: "/static/icon-3.png",
    title: "Independent",
  },
  {
    icon: "/static/icon-4.png",
    title: "Laidback",
  },
  {
    icon: "/static/icon-5.png",
    title: "Adaptable",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="flex flex-col mb-6 text-center sm:flex-row">
          <div className="w-full mb-6 hero sm:w-1/2 sm:order-2">
            <Image src="/static/hero.png" width={655} height={661} alt="" />
          </div>
          <div className="w-full sm:w-1/2 sm:order-1 sm:flex sm:items-center sm:justify-center sm:p-8">
            <div className="px-8">
              <h1 className="mb-3 text-3xl font-bold">
                What's meant to be will always find a way.
              </h1>
              <p className="mb-3">
                PawsUp help you to find the best partner for your dearest
                fluffly friend
              </p>
              <button className="px-6 py-3 font-bold text-white transition bg-red-400 rounded-full hover:bg-red-500">
                Find A Match
              </button>
            </div>
          </div>
        </section>
        <section className="mx-auto mb-6 text-center">
          <h2 className="p-8 mb-3 text-2xl font-bold">
            Dogs have these 5 major personality types
          </h2>
          <ul className="flex flex-row w-full mb-3 overflow-y-scroll sm:justify-center">
            {TYPES.map((type) => (
              <li
                className="inline-block mb-3 ml-6 mr-6 sm:ml-0 w-max"
                key={type.title}
              >
                <div className="relative mb-3 h-36 w-36">
                  <Image
                    src={type.icon}
                    height={150}
                    width={150}
                    alt={type.title}
                  />
                </div>
                <div>{type.title}</div>
              </li>
            ))}
          </ul>
          <button className="px-6 py-3 font-bold text-white transition bg-green-300 rounded-full hover:bg-green-400">
            Learn more
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
