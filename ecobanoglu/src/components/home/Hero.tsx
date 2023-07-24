import Image from "next/image";

import { Link } from "../ui";

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen pt-28 pb-12 bg-white dark:bg-slate-950">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center justify-center text-center md:text-left">
          <div className="order-2 md:order-1">
            <h3 className=" text-2xl lg:text-4xl block  uppercase mb-4">
              Selam, Ben Ergün Ç.
            </h3>
            <h1 className=" font-black text-4xl lg:text-8xl/small block  mb-4 uppercase">
              Front-End Developer
            </h1>

            <p className="text-lg">
              10 yıldan fazla deneyime sahip, İzmir'de yaşayan bir front-end
              developer'im.
            </p>
            <div className="flex justify-start flex-col md:flex-row mt-6 mt-md-10">
              <div className="p-3">
                <Link
                  href="calismalar"
                  variant="button"
                  className="w-full md:w-auto"
                >
                  Çalışmalarım
                </Link>
              </div>
              <div className="p-3">
                <Link
                  href="iletisim"
                  variant="outline"
                  className="w-full md:w-auto"
                >
                  Bana Ulaşın
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 md:text-right">
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
        </div>
      </div>
    </div>
  );
}
