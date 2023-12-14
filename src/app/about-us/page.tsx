import React from "react";
import About from "../components/About";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "Al Fatah Quran Academy | About us",
  description:
    "Discover excellence in Quranic education at Al Fatah Quran Academy. Our comprehensive programs, taught by experienced instructors, foster deep understanding and connection with the Holy Quran. Join us to embark on a transformative journey in learning and embracing the teachings of the Quran",
};
const Page = (props: Props) => {
  return (
    <>
      <About />
    </>
  );
};

export default Page;
