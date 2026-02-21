import { colors } from "@/lib/design-tokens";

interface PhoneMockupProps {
  children: React.ReactNode;
  glow?: boolean;
}

export default function PhoneMockup({ children, glow = false }: PhoneMockupProps) {
  return (
    <div className="relative">
      {glow && (
        <div
          className="absolute pointer-events-none"
          style={{
            inset: -30,
            borderRadius: 50,
            background: `radial-gradient(circle, ${colors.ember}18 0%, transparent 70%)`,
          }}
        />
      )}
      <div
        className="relative overflow-hidden"
        style={{
          width: 260,
          height: 520,
          borderRadius: 32,
          background: colors.nightSky,
          border: `1px solid ${colors.smoke}66`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${colors.ember}11`,
        }}
      >
        {/* Notch */}
        <div className="h-10 flex items-center justify-center">
          <div
            className="rounded-sm"
            style={{
              width: 70,
              height: 4,
              borderRadius: 3,
              background: `${colors.smoke}44`,
            }}
          />
        </div>
        {/* Content */}
        <div className="px-4 pb-4" style={{ height: "calc(100% - 40px)", overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
