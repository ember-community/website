import { colors } from "@/lib/design-tokens";

export default function RecordButton() {
  return (
    <div
      className="flex items-center justify-center mx-auto"
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${colors.ember}, #C94420)`,
        boxShadow: `0 0 20px ${colors.ember}44`,
      }}
    >
      <div
        className="rounded-full"
        style={{ width: 20, height: 20, background: colors.firelight }}
      />
    </div>
  );
}
