export function cn(...inputs: (string | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}

