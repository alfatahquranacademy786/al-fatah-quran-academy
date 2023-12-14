import React from "react";
import Registration from "../components/Registration";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "Al Fatah Quran Academy | Register",
  description:
    "Discover seamless registration at Al Fatah Quran Academy! Join our esteemed institution and enroll effortlessly to embark on a transformative journey of Quranic learning. Register now for an immersive educational experience",
};

const Page = (props: Props) => {
  return (
    <>
      <Registration />
    </>
  );
};

export default Page;
