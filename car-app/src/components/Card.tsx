import { Car } from "@/app/types";
import Image from "next/image";
import gas from "../../public/icon/gas-2.svg";
import mile from "../../public/icon/mile.svg";
import transmission from "../../public/icon/transmission.svg";
import arrow from "../../public/icon/arr.svg";
import { useRouter } from "next/navigation";

type Props = {
  car: Car;
};

const Card = ({ car }: Props) => {
  const arr = [
    {
      icon: gas,
      name: car.fuelType,
    },
    {
      icon: mile,
      name: car.mileage,
    },
    {
      icon: transmission,
      name: car.transmission,
    },
  ];

  const router = useRouter();

  return (
    <div className="border shadow rounded hover:shadow-lg">
      <div className="relative h-[250px] ">
        <Image fill src={car.imageUrl} alt={car.make} unoptimized className="object-contain" />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold">
          {car.make} {car.model}
        </h2>
        <hr className="border-[#E9E9E9] border-2 my-5" />
        <div className="flex justify-between">
          {arr.map((item, key) => (
            <div className=" flex flex-col gap-2 items-center">
              <Image src={item.icon} key={key} alt="icon" />
              <p className="text-lg">{item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-[#E9E9E9] border-2 my-5" />
        <div className="flex justify-between text-2xl">
          <p className="font-semibold">${car.price}</p>
          <button
            onClick={() => router.push(`/car/${car._id}`)}
            className="text-blue-500 text-2xl sm:text-xl flex items-center gap-2 hover:text-blue-600 transition"
          >
            Detay
            <Image src={arrow} alt={""} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
