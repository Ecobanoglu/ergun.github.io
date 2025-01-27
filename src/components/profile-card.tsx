import React from "react";

import { Social, Logo } from "@/components";
import { Button, Card, Box } from "./ui";

export default function ProfileCard() {
  return (
    <div className="sticky top-0">
      <Card className="text-center">
        {/*
        <div className="text-center max-w-32 mx-auto relative -mt-[81px]">
          <Logo className="w-32 h-32 mx-auto" />
        </div>
        */}
        <h1 className="text-3xl font-bold text-black dark:text-white mb-3 lg:mb-4">
          <a href="/">Ergün Çobanoğlu</a>
        </h1>
        <h2 className="text-lg font-semibold bg-gray-100 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 py-2 px-3 leading-none inline-block rounded-lg mb-3 lg:mb-4">
          Sn. Front-end Developer
        </h2>

        <Social />

        <Box className="text-left divide-y mb-4 lg:mb-6 divide-gray-300/60 dark:divide-gray-600">
          <div className="py-3">
            <h5 className="text-sm">E-posta</h5>
            <a
              className="underline font-medium dark:text-gray-300"
              target="_blank"
              href="mailto:ecobanoglu@protonmail.com"
            >
              ecobanoglu@protonmail.com
            </a>
          </div>
          <div className="py-3">
            <h5 className="text-sm">Yaşadığım yer</h5>
            <p className="font-medium dark:text-gray-300">İzmir, Türkiye</p>
          </div>
          <div className="py-3">
            <h5 className="text-sm">Diller</h5>
            <p className="font-medium dark:text-gray-300">
              Türkçe, İnglizce(Orta seviye)
            </p>
          </div>
          <div className="py-3">
            <h5 className="text-sm">Serbest Çalışmaya</h5>
            <p className="font-medium dark:text-gray-300">Uygun</p>
          </div>
        </Box>

        <Button className="mb-3 lg:mb-0">Özgeçmiş Görüntüle</Button>
      </Card>
    </div>
  );
}
