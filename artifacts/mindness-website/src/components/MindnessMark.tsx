const MOUNTAIN_PATH = 'm8 3 4 8 5-5 5 15H2L8 3z';

type MindnessMarkProps = {
  size?: number;
  className?: string;
};

export function MindnessMark({ size = 23, className = '' }: MindnessMarkProps) {
  const iconSize = Math.round(size * 0.46);
  const strokeWidth = Math.max(1.5, size / 26);

  return (
    <span
      className={`brand-mark ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={MOUNTAIN_PATH}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
