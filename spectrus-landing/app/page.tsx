import VideoCarousel from "@/components/VideoCarousel/VideoCarousel";

export default function Home() {

  return (

    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <h1 style={{ color: 'var(--fg)', fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>

        SPECTRUS — Fase 1 OK
        <VideoCarousel />
      </h1>

    </main>

  );

}
