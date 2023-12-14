import React from "react";
import Pricing from "../components/Pricing";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "Al Fatah Quran Academy | Plan & Pricing",
  description:
    "Discover the Best Plans & Pricing at Al Fatah Quran Academy - Unveiling Our Comprehensive Packages! ",
};

const Page = (props: Props) => {
  return (
    <>
      <Pricing />
    </>
  );
};

export default Page;
