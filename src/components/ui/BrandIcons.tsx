import { INSTAGRAM_PATH, WHATSAPP_PATH } from "./paths";

interface IconProps {
  size?: number;
}

export function WhatsAppIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={WHATSAPP_PATH} />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={INSTAGRAM_PATH} />
    </svg>
  );
}
