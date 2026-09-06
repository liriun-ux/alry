import Header from "@/components/header";
import Section from "@/components/Section";
import Hero from "./hero";

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <Section id="hero">
          <Hero/>
        </Section>

        <Section id="problem">
          <h2>Problema</h2>
        </Section>

        <Section id="value">
          <h2>Propuesta de valor</h2>
        </Section>

        <Section id="product">
          <h2>Producto</h2>
        </Section>

        <Section id="benefits">
          <h2>Beneficios</h2>
        </Section>

        <Section id="how-it-works">
          <h2>Cómo funciona</h2>
        </Section>

        <Section id="social-proof">
          <h2>Prueba social</h2>
        </Section>

        <Section id="cta">
          <h2>CTA</h2>
        </Section>
      </main>

    </>
  );
}
