import { Header } from "@/src/features/Header";
import { Description, Landing, MainProducts } from "@/src/home";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Landing />
      <Description />
      <MainProducts />
    </div>
  );
}
