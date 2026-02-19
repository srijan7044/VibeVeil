// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
// function BorderAnimatedContainer({ children }) {
//   return (
//     <div className="w-full h-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.cyan.500)_86%,_theme(colors.cyan.300)_90%,_theme(colors.cyan.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border  flex overflow-hidden">
//       {children}
//     </div>
//   );
// }
// export default BorderAnimatedContainer;


export default function BorderAnimatedContainer({ children }) {
  return (
    <div className="relative w-full h-full rounded-3xl group">
      {/* 1. THE GLOW LAYER (Blurs the gradient to create the 'glow' effect) */}
      <div 
        className="absolute inset-0 animate-border blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `conic-gradient(from var(--border-angle), transparent 80%, theme(colors.cyan.400) 86%, theme(colors.purple.400) 90%, theme(colors.cyan.400) 94%, transparent)`,
        }}
      />

      {/* 2. THE BORDER LAYER (Masked so it doesn't bleed into the center) */}
      <div 
        className="absolute inset-0 animate-border"
        style={{
          background: `conic-gradient(from var(--border-angle), theme(colors.purple.600/.2) 80%, theme(colors.cyan.400) 86%, theme(colors.purple.400) 90%, theme(colors.cyan.400) 94%, theme(colors.purple.600/.2))`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px', 
        }}
      />
      
      {/* 3. THE CONTENT LAYER */}
      <div className="relative w-full h-full rounded-[calc(1.5rem-1px)] flex overflow-hidden z-10 bg-black">
        {children}
      </div>
    </div>
  );
}
