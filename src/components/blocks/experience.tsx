import React from "react";

import { Section } from "@/components/ui";
import ExperienceItem from "@/components/experience-item";

import { IExperienceItem } from "@/lib/types";

const experiences = [
  {
    id: 0,
    title: "Sr. Front-End Developer",
    company: "PQS Global Software",
    time: "January 2021 - Now",
    location: "İzmir",
    type: "Full-time",
    description: [
      "Web sitesi geliştirme, web siteleri ve web uygulamaları oluşturma, programlama, kodlama ve sürdürme sürecidir.",
    ],
    tags: ["HTML", "CSS", "Javascript", "React", "Vue JS"],
  },
  {
    id: 1,
    title: "Sr. Front-End Developer",
    company: "Egegen",
    time: "October 2018 - December 2020",
    location: "İzmir",
    type: "Full-time",
    description: [
      "Kurumsal, e-ticaret ve özel web projelerinin front-end kodlamasını geliştirdim.",
      "Outlook imza, e-posta gönderimi için şablon tasarımlarını kodladım.",
      "Front-end kodlamalarını, müşteriler için PHP dilinde geliştirilen CMS'e entegre ettim.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP"],
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Fikir 360",
    time: "October 2014 - March 2016",
    location: "İzmir",
    type: "Full-time",
    description: [
      "HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil uyumlu web siteleri ve özel projeler geliştirdim.",
      "Web siteleri için basit PHP ve MySQL ve HTML5 tabanlı yönetim panelleri geliştirdim.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
  },
  {
    id: 3,
    title: "Front-End Developer",
    company: "Sesnet Medya",
    time: "Jebruary 2014 - January 2016",
    location: "İzmir",
    type: "Full-time",
    description: [
      "HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil ve tarayıcı (IE 7-10) uyumlu web siteleri geliştirdim.",
      "E-posta haber bültenlerini kodluyordum.",
      "Özel proje olarak javascript simülasyon ve javascript projelerinde yer aldım.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
  },
  {
    id: 4,
    title: "Front-End Developer",
    company: "Veriyaz",
    time: "December 2009 - February 2013",
    location: "İzmir",
    type: "Full-time",
    description: [
      "HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil ve tarayıcı (IE 7-10) uyumlu web siteleri geliştirdim.",
      "E-posta haber bültenlerini kodluyordum.",
      "Özel proje olarak javascript simülasyon ve javascript projelerinde yer aldım.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
  },
];

export default function Experience() {
  return (
    <Section title="Work Experience">
      <div className="grid grid-cols-1 gap-4">
        {experiences.map((experience: IExperienceItem, i: number) => (
          <ExperienceItem key={i} data={experience} />
        ))}
      </div>
    </Section>
  );
}
