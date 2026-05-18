import './index.css'
import './styles/motion.css'
import { LanguageProvider } from './context/LanguageContext'
import { useGsapReveal } from './hooks/useGsapReveal'

// Landing V1 — InBot (ordem revisada: alta prioridade benchmark Sqala)
import { Header }                  from './components/landing/Header'
import { Hero }                    from './components/landing/Hero'
import { Metrics }                 from './components/landing/Metrics'
import { InteractiveFeatures }     from './components/landing/InteractiveFeatures'
import { PlatformOverview }        from './components/landing/PlatformOverview'
import { ConversationalOperation } from './components/landing/ConversationalOperation'
import { EcosystemOrbit }          from './components/landing/EcosystemOrbit'
import { Differentials }           from './components/landing/Differentials'
import { MidCTA }                  from './components/landing/MidCTA'
import { CasesPreview }            from './components/landing/CasesPreview'
import { ContentPreview }          from './components/landing/ContentPreview'
import { FAQ }                     from './components/landing/FAQ'
import { FinalCTA }                from './components/landing/FinalCTA'
import { FooterLocation }          from './components/landing/FooterLocation'
import { Footer }                  from './components/landing/Footer'

// Mapa de ritmo visual (D = escuro, L = claro):
// Hero(D) → Metrics(D) → InteractiveFeatures(L) → Platform(D) → ConvOp(D) →
// Ecosystem(D) → Differentials(D) → MidCTA(gradiente) → Cases(L) →
// Content(D) → FAQ(L) → FinalCTA(D) → Footer(D)

export default function App() {
  useGsapReveal()
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <InteractiveFeatures />
        <PlatformOverview />
        <ConversationalOperation />
        <EcosystemOrbit />
        <Differentials />
        <MidCTA />
        <CasesPreview />
        <ContentPreview />
        <FAQ />
        <FinalCTA />
        <FooterLocation />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
