"use client";

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
        <div className="flex flex-row justify-center">
          <button className="border border-2 border-y-emerald-100 hover:bg-teal-400/40 px-5 py-3 mt-8">
            Read more
          </button>
          <button
            className="border border-2 border-y-emerald-100 hover:bg-teal-400/40 px-5 py-3 mt-8 ml-5"
            onClick={() => {
              document
                .getElementById("bodyDl")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Go to downloads
          </button>
        </div>
      </div>

      

      <div
        id="body1"
        className="flex flex-col justify-center items-center min-h-screen text-teal-300"
      >
        <div className="text-3xl text-white font-bold">Kaspad</div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4">
          Kaspad is the node for the Kaspa network. With a running kaspad you
          make the network more secure. You can request all important data.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
          officiis quis voluptas adipisci modi, voluptatum pariatur cupiditate
          ipsum eos harum fugiat hic quibusdam fugit nisi. Molestiae dicta, sit
          earum incidunt rerum dolorem, voluptatibus voluptates ad nemo cumque
          vitae, cupiditate enim! Totam eos quas sapiente repudiandae nostrum
          recusandae cupiditate, tempora quaerat maxime placeat sed omnis odit
          quis velit quod laboriosam dignissimos consectetur iusto! Quos eaque
          illo exercitationem, voluptas ipsum voluptates similique iusto facere
          consequuntur in cumque consequatur, porro odit libero, neque alias
          atque officiis commodi perferendis incidunt? Vero, ut quae. Similique
          voluptatibus veniam magnam rem reiciendis ducimus aut corrupti. Quasi,
          aliquid.
        </div>
        <div className="text-3xl text-white font-bold mt-[4rem]">
          Kaspa REST-API Server
        </div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4">
          The Kaspa REST-API Server is an application which allows you to
          communicate to a configured Kaspa node with an REST-API interface.
          Check <a href="https://api.kaspa.org" target="_blank">https://api.kaspa.org</a> for reference. You can run your very own REST-API server if
          needed.
        </div>
      </div>

      <div
        id="body2"
        className="flex flex-col justify-center items-center min-h-screen text-teal-300"
      >
        <div className="text-3xl text-white font-bold">Kaspa-DB</div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4">
          The Kaspa-DB is a PostgreSQL database which was created initially for the Kaspa Explorer. It saves all the block and transaction data.
        </div>
        <div className="text-3xl text-white font-bold mt-[4rem]">Kaspa-DB Filler</div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4">
          This is a tool, written in Python, which is used to fill the Kaspa-DB. The Filler is communicating directly with the Kaspa node, requesting block and transaction data and pushing the information into the Kaspa-DB.
        </div>
      </div>

      <div
        id="bodyDl"
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
