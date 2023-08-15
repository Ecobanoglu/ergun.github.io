import { Card, Section } from "@/components/ui";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <Section
      title="Beni Tanıyın"
      className="bg-primary-50 dark:bg-gray-900"
      data-wheel
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center">
        <div className="lg:col-span-3 text-xl order-2 md:order-1">
          <h2 className=" mb-8 lg:mb-8 block ">
            Selam. Ben{" "}
            <span className="font-bold text-primary-500">Ergün Çobanoğlu</span>.
          </h2>
          <div className="mb-6 lg:mb-16">
            <p className="mb-4">
              Selamlar! Benim adım{" "}
              <span className="font-bold inline-block"> Ergün Çobanoğlu</span>.
              Ben bir web geliştiricisiyim ve çok tutkuluyum ve kendimi işime
              adadım.
            </p>
            <p>
              Profesyonel bir{" "}
              <span className="font-bold">front-end developer</span> olarak 10
              yıllık tecrübemle, projenizi başarıya ulaştırmak için gerekli
              bilgi ve becerileri edindim. Müşterinin gereksinimlerini
              karşılayan işi zaman ve bütçe içinde teslim etmek benim mottomdur.
            </p>
          </div>
          <ul className="list-none grid grid-cols-2 lg:grid-cols-3 gap-6 ">
            <li className="relative ps-6 after:content-['▹'] after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:text-2xl after:text-primary-500 ">
              HTML5
            </li>
            <li className="relative ps-6 after:content-['▹'] after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:text-2xl after:text-primary-500 ">
              CSS / SCSS
            </li>
            <li className="relative ps-6 after:content-['▹'] after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:text-2xl after:text-primary-500 ">
              Javascript
            </li>
            <li className="relative ps-6 after:content-['▹'] after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:text-2xl after:text-primary-500 ">
              React
            </li>
            <li className="relative ps-6 after:content-['▹'] after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:text-2xl after:text-primary-500 ">
              Next JS
            </li>
            <li className="relative ps-6 after:content-['▹'] after:absolute after:left-0 after:top-2/4 after:-translate-y-2/4 after:text-2xl after:text-primary-500 ">
              Typescript
            </li>
          </ul>
          <div className="grid md:grid-cols-2 lg:grid-cols-8 lg:grid-flow-col gap-6 py-8 lg:py-0 hidden">
            <div className="lg:col-span-2">
              <label className="mb-2 block">Ad Soyad:</label>
              <div className="font-bold">Ergün Çobanoğlu</div>
            </div>
            <div className="lg:col-span-3">
              <label className="mb-2 block">E-posta:</label>
              <Link
                href="mailto:ecobanoglu@protonmail.com"
                className="font-bold underline"
              >
                ecobanoglu@protonmail.com
              </Link>
            </div>
            <div className="lg:col-span-2">
              <label className="mb-2 block">Lokasyon:</label>
              <div className="font-bold">İzmir, Türkiye</div>
            </div>
            <div className="lg:col-span-2">
              <label className="mb-2 block">Yaş:</label>
              <div className="font-bold">33</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 md:order-2 md:text-right">
          <div className="rounded-full inline-block p-3 lg:p-4 bg-gray-300/50 shadow-2xl max-w-[70%]">
            <Image
              width="450"
              height="450"
              priority={true}
              className="rounded-full"
              src="/img/about/picture.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Ergün"
            />
          </div>
        </div>
        {/**
        <div>
          
          <div className="grid grid-rows-3 gap-4 lg:gap-8">
            <div className="flex">
              <Card
                variant="about"
                title="10+"
                description="Yıl deneyimi"
                color="green"
              />
            </div>
            <div className="flex">
              <Card
                variant="about"
                title="200+"
                description="Tamamlanan Proje"
                color="blue"
              />
            </div>
            <div className="flex">
              <Card
                variant="about"
                title="100K+"
                description="Kod Satırı"
                color="primary"
              />
            </div>
          </div>
        </div>
        */}
      </div>
    </Section>
  );
}
