"use client";
import Header from "./components/Header";
import Services from "./components/Services";
import Register from "./components/register";
import SignupForm from "./components/sign-up";
export default function Home() {
  return (
    <main>
      {/* <SignupForm /> */}
      <Header />
      <Register />
      <Services />
    </main>
  );
}
