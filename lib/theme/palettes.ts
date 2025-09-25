export type ThemePalette = {
  id: string
  label: string
  description: string
  values: Record<string, string>
}

export const palettes: ThemePalette[] = [
  {
    id: "neutral",
    label: "Default",
    description: "Balanced neutral grays with subtle brand accents.",
    values: {
      "--primary": "oklch(0.205 0 0)",
      "--primary-foreground": "oklch(0.985 0 0)",
      "--accent": "oklch(0.97 0 0)",
      "--accent-foreground": "oklch(0.205 0 0)",
      "--sidebar": "oklch(0.985 0 0)",
    },
  },
  {
    id: "ocean",
    label: "Ocean",
    description: "Vibrant blues with soft supporting neutrals.",
    values: {
      "--primary": "oklch(0.51 0.11 235.49)",
      "--primary-foreground": "oklch(0.985 0.02 244.21)",
      "--accent": "oklch(0.7 0.1 230.5)",
      "--accent-foreground": "oklch(0.21 0.01 212.2)",
      "--sidebar": "oklch(0.92 0.04 217.1)",
    },
  },
  {
    id: "sunset",
    label: "Sunset",
    description: "Warm oranges and violets ideal for marketing views.",
    values: {
      "--primary": "oklch(0.6 0.18 35.5)",
      "--primary-foreground": "oklch(0.985 0.02 35.5)",
      "--accent": "oklch(0.72 0.2 50.0)",
      "--accent-foreground": "oklch(0.21 0.02 35.5)",
      "--sidebar": "oklch(0.95 0.05 50.0)",
    },
  },
  {
    id: "forest",
    label: "Forest",
    description: "Deep greens paired with bright supporting tints.",
    values: {
      "--primary": "oklch(0.44 0.09 158.2)",
      "--primary-foreground": "oklch(0.98 0.01 158.2)",
      "--accent": "oklch(0.74 0.08 140.2)",
      "--accent-foreground": "oklch(0.25 0.02 150.0)",
      "--sidebar": "oklch(0.92 0.03 140.2)",
    },
  },
]
