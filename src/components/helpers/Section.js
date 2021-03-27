export default function Section({ className, children }) {
  return (
    <div className={className || "noClass"}>
      <div className="mid">{children}</div>
    </div>
  );
}
