import CTA from "@/components/Cta";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import UseCases from "@/components/UseCases";
import ProcessSteps from "@/components/ProcessSteps";

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <UseCases />
            <Features />
            <ProcessSteps />
            <Testimonials />
            <CTA />
        </>
    );
}
