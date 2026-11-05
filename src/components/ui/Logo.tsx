import { LOGO_MARK_PATH } from "./paths";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 340"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={LOGO_MARK_PATH} />
    </svg>
  );
}

export function LogoLockup({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <span className={`lockup lockup--${size}`}>
      <LogoMark className="lockup__mark" />
      <span className="lockup__text">
        <span className="lockup__name">Lucas Julião</span>
        <span className="lockup__sport">Jiu-Jítsu</span>
      </span>
    </span>
  );
}
