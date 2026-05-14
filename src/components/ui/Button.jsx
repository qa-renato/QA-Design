const variants = {
  primary: [
    'bg-gradient-to-r from-nucleo to-nebulosa',
    'text-white font-semibold',
    'hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,101,254,0.4)]',
    'active:scale-[0.98]',
  ].join(' '),

  secondary: [
    'bg-transparent border border-[rgba(21,183,254,0.4)]',
    'text-cintilante font-medium',
    'hover:border-nebulosa hover:bg-[rgba(21,183,254,0.08)]',
    'active:scale-[0.98]',
  ].join(' '),

  ghost: [
    'bg-transparent',
    'text-nebulosa font-medium',
    'hover:text-cintilante',
    'active:scale-[0.98]',
  ].join(' '),
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center gap-2 transition-all duration-200 cursor-pointer select-none'
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }

  return <button className={classes} {...props}>{children}</button>
}
