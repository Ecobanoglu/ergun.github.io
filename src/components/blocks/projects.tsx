import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, Box, Tag } from "@/components/ui";

import { IProject } from "@/lib/types";

export default function Projects() {
  const projects = [
    {
      title: "React Dnd Form",
      image: "/img/project/react-dnd-1.jpg",
      description:
        "Bu proje anket projelerinde kullanılmak üzere DND ve React Hook form ile yapılan bir React projesidir. Sorulara yeni bir cevap ekleyebilirsiniz ve cevapların sırlamasını değiştirebilirsiniz. İşleminiz bittikten sonra alt kısmındaki sonuç bölümünde değişiklikleri görebilirsiniz.",
      links: {
        source: "https://github.com/ecobanoglu/react-form-dnd",
        live: "https://react-form-dnd.vercel.app/",
      },
      tags: [
        "react",
        "typescript",
        "tailwindcss",
        "react-hook-form",
        "react-beautiful-dnd",
        "zod",
      ],
    },
    {
      title: "Next Auth",
      image: "",
      description:
        "Next-Auth ile basit bir şekilde kimlik doğrulama ve yetkilendirmesi yapan Next.js projesidir. Bu projede kullanıcı rolüne göre kimlik doğrulaması yapılmaktadır.",
      links: {
        source:
          "https://github.com/ecobanoglu/next-example/tree/main/with-nextauth",
        live: "",
      },
      tags: [
        "next",
        "typescript",
        "tailwindcss",
        "next-auth",
        "nextjs-example",
      ],
    },
    {
      title: "React Todo",
      image: "/img/project/react-todo.png",
      description:
        "Bir TODO uygulaması, yeni başlayanların yeni bir programlama dili veya çerçevesinin temellerini hızlı bir şekilde kavramaları için ideal bir proje görevi görür.",
      links: {
        source: "https://github.com/ecobanoglu/react-todo",
        live: "",
      },
      tags: ["react", "typescript", "tailwindcss"],
    },
    {
      title: "EcmaScript (ES6) Dersleri",
      image: "",
      description: "ES6'yı öğrenmek için deneyimlediğim kod parçacıkları.",
      links: {
        source: "https://github.com/ecobanoglu/es6/tree/ec-es6",
        live: "",
      },
      tags: ["ecmascript 6"],
    },
  ];
  return (
    <Card title="Projeler">
      <div className="grid grid-cols-1 gap-3 lg:gap-6">
        {projects.map(
          ({ title, image, description, links, tags }: IProject, k: number) => (
            <Box key={k}>
              <div
                className={`grid grid-cols-1 ${
                  image ? "md:grid-cols-4 gap-4" : ""
                }`}
              >
                {image && (
                  <figure className="hidden md:flex items-center justify-center md:col-span-1 border bg-white  dark:border-gray-700 rounded-lg">
                    <Image
                      src={image}
                      alt={title}
                      className="w-full"
                      width={640}
                      height={480}
                    />
                  </figure>
                )}
                <div className={`${image ? "md:col-span-3" : ""}`}>
                  <div className="flex flex-wrap items-center justify-between space-x-3 mb-2">
                    <h4 className="font-bold dark:text-gray-300">{title}</h4>
                    <ul className="flex flex-wrap space-x-3">
                      {links.source && (
                        <li>
                          <Link
                            href={links.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-all duration-300 transform hover:scale-125"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                          </Link>
                        </li>
                      )}
                      {links.live && (
                        <li>
                          <Link
                            href={links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-all duration-300 transform hover:scale-125"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  {image && (
                    <figure className="mb-4 md:col-span-1 md:hidden">
                      <Image
                        src={image}
                        alt={title}
                        className="w-full border h-full object-cover"
                        width={640}
                        height={480}
                      />
                    </figure>
                  )}
                  <p className="mb-3">{description}</p>
                  {tags && (
                    <ul className="flex flex-wrap gap-2">
                      {tags.map((tagItem: string, k: number) => (
                        <li key={k}>
                          <Tag>{tagItem}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Box>
          )
        )}
      </div>
    </Card>
  );
}
