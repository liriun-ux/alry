import Header from "@/components/header";
import Section from "@/components/Section";
import Hero from "./hero";
import ResYoutube from "./resume/youtube";
import ResTiktok from "./resume/tiktok";
import ResFacebook from "./resume/facebook";
import ResGoogle from "./resume/google";
import ResAgentIa from "./resume/agent-ia";
import ResSiteWeb from "./resume/site-web";
import NavBase from "@/components/nav-base";

export default function Home() {
  return (
    <>
    <Header/>
      <main className="PageIncio">
        <Section id="hero">
          <Hero/>
        </Section>

        <Section id="resumen-youtube">
          <ResYoutube/>
        </Section>

        <Section id="resume-tiktok">
            <ResTiktok/>
        </Section>

        <Section id="resumen-facebook">
          <ResFacebook/>
        </Section>

        <Section id="resumen-google">
          <ResGoogle/>
        </Section>

        <Section id="resumen-agente-ia">
          <ResAgentIa/>
        </Section>

        <Section id="resumen-site-web">
          <ResSiteWeb/>
        </Section>

        <Section id="navegacion">
          <NavBase/>
        </Section>
      </main>

    </>
  );
}
