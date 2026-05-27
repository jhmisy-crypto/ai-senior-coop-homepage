import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import ProgramCards from "../components/home/ProgramCards";
import NoticePreview from "../components/home/NoticePreview";
import GallerySection from "../components/home/GallerySection";
import ResourcePreview from "../components/home/ResourcePreview";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProgramCards />
      <NoticePreview />
      <GallerySection />
      <ResourcePreview />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;