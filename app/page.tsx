import Hero from "@/components/Hero"
import Kontak from "@/components/Kontak"
import Proyek from "@/components/Proyek"
import Tentang from "@/components/Tentang"
import Tim from "@/components/Tim"
import React from "react"

const page = () => {
  return (
    <main>
      <>
        <Hero/>
        <Tentang/>
        <Tim/>
        <Proyek/>
        <Kontak/>
      </>
    </main>
  );
};

export default page;
