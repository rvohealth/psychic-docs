export default function Logo({ size = "small" }: { size?: string } = {}) {
  return (
    <div className={`nnt-logo ${size}`}>
      <h2>
        <span>p</span>
        <span>s</span>
        <span>y</span>
        <span>c</span>
        <span>h</span>
        <span>i</span>
        <span>c</span>
      </h2>
    </div>
  );
}
