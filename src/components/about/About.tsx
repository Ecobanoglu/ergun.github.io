import { Card, Section } from "@/components/ui";

import Link from "next/link";

export default function About() {
  return (
    <Section title="Beni Tanıyın" className="bg-white dark:bg-slate-950">
      <div className="grid lg:grid-cols-3 gap-6 items-center lg:gap-16">
        <div className="lg:col-span-2 text-xl">
          <h2 className=" mb-8 lg:mb-8 block ">
            Selam. Ben{" "}
            <span className="font-bold border-primary-600 border-b-4 py-2">
              Ergün Çobanoğlu
            </span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-8 lg:grid-flow-col gap-6 py-8 lg:py-0">
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
      </div>
    </Section>
  );
}
