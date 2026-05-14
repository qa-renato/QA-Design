export const colors = {
  primitive: {
    azulAbismo:       { value: '#023c8f', label: 'Azul Abismo' },
    azulNebulosa:     { value: '#15b7fe', label: 'Azul Nebulosa' },
    azulNucleo:       { value: '#0065fe', label: 'Azul Núcleo' },
    azulAurora:       { value: '#0c0a3b', label: 'Azul Aurora' },
    brancoCintilante: { value: '#ebebed', label: 'Branco Cintilante' },
  },
  semantic: {
    background:    { value: '#0c0a3b',             label: 'Background' },
    surface:       { value: '#12103d',             label: 'Surface' },
    surfaceRaised: { value: '#181660',             label: 'Surface Raised' },
    primary:       { value: '#0065fe',             label: 'Primary' },
    primaryStrong: { value: '#023c8f',             label: 'Primary Strong' },
    accent:        { value: '#15b7fe',             label: 'Accent' },
    text:          { value: '#ebebed',             label: 'Text' },
    textMuted:     { value: 'rgba(235,235,237,.55)',label: 'Text Muted' },
    border:        { value: 'rgba(21,183,254,.15)', label: 'Border' },
  },
}

export const typography = {
  scale: [
    { name: 'Display XL', size: '4.5rem',  weight: 700, usage: 'Hero principal' },
    { name: 'Display L',  size: '3.75rem', weight: 700, usage: 'Títulos de seção hero' },
    { name: 'H1',         size: '3rem',    weight: 700, usage: 'Títulos principais' },
    { name: 'H2',         size: '2.25rem', weight: 600, usage: 'Títulos de seção' },
    { name: 'H3',         size: '1.875rem',weight: 600, usage: 'Subtítulos' },
    { name: 'H4',         size: '1.5rem',  weight: 600, usage: 'Títulos de card' },
    { name: 'Body L',     size: '1.125rem',weight: 400, usage: 'Texto de destaque' },
    { name: 'Body',       size: '1rem',    weight: 400, usage: 'Corpo padrão' },
    { name: 'Small',      size: '0.875rem',weight: 400, usage: 'Textos auxiliares' },
    { name: 'XS',         size: '0.75rem', weight: 500, usage: 'Labels, badges' },
  ],
}

export const spacing = [
  { token: '--space-1',  value: '4px'  },
  { token: '--space-2',  value: '8px'  },
  { token: '--space-3',  value: '12px' },
  { token: '--space-4',  value: '16px' },
  { token: '--space-6',  value: '24px' },
  { token: '--space-8',  value: '32px' },
  { token: '--space-12', value: '48px' },
  { token: '--space-16', value: '64px' },
  { token: '--space-20', value: '80px' },
  { token: '--space-24', value: '96px' },
]
