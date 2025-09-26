import CTA from "@/components/Cta";
import Features from "@/components/Features";
// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
// import Image from "next/image";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <Features />
            <Testimonials />
            <CTA />
        </>
    );
}
