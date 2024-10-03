import { Header } from "@/src/features/Header";
import { Footer } from "@/src/features/Footer";
import { Description, Landing, MainProducts, Notice } from "@/src/home";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Landing />
      <section id="presentation">
        <Description />
      </section>
      <section id="main-products">
        <MainProducts />
      </section>
      <section id="notice">
        <Notice />
      </section>
      <Footer />
    </div>
  );
}
