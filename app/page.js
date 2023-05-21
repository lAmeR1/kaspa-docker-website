"use client";

import Card from "./Card";
import { BsArrowDownCircle } from "react-icons/bs";

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
        <div className="md:text-xl p-4 md:w-3/4 xl:w-1/2">
          Start your journey into the Kaspa ecosystem by setting up the Kaspa
          node and accompanying tools on your server. To get started, choose
          &apos;Downloads&apos; and find the appropriate docker-compose file
          tailored to your application needs, or &apos;Read more&apos; for
          further information.
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="border-2 border-y-emerald-100 hover:bg-teal-400/40 px-5 py-3 mt-8"
            onClick={() => {
              document
                .getElementById("body1")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Read more
          </button>
          <button
            className="border border-y-emerald-100 hover:bg-teal-400/40 px-5 py-3 mt-8 ml-5"
            onClick={() => {
              document
                .getElementById("bodyDl")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Downloads
          </button>
        </div>
      </div>

      <div
        id="body1"
        className="flex flex-col justify-center items-center min-h-screen text-teal-300 py-10"
      >
        <div className="text-3xl text-white font-bold">Kaspad</div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4 xl:w-1/2">
          Kaspad operates as the primary node for the Kaspa network, ensuring
          its security. By running a Kaspad in a docker, you not only bolster
          the network&apos;s security but also gain access to crucial data.
        </div>
        <div className="text-3xl text-white font-bold mt-[4rem]">
          Kaspa REST-API Server
        </div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4 xl:w-1/2">
          The Kaspa REST-API Server is a converter to a Kaspa node, providing
          communication through an HTTP interface. It&apos;s incredibly flexible
          and compatible with nearly any programming language, making it easier
          for you to interact with the Kaspa network. Please visit{" "}
          <a
            href="https://api.kaspa.org"
            target="_blank"
            className="text-teal-300 underline-offset-2"
          >
          https://api.kaspa.org
          </a>{" "}
          for more details. With your own REST-API server you&apos;ll have
          complete control over your interactions.
        </div>
        <BsArrowDownCircle
          className="text-[4rem] mt-10 hover:cursor-pointer hover:text-teal-200"
          onClick={() => {
            document
              .getElementById("body2")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      <div
        id="body2"
        className="flex flex-col justify-center items-center min-h-screen text-teal-300 py-10"
      >
        <div className="text-3xl text-white font-bold">Kaspa-DB</div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4 xl:w-1/2">
          Kaspa-DB, initially crafted for the Kaspa Explorer, is a PostgreSQL
          database that stores all block and transaction data. If you need to
          securely store this type of data or wish to generate relevant
          statistics, Kaspa-DB provides a beneficial and dependable solution. It
          ensures the information you need is always at your fingertips.
        </div>
        <div className="text-3xl text-white font-bold mt-[4rem]">
          Kaspa-DB Filler
        </div>
        <div className="text-white px-3 md:px-12 py-4 md:w-3/4 xl:w-1/2">
          The Kaspa-DB Filler is a Python tool that populates the Kaspa-DB. It
          communicates directly with the Kaspa node, retrieves block, and
          transaction data, and uploads this information into the database. In
          addition to this, the tool also monitors any reorganizations within
          the network and validates transaction acceptance information. This
          ensures that your database stays accurate and up-to-date.
        </div>

        <BsArrowDownCircle
          className="text-[4rem] mt-10 hover:cursor-pointer hover:text-teal-200"
          onClick={() => {
            document
              .getElementById("bodyDl")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      <div
        id="bodyDl"
        className="flex flex-col justify-center items-center min-h-screen text-teal-300"
      >
        <div className="text-5xl font-bold p-8 max-w-3xl text-teal-200">
          Choose a docker-compose file
        </div>
        <div className="text-xl p-4 text-white">
          Download the docker-compose file which fits with your application.
        </div>
        <div className="flex flex-row flex-wrap items-top">
          <Card
            fileName="kaspa-minimum.yaml"
            cardName="minimum"
            description="This is the minimum version which contains the Kaspa node only - ready to start."
          />

          <Card
            fileName="kaspa-lite.yaml"
            cardName="lite"
            description="This is the lite version which provides a REST-API server with the most important endpoints for the communication with the Kaspa node."
          />

          <Card
            fileName="kaspa-full.yaml"
            cardName="full"
            description="The full version is a docker compose file, which contains a REST-API server and a PostgreSQL DB for storing the blocks and transactions. The Kaspa-DB Filler adds blocks and transactions in real time into the database."
          />
        </div>

        <div></div>
      </div>
    </div>
  );
}
