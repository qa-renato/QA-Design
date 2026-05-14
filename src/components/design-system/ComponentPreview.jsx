import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { MetricCard } from '../ui/MetricCard'

export function ComponentPreview() {
  return (
    <div className="space-y-12">

      {/* Buttons */}
      <div>
        <p className="text-[rgba(235,235,237,0.5)] text-xs font-medium uppercase tracking-wider mb-4">Botões</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary" size="lg">Agendar demonstração</Button>
          <Button variant="primary" size="md">Conheça a plataforma</Button>
          <Button variant="primary" size="sm">Saiba mais</Button>
          <Button variant="secondary" size="md">Ver documentação</Button>
          <Button variant="ghost" size="md">Explorar casos</Button>
        </div>
      </div>

      {/* Badges */}
      <div>
        <p className="text-[rgba(235,235,237,0.5)] text-xs font-medium uppercase tracking-wider mb-4">Badges</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge variant="brand">Plataforma</Badge>
          <Badge variant="accent">Novo</Badge>
          <Badge variant="muted">Beta</Badge>
          <Badge variant="dark">Governança</Badge>
          <Badge variant="brand">Agentes IA</Badge>
          <Badge variant="accent">Multicanal</Badge>
        </div>
      </div>

      {/* Cards */}
      <div>
        <p className="text-[rgba(235,235,237,0.5)] text-xs font-medium uppercase tracking-wider mb-4">Cards</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <Badge variant="brand" className="mb-3">Agentes</Badge>
            <h4 className="text-cintilante font-semibold text-base mb-2">Agentes Inteligentes</h4>
            <p className="text-[rgba(235,235,237,0.5)] text-sm leading-relaxed">
              Orquestre fluxos conversacionais com precisão e governança em escala.
            </p>
          </Card>
          <Card glow>
            <Badge variant="accent" className="mb-3">Canais</Badge>
            <h4 className="text-cintilante font-semibold text-base mb-2">Canais Conectados</h4>
            <p className="text-[rgba(235,235,237,0.5)] text-sm leading-relaxed">
              WhatsApp, email, voz e portais unificados em uma operação única e coerente.
            </p>
          </Card>
          <Card>
            <Badge variant="muted" className="mb-3">Dados</Badge>
            <h4 className="text-cintilante font-semibold text-base mb-2">Dados Organizados</h4>
            <p className="text-[rgba(235,235,237,0.5)] text-sm leading-relaxed">
              Visibilidade completa sobre cada interação, jornada e resultado operacional.
            </p>
          </Card>
        </div>
      </div>

      {/* Metric Cards */}
      <div>
        <p className="text-[rgba(235,235,237,0.5)] text-xs font-medium uppercase tracking-wider mb-4">Metric Cards</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard value="+200" label="Empresas atendidas" description="Operações ativas em produção" />
          <MetricCard value="98%" label="Uptime garantido" description="Infraestrutura de missão crítica" />
          <MetricCard value="10M+" label="Interações/mês" description="Volume processado com consistência" />
          <MetricCard value="4x"   label="Eficiência operacional" description="Versus operação manual equivalente" />
        </div>
      </div>

    </div>
  )
}
