import React from "react";

import { Social } from "@/components/common";
import { Button } from "../ui";

export default function ProfileCard() {
  return (
    <div className="sticky top-0 bg-white p-3 lg:p-4 xl:p-6 rounded-2xl text-center">
      <div className="">
        <div className="text-center max-w-32 mx-auto relative -mt-[74px]">
          <img src="/img/logo.svg" alt="" />
        </div>
        <h1 className="text-3xl font-bold text-black dark:text-white mb-3">
          <a href="/">Ergün Çobanoğlu</a>
        </h1>
        <h2 className="text-lg font-semibold bg-gray-100 py-2 px-3 leading-none inline-block rounded-lg mb-3">
          Front-end Developer
        </h2>

        <Social />

        <div className="p-3 lg:p-4 bg-gray-100 text-left rounded-lg divide-y mb-4">
          <div className="py-2">
            <h5 className="text-sm">Email</h5>
            <a
              className="underline font-medium"
              target="_blank"
              href="mailto:ecobanoglu@protonmail.com"
            >
              ecobanoglu@protonmail.com
            </a>
          </div>
          <div className="py-2">
            <h5 className="text-sm">Location</h5>
            <p className="font-medium">İzmir, Turkey</p>
          </div>
          <div className="py-2">
            <h5 className="text-sm">Languages</h5>
            <p className="font-medium">Turkish, English(Intermediate)</p>
          </div>
          <div className="py-2">
            <h5 className="text-sm">Freelancer</h5>
            <p className="font-medium">Avaliable</p>
          </div>
        </div>

        <Button>Download CV</Button>
      </div>
    </div>
  );
}
