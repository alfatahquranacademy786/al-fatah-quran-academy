import React from "react";
import { Metadata } from "next";
import ServicePage from "../components/service";
import FAQ from "../components/FAQ";

type Props = {};
export const metadata: Metadata = {
  title: "Al Fatah Quran Academy | Services",
  description:
    "Discover comprehensive Quranic education at Al Fatah Quran Academy. Explore our range of services, including Tajweed, Tafseer, and Quran memorization. Join us to delve deeper into the teachings of the Holy Quran with our expert instructors",
};
const Page = (props: Props) => {
  return (
    <>
      <ServicePage />
      <FAQ />
    </>
  );
};

export default Page;
