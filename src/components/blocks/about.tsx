import React from "react";

import { Card } from "@/components/ui";

export default function About() {
  return (
    <Card>
      <p className="mb-3">
        Merhaba! Adım{" "}
        <span className="font-semibold dark:text-gray-300">
          Ergun Çobanoğlu
        </span>
        . Front-end geliştirici konusunda deneyimliyim ve işime çok tutkulu ve
        bağlıyım.
      </p>
      <p>
        Profesyonel bir{" "}
        <span className="font-semibold dark:text-gray-300">
          Front-End Developer
        </span>{" "}
        olarak 10 yıllık deneyimimle, projenizi başarıya ulaştırmak için gerekli
        bilgi ve becerileri edindim. Şu anda, becerilerimi daha da geliştirmek
        ve teknoloji endüstrisindeki yenilikçi projelere katkıda bulunmak için
        fırsatlar arıyorum.
      </p>
    </Card>
  );
}
