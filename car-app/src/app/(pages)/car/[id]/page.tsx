import { Car } from "@/app/types";
import Container from "@/components/Container";
import Header from "@/components/Header";
import BreadCrumb from "../BreadCrumb";
import Title from "./Title";
import Images from "./Images";
import Overview from "./Overview";
import OrderBox from "./OrderBox";

type Props = {
  params: { id: string };
};

type Restype = {
  message: string;
  vehicle: Car;
};

const getDetail = async (id: string): Promise<Restype> => {
  const res = await fetch(`http://localhost:3000/api/vehicles/${id}`);
  return res.json();
};

const page = async ({ params }: Props) => {
  const data = await getDetail(params.id);
  return (
    <div>
      <Header designs="bg-black text-white" />
      <Container designs="mt-5">
        <BreadCrumb car={data.vehicle} />
        <Title car={data.vehicle} />
        <Images url={data.vehicle.imageUrl} />
        <div className="grid xl:grid-cols-5 gap-x-10 my-10">
          <div className="xl:col-span-3">
            <Overview car={data.vehicle} />
          </div>

          <OrderBox car={data.vehicle} />
        </div>
      </Container>
    </div>
  );
};

export default page;
