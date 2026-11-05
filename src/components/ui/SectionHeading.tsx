interface SectionHeadingProps {
  eyebrow: string;
  strong: string;
  soft: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  strong,
  soft,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`heading heading--${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {strong} <span className="heading__soft">{soft}</span>
      </h2>
    </div>
  );
}
