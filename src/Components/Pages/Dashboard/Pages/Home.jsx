import React from "react";
import { useTranslation } from "react-i18next";
import DetailCard from "../Comps/Cards/DetailCard";
import { Eye, Profile2User, Shop, UserTick } from "iconsax-react";

export default function Home() {
  const lang = localStorage.getItem('language')
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1 className="text-2xl font-Dana-Demi">
        {t("dashboard.pages.home.title")}
      </h1>
      <section className="mt-[27px] grid items-center gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <DetailCard
          icon={<Profile2User variant="Bold" className="w-14 h-8" />}
          color={"text-rose-500 bg-rose-500"}
          title={t("dashboard.pages.home.details.totalUsers.title")}
          value={t("dashboard.pages.home.details.totalUsers.count")}
          timeline={t("dashboard.pages.home.details.totalUsers.timeline")}
          cap={lang === "persian" ? " کاربر" : " Users"}
        />
        <DetailCard
          icon={<UserTick variant="Bulk" className="w-14 h-8" />}
          color={"text-green-600 bg-green-500"}
          title={t("dashboard.pages.home.details.totalActiveUsers.title")}
          value={t("dashboard.pages.home.details.totalActiveUsers.count")}
          timeline={t("dashboard.pages.home.details.totalActiveUsers.timeline")}
          cap={lang === "persian" ? " کاربر فعال" : " Active users"}
        />
        <DetailCard
          icon={<Shop variant="Bulk" className="w-14 h-8" />}
          color={"text-sky-500 bg-sky-600"}
          title={t("dashboard.pages.home.details.totalSales.title")}
          value={t("dashboard.pages.home.details.totalSales.count")}
          timeline={t("dashboard.pages.home.details.totalSales.timeline")}
          cap={lang === "persian" ? " تومان" : " Tomans"}
        />
        <DetailCard
          icon={<Eye variant="Bold" className="w-14 h-8" />}
          color={"text-orange-500 bg-orange-500"}
          title={t("dashboard.pages.home.details.totalViews.title")}
          value={t("dashboard.pages.home.details.totalViews.count")}
          timeline={t("dashboard.pages.home.details.totalViews.timeline")}
          cap={lang === "persian" ? " بازدید" : " Views"}
        />
      </section>
    </>
  );
}
