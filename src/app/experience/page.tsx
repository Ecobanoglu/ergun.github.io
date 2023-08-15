import Link from "next/link";

import { Experience } from "@/components/sections";

export default function Page() {
  const experiences = [
    {
      id: 0,
      title: "Sr. Front-End Developer",
      company: "PQS Global Software",
      time: "2022 - Şimdi",
      image: "/img/logo/pqs.png",
      description:
        "Web sitesi geliştirme, web siteleri ve web uygulamaları oluşturma, programlama, kodlama ve sürdürme sürecidir.",
      tags: ["HTML", "CSS", "Javascript", "React", "Vue JS"],
    },
    {
      id: 1,
      title: "Sr. Front-End Developer",
      company: "Egegen",
      time: "2018 - 2020",
      image: "/img/logo/egegen.png",
      description:
        "Kurumsal, e-ticaret ve özel web projelerinin front-end kodlamasını geliştirdim. Outlook imza, e-posta gönderimi için şablon tasarımlarını kodladım. Ayrıca, front-end kodlamaları müşteriler için PHP dilinde geliştirilen CMS'e entegre ettim.",
      tags: ["HTML", "CSS", "Javascript", "PHP"],
    },
    {
      id: 2,
      title: "Sr. Front-End Developer",
      company: "Egegen",
      time: "2017 - 2018",
      image: "/img/logo/varien.png",
      description:
        "Web sitesi geliştirme, web siteleri ve web uygulamaları oluşturma, programlama, kodlama ve sürdürme sürecidir.",
      tags: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 3,
      title: "Front-End Developer",
      company: "Fikir 360",
      time: "2014 - 2016",
      image: "/img/logo/fikir-360.png",
      description:
        "HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil uyumlu web siteleri ve özel projeler geliştirdim. Ayrıca web siteleri için basit PHP ve MySQL ve HTML5 tabanlı yönetim panelleri geliştirdim.",
      tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
    },
    {
      id: 3,
      title: "Front-End Developer",
      company: "Sesnet Medya",
      time: "2014 - 2016",
      image: "",
      description:
        "HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil ve tarayıcı (IE 7-10) uyumlu web siteleri geliştirdim. E-posta haber bültenlerini kodluyordum. Ayrıca özel proje olarak javascript simülasyon ve javascript projelerinde yer aldım.",
      tags: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
    },
  ];
  return <Experience data={experiences} title="Deneyim" />;
}
