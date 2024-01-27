import { PROYEK } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Proyek = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-white">
      <div
        className="flex-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20"
        style={{ textAlign: "center", margin: "0 auto" }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Proyek
        </div>
      </div>
      <ul className="mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto">
        {PROYEK.map((proyek) => (
          <ProyekItem
            key={proyek.title}
            imgURL={proyek.ImgURL}
            title={proyek.title}
            description={proyek.description}
          />
        ))}
      </ul>
    </section>
  );
};

type ProyekItem = {
  title: string;
  imgURL: string;
  description: string;
};

const ProyekItem = ({ title, imgURL, description }: ProyekItem) => {
  return (
    <li className="relative flex flex-col w-full rounded-2xl border overflow-hidden group justify-center items-center">
      <div className="group-hover:scale-110 transition-all duration-1000">
        <Image src={imgURL} alt="map" width={444} height={444} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <h3 className="bold-18 lg:bold-20 my-4 capitalize">{title}</h3>
        <p className="reguler-16 text-gray-30 mb-4">{description}</p>
        <div className="flex gap-1">
          <Button
            type="button"
            title="Lihat Selengkapnya"
            icon="/more.svg"
            variant="btn_dark_rounded"
          />
        </div>
      </div>
    </li>
  );
};

export default Proyek;
