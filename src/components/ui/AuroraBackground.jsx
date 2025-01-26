import { cn } from '../../lib/utils'

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-[70vh] items-center justify-center bg-[#f8f6f7]",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--primary)_10%,var(--blue-200)_15%,var(--rose-200)_20%,var(--blue-200)_25%,var(--primary)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:400%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[20px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-soft-light
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_60%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
}; 