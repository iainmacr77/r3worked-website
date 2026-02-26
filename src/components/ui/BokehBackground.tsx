import { cn } from "@/lib/utils";

type BokehBackgroundProps = {
  variant: number;
  className?: string;
};

type BokehVariant = {
  baseGradient: string;
  orbAColor: string;
  orbBColor: string;
  orbCColor: string;
  orbAPosition: string;
  orbBPosition: string;
  orbCPosition: string;
  edgeVignette: string;
};

const NOISE_TEXTURE = encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='0.35'/></svg>"
);

const BOKEH_VARIANTS: BokehVariant[] = [
  {
    baseGradient: "linear-gradient(140deg, #0b0f16 0%, #12111b 45%, #0a0c12 100%)",
    orbAColor: "rgba(255,167,94,0.72)",
    orbBColor: "rgba(255,98,98,0.6)",
    orbCColor: "rgba(52,211,153,0.52)",
    orbAPosition: "18% 18%",
    orbBPosition: "82% 20%",
    orbCPosition: "56% 78%",
    edgeVignette: "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.62) 100%)",
  },
  {
    baseGradient: "linear-gradient(145deg, #0c1018 0%, #161320 40%, #0a0d14 100%)",
    orbAColor: "rgba(255,204,122,0.7)",
    orbBColor: "rgba(244,114,182,0.58)",
    orbCColor: "rgba(129,140,248,0.5)",
    orbAPosition: "24% 16%",
    orbBPosition: "78% 26%",
    orbCPosition: "66% 76%",
    edgeVignette: "radial-gradient(circle at center, transparent 26%, rgba(0,0,0,0.65) 100%)",
  },
  {
    baseGradient: "linear-gradient(145deg, #0b0e14 0%, #111625 44%, #0a0d13 100%)",
    orbAColor: "rgba(255,186,120,0.66)",
    orbBColor: "rgba(251,146,60,0.54)",
    orbCColor: "rgba(56,189,248,0.5)",
    orbAPosition: "16% 16%",
    orbBPosition: "84% 18%",
    orbCPosition: "44% 78%",
    edgeVignette: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
  },
  {
    baseGradient: "linear-gradient(140deg, #090d14 0%, #171323 42%, #0a0c12 100%)",
    orbAColor: "rgba(255,174,120,0.64)",
    orbBColor: "rgba(251,113,133,0.56)",
    orbCColor: "rgba(45,212,191,0.5)",
    orbAPosition: "28% 16%",
    orbBPosition: "82% 24%",
    orbCPosition: "52% 80%",
    edgeVignette: "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.64) 100%)",
  },
  {
    baseGradient: "linear-gradient(140deg, #0a0c12 0%, #18111a 43%, #0b0d12 100%)",
    orbAColor: "rgba(255,193,123,0.64)",
    orbBColor: "rgba(239,68,68,0.52)",
    orbCColor: "rgba(251,191,36,0.5)",
    orbAPosition: "18% 20%",
    orbBPosition: "80% 18%",
    orbCPosition: "38% 78%",
    edgeVignette: "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.66) 100%)",
  },
  {
    baseGradient: "linear-gradient(140deg, #0a0d13 0%, #151323 42%, #090c12 100%)",
    orbAColor: "rgba(251,191,36,0.62)",
    orbBColor: "rgba(249,115,22,0.56)",
    orbCColor: "rgba(20,184,166,0.5)",
    orbAPosition: "20% 18%",
    orbBPosition: "82% 20%",
    orbCPosition: "58% 78%",
    edgeVignette: "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.68) 100%)",
  },
  {
    baseGradient: "linear-gradient(140deg, #0a0d14 0%, #171224 45%, #0a0c13 100%)",
    orbAColor: "rgba(255,201,137,0.66)",
    orbBColor: "rgba(244,114,182,0.54)",
    orbCColor: "rgba(96,165,250,0.5)",
    orbAPosition: "24% 16%",
    orbBPosition: "78% 20%",
    orbCPosition: "46% 80%",
    edgeVignette: "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.66) 100%)",
  },
];

export function BokehBackground({ variant, className }: BokehBackgroundProps) {
  const current = BOKEH_VARIANTS[variant % BOKEH_VARIANTS.length];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0" style={{ backgroundImage: current.baseGradient }} />
      <div
        className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[72px] sm:h-72 sm:w-72 sm:blur-[92px]"
        style={{ left: current.orbAPosition.split(" ")[0], top: current.orbAPosition.split(" ")[1], backgroundColor: current.orbAColor }}
      />
      <div
        className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[78px] sm:h-80 sm:w-80 sm:blur-[104px]"
        style={{ left: current.orbBPosition.split(" ")[0], top: current.orbBPosition.split(" ")[1], backgroundColor: current.orbBColor }}
      />
      <div
        className="absolute h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[76px] sm:h-[19rem] sm:w-[19rem] sm:blur-[96px]"
        style={{ left: current.orbCPosition.split(" ")[0], top: current.orbCPosition.split(" ")[1], backgroundColor: current.orbCColor }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0" style={{ backgroundImage: current.edgeVignette }} />
      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-soft-light"
        style={{ backgroundImage: `url("data:image/svg+xml,${NOISE_TEXTURE}")` }}
      />
    </div>
  );
}
