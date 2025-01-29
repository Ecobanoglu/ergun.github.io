import React from "react";

import { Card } from "@/components/ui";
import ExperienceItem from "@/components/experience-item";

import { IExperienceItem } from "@/lib/types";

const experiences = [
  {
    id: 0,
    title: "Sn. Front-End Developer",
    company: "PQS Global Software",
    time: "Ocak 2021 - Şimdi",
    location: "İzmir",
    type: "Tam zamanlı",
    description: [
      "Web sitesi geliştirme, web siteleri ve web uygulamaları oluşturma, programlama, kodlama ve sürdürme sürecidir.",
    ],
    tags: ["HTML", "CSS", "Javascript", "React", "Vue JS"],
  },
  {
    id: 1,
    title: "Sn. Front-End Developer",
    company: "Egegen",
    time: "Ekim 2018 - Aralık 2020",
    location: "İzmir",
    type: "Tam zamanlı",
    description: [
      "Kurumsal, e-ticaret ve özel web projelerinin front-end kodlamasını geliştirdim.",
      "Outlook imza, e-posta gönderimi için şablon tasarımlarını kodladım.",
      "Front-end kodlamalarını, müşteriler için PHP dilinde geliştirilen CMS'e entegre ettim.",
      "Ekibe yeni katılan arkadaşlara teknik destek sağladım.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP"],
  },
  {
    id: 2,
    title: "Sn. Front-End Developer",
    company: "Varien Digital",
    time: "Temmuz 2017 - Eylül 2018",
    location: "İzmir",
    type: "Tam zamanlı",
    description: [
      "HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil uyumlu web siteleri ve özel projeler geliştirdim.",
      "Web siteleri için basit PHP ve MySQL ve HTML5 tabanlı yönetim panelleri geliştirdim.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "Fikir 360",
    time: "Ekim 2014 - Mart 2016",
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
    time: "Şubat 2014 - Ocak 2016",
    location: "İzmir",
    type: "Tam zamanlı",
    description: [
      "HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil ve tarayıcı (IE 7-10) uyumlu web siteleri geliştirdim.",
      "E-posta haber bültenlerini kodladım.",
      "Özel proje olarak javascript simülasyon ve javascript projelerinde yer aldım.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
  },
  {
    id: 4,
    title: "Front-End Developer",
    company: "Veriyaz",
    time: "Aralık 2009 - Şubat 2013",
    location: "İzmir",
    type: "Tam zamanlı",
    description: [
      "HTML, CSS, Javascript çerçeveleri ile web siteleri geliştirdim.",
      "Web projeleri için şablonlar oluşturdum.",
      "Outlook imza, e-posta gönderimi için şablon tasarımları kodladım.",
      "Ekibe yeni katılan arkadaşlara teknik destek sağladım.",
      "Müşterilere teknik destek sağladım.",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
  },
];

export default function Experience() {
  return (
    <Card title="Çalışma Deneyimi">
      <div className="grid grid-cols-1 gap-3 lg:gap-6">
        {experiences.map((experience: IExperienceItem, i: number) => (
          <ExperienceItem key={i} data={experience} />
        ))}
      </div>
    </Card>
  );
}
