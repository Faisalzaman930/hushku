import { Device, type AppScreen } from "./ui";

interface PhoneFrameProps {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * Maps the old screenshot paths (from the earlier app) to the current app screens,
 * so every page shows the real, current Hushku app.
 */
const MAP: Record<string, AppScreen> = {
  "app-playdates": "pet-profile",
  "app-adoption": "discover",
  "app-shelters": "discover",
  "app-lost-and-found": "alerts",
  "app-lost-found": "alerts",
  "app-social-feed": "messages",
  "app-social-profile": "chat",
  "app-social-owner": "chat",
  "app-profile": "messages",
  "app-pet-profile": "pet-profile",
};

function toScreen(src: string): AppScreen {
  const key = src.split("/").pop()?.replace(/\.(png|jpe?g|webp)$/, "") ?? "";
  if (key in MAP) return MAP[key];
  if (/health|care|reminder|weight|flea|heat|records/.test(key)) return "home";
  return "home";
}

export default function PhoneFrame({ src, className = "" }: PhoneFrameProps) {
  return <Device screen={toScreen(src)} className={className} />;
}
