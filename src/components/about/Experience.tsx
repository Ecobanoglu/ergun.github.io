import { Card, Section } from "@/components/ui";

import Link from "next/link";

export default function Experience() {
  return (
    <Section title="Deneyim" className="bg-gray-100 dark:bg-gray-900">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
        <Card
          variant="experience"
          title="Sr. Front-End Developer"
          description="Web sitesi geliştirme, web siteleri ve web uygulamaları oluşturma, programlama, kodlama ve sürdürme sürecidir."
          company="PQS Global Software"
          time="2020 - Şimdi"
        />
        <Card
          variant="experience"
          title="Sr. Front-End Developer"
          description="Kurumsal, e-ticaret ve özel web projelerinin front-end kodlamasını geliştirdim. Outlook imza, e-posta gönderimi için şablon tasarımlarını kodladım."
          company="Egegen"
          time="2018 - 2020"
        />
        <Card
          variant="experience"
          title="Sr. Front-End Developer"
          description="Web sitesi geliştirme, web siteleri ve web uygulamaları oluşturma, programlama, kodlama ve sürdürme sürecidir."
          company="Varien Digital"
          time="2017 - 2018"
        />
        <Card
          variant="experience"
          title="Front-End Developer"
          description="HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil uyumlu web siteleri ve özel projeler geliştirdim. Ayrıca web siteleri için basit PHP ve MySQL ve HTML5 tabanlı yönetim panelleri geliştirdim."
          company="Fikir 360"
          time="2014 - 2016"
        />
        <Card
          variant="experience"
          title="Front-End Developer"
          description="HTML5, CSS3, Javascript ve Javascript çerçeveleri ile mobil ve tarayıcı (IE 7-10) uyumlu web siteleri geliştirdim. E-posta haber bültenlerini kodluyordum. Ayrıca özel proje olarak javascript simülasyon ve javascript projelerinde yer aldım."
          company="Sesnet Medya"
          time="2013 - 2014"
        />
        <Card
          variant="experience"
          title="Web Developer"
          description="HTML, CSS ve Javascript ile CMS arayüz şablonu hazırladım. E-posta şablonları oluşturdum. Birebir ya da dolaylı olarak müşterilere teknik destek sağladım. Ekibe yeni katılan arkadaşlara teknik eğitim verdim."
          company="Veriyaz"
          time="2009 - 2013"
        />
      </div>
    </Section>
  );
}
