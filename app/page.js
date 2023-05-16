'use client';

import Image from "next/image";
import Card from "./Card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        id="header"
        className="flex flex-col justify-center items-center min-h-screen text-white"
      >
        <div className="text-3xl md:text-6xl font-bold p-8">
          Welcome to the Kaspa Docker Center
        </div>
        <div className="md:text-xl p-4">
          Download the docker-compose file which you need for your application.
        </div>
        <div>
          <button className="border border-2 border-y-emerald-100 hover:bg-teal-400/40 px-5 py-3 mt-8"
          onClick={() => {document.getElementById("body1").scrollIntoView({ behavior: "smooth" });}}>
            Check options
          </button>
        </div>
      </div>

      <div
        id="body1"
        className="flex flex-col justify-center items-center min-h-screen text-teal-300"
      >
        <div className="text-5xl font-bold p-8 max-w-3xl text-teal-200">
          Choose the docker compose version
        </div>
        <div className="text-xl p-4 text-white">
          Download the docker-compose file which you need for your application.
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
        <Card
            cardName="minimum"
            description="This is the lite version for docker compose."
          />

<Card
            cardName="lite"
            description="This is the lite version for docker compose."
          />

          <Card
            cardName="full"
            description="This is the lite version for docker compose."
          />
        </div>

        <div></div>
      </div>
    </div>
  );
}
