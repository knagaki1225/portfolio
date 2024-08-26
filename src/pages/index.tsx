import { Inter } from "next/font/google";
import Header from "@/components/header";
import Top from "@/components/top";
import About from "@/components/about";
import Profile from "@/components/profile";
import Work from "@/components/work";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Top />
      <About />
      <Profile />
      <Work />
      <Footer />
    </div>
  );
}
