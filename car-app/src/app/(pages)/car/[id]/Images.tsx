import Image from "next/image";
import React from "react";
import Car1 from "../../../../../public/icon/car1.png";
import Car2 from "../../../../../public/icon/car2.png";
import Car3 from "../../../../../public/icon/car3.png";
import Car4 from "../../../../../public/icon/car4.png";

const Images = ({ url }: { url: string }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative max-md:h-[300px]">
        <Image className="object-contain" fill src={url} alt="vehicle" unoptimized />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Image className="rounded-md" width={200} height={200} src={Car1} alt="car" />
        <Image className="rounded-md" width={200} height={200} src={Car2} alt="car" />
        <Image className="rounded-md" width={200} height={200} src={Car3} alt="car" />
        <Image className="rounded-md" width={200} height={200} src={Car4} alt="car" />
      </div>
    </div>
  );
};

export default Images;
