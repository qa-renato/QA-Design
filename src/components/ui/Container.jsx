export function Container({ children, wide = false, className = '' }) {
  const maxW = wide ? 'max-w-[1400px]' : 'max-w-[1200px]'
  return (
    <div className={`${maxW} mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
