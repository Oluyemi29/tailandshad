import { CardDemo } from "@/components/Card";
import Chart from "@/components/Chart";
import Notify from "@/components/Notify";
import { SkeletonCard } from "@/components/Skeleton";
import { SliderDemo } from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
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
