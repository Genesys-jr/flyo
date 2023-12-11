//import Features from "./components/Features";
import Link from "next/link";
import Image from "next/image";
import Intro from "./components/Intro";
import { Navbar } from "./components/Navbar";

import Features from "./components/Features";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-blue-950 min-h-screen mx-auto ">
      <Navbar />
      <Intro />
      <Features />
      <Productive />
      <Testimonials />
      <Footer />
    </main>
  );
}
