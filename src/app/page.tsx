"use client";
import { CardDemo } from "@/components/Card";
import { CardRight } from "@/components/CardRight";
import Chart from "@/components/Chart";
import Notify from "@/components/Notify";
import { SkeletonCard } from "@/components/Skeleton";
import { SliderDemo } from "@/components/Slider";
import Image from "next/image";
import Picture from "@/image/bus.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="flex my-4 justify-between md:flex-row flex-col">
        <motion.div
          className="w-full"
          initial={{ y: -400, opacity: 0 }}
          animate={{
            y: 0,
            transition: {
              duration: 2,
              delay: 1,
              type: "spring",
              stiffness: 500,
            },
            opacity: 1,
          }}
        >
          <Image
            src={Picture}
            alt="bus"
            width={100}
            height={100}
            className="w-full md:w-[50%] m-auto"
          />
        </motion.div>
        <div className="w-full">
          <CardRight />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SliderDemo />
        <SliderDemo />
        <SliderDemo />

        <Chart />
        <Chart />
        <Chart />
        <Notify />
      </div>
    </div>
  );
}
