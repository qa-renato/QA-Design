import './index.css'

// Landing V1 — InBot (ordem revisada: alta prioridade benchmark Sqala)
import { Header }                  from './components/landing/Header'
import { Hero }                    from './components/landing/Hero'
import { Metrics }                 from './components/landing/Metrics'
import { Solutions }               from './components/landing/Solutions'
import { PlatformOverview }        from './components/landing/PlatformOverview'
import { ConversationalOperation } from './components/landing/ConversationalOperation'
import { EcosystemOrbit }          from './components/landing/EcosystemOrbit'
import { Differentials }           from './components/landing/Differentials'
import { MidCTA }                  from './components/landing/MidCTA'
import { CasesPreview }            from './components/landing/CasesPreview'
import { ContentPreview }          from './components/landing/ContentPreview'
import { FAQ }                     from './components/landing/FAQ'
import { FinalCTA }                from './components/landing/FinalCTA'
import { Footer }                  from './components/landing/Footer'

// Mapa de ritmo visual (D = escuro, L = claro):
// Hero(D) → Metrics(D) → Solutions(L) → Platform(D) → ConvOp(D) →
// Ecosystem(D) → Differentials(D) → MidCTA(gradiente) → Cases(L) →
// Content(D) → FAQ(L) → FinalCTA(D) → Footer(D)

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Solutions />
        <PlatformOverview />
        <ConversationalOperation />
        <EcosystemOrbit />
        <Differentials />
        <MidCTA />
        <CasesPreview />
        <ContentPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
