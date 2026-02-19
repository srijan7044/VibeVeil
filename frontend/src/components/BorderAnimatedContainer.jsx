// // How to make animated gradient border 👇
// // https://cruip-tutorials.vercel.app/animated-gradient-border/
// function BorderAnimatedContainer({ children }) {
//   return (
//     <div className="w-full h-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.cyan.500)_86%,_theme(colors.cyan.300)_90%,_theme(colors.cyan.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border  flex overflow-hidden">
//       {children}
//     </div>
//   );
// }
// export default BorderAnimatedContainer;



// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
// function BorderAnimatedContainer({ children }) {
//   return (
//     <div className="w-full h-full [background:linear-gradient(45deg,#0f172a,theme(colors.slate.900)_50%,#0f172a)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.fuchsia.400)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border flex overflow-hidden">
//       {children}
//     </div>
//   );
// }
// export default BorderAnimatedContainer;






// export default function BorderAnimatedContainer({ children }) {
//   return (
//     <div className="relative w-full h-full bg-slate-950/50 rounded-3xl overflow-hidden group">
//       {/* 1. THE ACTUAL ANIMATED BORDER (Using a pseudo-element approach) */}
//       <div 
//         className="absolute inset-0 rounded-3xl p-[2px] animate-border"
//         style={{
//           background: `conic-gradient(from var(--border-angle), transparent 70%, #22d3ee 85%, #a855f7 90%, #22d3ee 95%, transparent)`,
//           mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
//           maskComposite: 'exclude',
//           WebkitMaskComposite: 'destination-out',
//         }}
//       />

//       {/* 2. THE CONTENT AREA */}
//       <div className="relative w-full h-full flex overflow-hidden z-10">
//         {children}
//       </div>
//     </div>
//   );
// }



// export default function BorderAnimatedContainer({ children }) {
//   return (
//     <div className="relative w-full h-full rounded-3xl p-[1px] overflow-hidden group bg-slate-950/50">
//       {/* 1. THE STATIC THEMED BORDER */}
//       {/* We removed the 'animate-border' and the complex angle variables */}
//       <div 
//         className="absolute inset-0 rounded-3xl"
//         style={{
//           background: `linear-gradient(135deg, #a855f7 0%, #22d3ee 50%, #a855f7 100%)`,
//           opacity: 0.4, // Makes it subtle, not "in your face"
//         }}
//       />

//       {/* 2. THE CONTENT AREA (The Glass) */}
//       <div className="relative w-full h-full rounded-[23px] bg-slate-950/80 backdrop-blur-xl flex overflow-hidden z-10">
//         {children}
//       </div>
//     </div>
//   );
// }


////this version is best except the rotating gradiant beam
// export default function BorderAnimatedContainer({ children }) {
//   return (
//     <div className="relative w-full h-full rounded-3xl p-[1px] overflow-hidden group">
//       {/* The Moving Gradient Border */}
//       <div className="absolute inset-0 animate-border [background:conic-gradient(from_var(--border-angle),theme(colors.purple.600/.2)_80%,theme(colors.cyan.400)_86%,theme(colors.purple.400)_90%,theme(colors.cyan.400)_94%,theme(colors.purple.600/.2))_border-box]" />
      
//       {/* The Inner Content Wrapper */}
//       <div className="relative w-full h-full rounded-[calc(1.5rem-1px)] flex overflow-hidden">
//         {children}
//       </div>
//     </div>
//   );
// }





////this is very good but doesen't have the border glow

// export default function BorderAnimatedContainer({ children }) {
//   return (
//     <div className="relative w-full h-full rounded-3xl overflow-hidden group">
//       {/* 1. THE BORDER LAYER (Masked so it doesn't bleed into the center) */}
//       <div 
//         className="absolute inset-0 animate-border"
//         style={{
//           background: `conic-gradient(from var(--border-angle), theme(colors.purple.600/.2) 80%, theme(colors.cyan.400) 86%, theme(colors.purple.400) 90%, theme(colors.cyan.400) 94%, theme(colors.purple.600/.2))`,
//           mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//           WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//           maskComposite: 'exclude',
//           WebkitMaskComposite: 'xor',
//           padding: '1px', // This defines the border thickness
//         }}
//       />
      
//       {/* 2. THE CONTENT LAYER (Your exact same background) */}
//       <div className="relative w-full h-full rounded-[calc(1.5rem-1px)] flex overflow-hidden z-10">
//         {children}
//       </div>
//     </div>
//   );
// }



//// mast kadak ekdam bole to kadak maal

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



////it has the broder glow bnut the theam is not 


// function BorderAnimatedContainer({ children }) {
//   return (
//     <div 
//       className="w-full h-full rounded-2xl border border-transparent animate-border flex overflow-hidden
//       /* 1. padding-box: This replaces the 'mask' - it keeps the center dark.
//          2. border-box: This is your exact purple/cyan gradient highlight.
//       */
//       [background:linear-gradient(#0f172a,#0f172a)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.purple.600/.2)_80%,_theme(colors.cyan.400)_86%,_theme(colors.purple.400)_90%,_theme(colors.cyan.400)_94%,_theme(colors.purple.600/.2))_border-box]"
//     >
//       <div className="relative w-full h-full flex overflow-hidden">
//         {children}
//       </div>
//     </div>
//   );
// }

// export default BorderAnimatedContainer;