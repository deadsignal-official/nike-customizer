import { useState } from "react";

const COLORS = [
  { name: "Zwart", hex: "#0d0d0d" },
  { name: "Wit", hex: "#F5F5F5" },
  { name: "Grijs", hex: "#9E9E9E" },
  { name: "Donkergrijs", hex: "#3a3a3a" },
  { name: "Rood", hex: "#CC0000" },
  { name: "Donkerrood", hex: "#7B1212" },
  { name: "Oranje", hex: "#E64A19" },
  { name: "Geel", hex: "#FBC02D" },
  { name: "Lime", hex: "#8BC34A" },
  { name: "Groen", hex: "#2E7D32" },
  { name: "Blauw", hex: "#1565C0" },
  { name: "Lichtblauw", hex: "#29B6F6" },
  { name: "Navy", hex: "#0D1B4B" },
  { name: "Paars", hex: "#6A1B9A" },
  { name: "Roze", hex: "#E91E8C" },
  { name: "Bruin", hex: "#5D4037" },
  { name: "Goud", hex: "#C8A227" },
  { name: "Zilver", hex: "#B0BEC5" },
  { name: "Beige", hex: "#D4B89A" },
  { name: "Turquoise", hex: "#00897B" },
];

const PARTS = [
  { id: "basis",            label: "Basis",            emoji: "👟" },
  { id: "kooi",             label: "Kooi",             emoji: "🔲" },
  { id: "tussenzool",       label: "Tussenzool",       emoji: "⬜" },
  { id: "swoosh",           label: "Swoosh",           emoji: "✔️" },
  { id: "tongue_top",       label: "Tongue Top",       emoji: "👅" },
  { id: "label",            label: "Label op Tong",    emoji: "🏷️" },
  { id: "veters",           label: "Veters",           emoji: "〰️" },
  { id: "middenzool",       label: "Middenzool",       emoji: "🟫" },
  { id: "accent_middenzool",label: "Accent Middenzool",emoji: "✨" },
  { id: "airbag",           label: "Airbag",           emoji: "💨" },
  { id: "buitenzool",       label: "Buitenzool",       emoji: "⬛" },
];

const MY_DESIGN = {
  basis:             "#0d0d0d",
  kooi:              "#CC0000",
  tussenzool:        "#F5F5F5",
  swoosh:            "#C8A227",
  tongue_top:        "#0d0d0d",
  label:             "#CC0000",
  veters:            "#F5F5F5",
  middenzool:        "#F5F5F5",
  accent_middenzool: "#CC0000",
  airbag:            "#29B6F6",
  buitenzool:        "#0d0d0d",
};

export default function NikeCustomizer() {
  const [colors, setColors] = useState(MY_DESIGN);
  const [selected, setSelected] = useState("basis");
  const [text, setText] = useState("FIRE");
  const [tab, setTab] = useState("design");

  const setColor = (hex) => setColors((c) => ({ ...c, [selected]: hex }));
  const getColorName = (hex) => COLORS.find(c => c.hex === hex)?.name || hex;
  const c = colors;

  // Legend dots for the shoe diagram
  const legendItems = [
    { id: "swoosh",            label: "Swoosh",            x: 30,  y: 20  },
    { id: "airbag",            label: "Airbag",            x: 30,  y: 40  },
    { id: "accent_middenzool", label: "Accent Middenzool", x: 30,  y: 60  },
  ];

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#080808", minHeight: "100vh", color: "#fff", padding: "16px" }}>
      <div style={{ maxWidth: 460, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: "#444", textTransform: "uppercase" }}>Nike By You</div>
          <div style={{ fontSize: 24, fontWeight: 900 }}>Air Max Plus</div>
        </div>

        {/* Shoe Preview */}
        <div style={{ background: "#111", borderRadius: 20, padding: "20px 12px 14px", marginBottom: 16, border: "1px solid #1e1e1e" }}>
          <svg viewBox="0 0 500 230" width="100%" height="auto">

            {/* ── BUITENZOOL ── */}
            <path d="M60 195 Q65 183 108 181 L355 181 Q383 181 387 192 Q389 203 368 205 L78 205 Q60 205 60 195Z"
              fill={c.buitenzool} />

            {/* ── MIDDENZOOL (groot wit blok) ── */}
            <path d="M66 181 Q70 160 105 158 L350 158 Q374 158 378 171 Q382 183 362 185 L78 185 Q66 185 66 181Z"
              fill={c.middenzool} />

            {/* ── ACCENT MIDDENZOOL (duidelijk zichtbare streep) ── */}
            <path d="M66 181 Q68 167 98 163 L240 163 L234 185 L78 185 Q66 183 66 181Z"
              fill={c.accent_middenzool} />
            {/* accent label pijl */}
            <line x1="150" y1="174" x2="150" y2="215" stroke={c.accent_middenzool} strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
            <circle cx="150" cy="174" r="4" fill={c.accent_middenzool} />
            <text x="152" y="226" fontSize="9" fill={c.accent_middenzool} fontWeight="700">Accent</text>

            {/* ── AIRBAG (2 grote zichtbare blokken) ── */}
            {/* rear airbag */}
            <rect x="80" y="163" width="44" height="18" rx="6" fill={c.airbag} />
            <rect x="82" y="165" width="40" height="14" rx="5" fill={c.airbag} stroke="#fff" strokeWidth="0.8" strokeOpacity="0.3" />
            <text x="102" y="175" fontSize="8" fill="#fff" fontWeight="900" textAnchor="middle">AIR</text>
            {/* front airbag */}
            <rect x="285" y="163" width="58" height="18" rx="6" fill={c.airbag} />
            <rect x="287" y="165" width="54" height="14" rx="5" fill={c.airbag} stroke="#fff" strokeWidth="0.8" strokeOpacity="0.3" />
            <text x="314" y="175" fontSize="8" fill="#fff" fontWeight="900" textAnchor="middle">AIR</text>
            {/* airbag label */}
            <line x1="314" y1="163" x2="380" y2="215" stroke={c.airbag} strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
            <circle cx="314" cy="163" r="4" fill={c.airbag} />
            <text x="340" y="226" fontSize="9" fill={c.airbag} fontWeight="700">Airbag</text>

            {/* ── BASIS upper ── */}
            <path d="M96 158 Q102 92 148 70 Q198 46 254 52 Q308 58 336 90 Q360 115 358 158Z"
              fill={c.basis} />

            {/* ── KOOI front ── */}
            <path d="M96 158 Q100 110 132 86 Q168 64 214 60 Q246 58 268 72 L256 158Z"
              fill={c.kooi} opacity="0.88" />
            {/* ── KOOI rear ── */}
            <path d="M276 76 Q318 90 340 120 Q356 138 358 158 L286 158Z"
              fill={c.kooi} opacity="0.75" />

            {/* ── TUSSENZOOL strip ── */}
            <path d="M96 158 Q98 150 126 148 L358 148 L358 158Z"
              fill={c.tussenzool} opacity="0.8" />

            {/* ── TONGUE ── */}
            <path d="M192 72 Q212 55 232 72 L236 158 L188 158Z"
              fill={c.tongue_top} />
            {/* tongue highlight */}
            <path d="M195 70 Q212 58 229 70 L226 96 L197 96Z"
              fill="#ffffff" opacity="0.06" />

            {/* ── LABEL op tong ── */}
            <rect x="200" y="95" width="26" height="15" rx="3" fill={c.label} />
            <text x="213" y="106" fontSize="6.5" fill="#fff" textAnchor="middle" fontWeight="900">NIKE</text>

            {/* ── VETERS ── */}
            {[82, 96, 109, 120, 130, 139].map((y, i) => (
              <line key={i}
                x1={192 - i * 2} y1={y}
                x2={232 + i * 2} y2={y}
                stroke={c.veters} strokeWidth="2.8" strokeLinecap="round" />
            ))}

            {/* ── SWOOSH (groot en duidelijk) ── */}
            <path d="M126 140 Q192 108 318 128 Q296 150 218 145 Q162 141 126 140Z"
              fill={c.swoosh} />
            {/* swoosh highlight */}
            <path d="M130 140 Q190 112 305 130 Q285 138 220 136 Q166 134 130 140Z"
              fill="#ffffff" opacity="0.12" />
            {/* swoosh label */}
            <line x1="220" y1="140" x2="420" y2="100" stroke={c.swoosh} strokeWidth="1.5" strokeDasharray="3,2" opacity="0.8"/>
            <circle cx="220" cy="140" r="4" fill={c.swoosh} />
            <text x="388" y="98" fontSize="9" fill={c.swoosh} fontWeight="700">Swoosh</text>

            {/* ── PERSONALISATIE tekst op hiel ── */}
            <text x="338" y="116"
              fontSize="13" fill={c.accent_middenzool}
              fontWeight="900" textAnchor="middle"
              transform="rotate(-10,338,116)"
              style={{ letterSpacing: 0 }}>
              {text.slice(0, 4)}
            </text>

            {/* ── HEEL CAP ── */}
            <path d="M320 90 Q350 104 358 130 L348 135 Q340 108 322 98Z"
              fill={c.kooi} opacity="0.55" />
          </svg>

          {/* Personalisatie */}
          <div style={{ textAlign: "center", marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: 11, color: "#555" }}>✍️ Personalisatie tekst:</span>
            <input
              maxLength={4}
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              style={{
                background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#fff",
                borderRadius: 8, padding: "5px 12px", width: 72,
                fontSize: 14, fontWeight: 900, textAlign: "center",
                textTransform: "uppercase", letterSpacing: 2, outline: "none"
              }}
            />
          </div>
        </div>

        {/* Color legenda */}
        <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
          {[
            { id: "swoosh", label: "Swoosh" },
            { id: "airbag", label: "Airbag" },
            { id: "accent_middenzool", label: "Accent" },
          ].map(item => (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "#111", borderRadius: 8, padding: "6px 10px",
              border: "1px solid #1e1e1e"
            }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: c[item.id], border: "1px solid #333" }} />
              <span style={{ fontSize: 11, color: "#888" }}>{item.label}</span>
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 700 }}>{getColorName(c[item.id])}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          {["design", "summary"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "10px", borderRadius: 10,
              background: tab === t ? "#fff" : "#141414",
              color: tab === t ? "#000" : "#555",
              border: "none", fontWeight: 800, fontSize: 12,
              cursor: "pointer", textTransform: "uppercase", letterSpacing: 1
            }}>
              {t === "design" ? "🎨 Ontwerp" : "📋 Overzicht"}
            </button>
          ))}
        </div>

        {tab === "design" && (
          <>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, color: "#444", marginBottom: 8, textTransform: "uppercase", letterSpacing: 2 }}>Kies onderdeel</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {PARTS.map((part) => (
                  <button key={part.id} onClick={() => setSelected(part.id)} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 12px", borderRadius: 10,
                    background: selected === part.id ? "#1e1e1e" : "#111",
                    border: selected === part.id ? "1.5px solid #fff" : "1.5px solid #1a1a1a",
                    color: "#fff", cursor: "pointer", textAlign: "left", transition: "all 0.12s"
                  }}>
                    <span style={{ fontSize: 16 }}>{part.emoji}</span>
                    <span style={{ flex: 1, fontSize: 13, fontWeight: selected === part.id ? 800 : 400 }}>{part.label}</span>
                    <span style={{ fontSize: 11, color: "#555", marginRight: 6 }}>{getColorName(c[part.id])}</span>
                    <div style={{ width: 22, height: 22, borderRadius: 5, background: c[part.id], border: "1px solid #333", flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, color: "#444", marginBottom: 10, textTransform: "uppercase", letterSpacing: 2 }}>
                Kleur voor <span style={{ color: "#aaa" }}>{PARTS.find(p => p.id === selected)?.label}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                {COLORS.map((col) => (
                  <button key={col.hex} onClick={() => setColor(col.hex)} title={col.name} style={{
                    aspectRatio: "1", borderRadius: 10,
                    background: col.hex,
                    border: c[selected] === col.hex ? "3px solid #fff" : "2px solid #222",
                    cursor: "pointer",
                    transform: c[selected] === col.hex ? "scale(1.12)" : "scale(1)",
                    transition: "all 0.12s", position: "relative"
                  }}>
                    {c[selected] === col.hex && (
                      <span style={{
                        position: "absolute", top: "50%", left: "50%",
                        transform: "translate(-50%,-50%)", fontSize: 13,
                        color: col.hex === "#F5F5F5" ? "#000" : "#fff"
                      }}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "summary" && (
          <div style={{ background: "#111", borderRadius: 16, padding: 16, marginBottom: 16, border: "1px solid #1e1e1e" }}>
            <div style={{ fontSize: 10, color: "#444", marginBottom: 12, textTransform: "uppercase", letterSpacing: 2 }}>Jouw complete design</div>
            {PARTS.map((part) => (
              <div key={part.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1a1a1a" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14 }}>{part.emoji}</span>
                  <span style={{ fontSize: 12, color: "#bbb" }}>{part.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 11, color: "#666" }}>{getColorName(c[part.id])}</span>
                  <div style={{ width: 22, height: 22, borderRadius: 5, background: c[part.id], border: "1px solid #333" }} />
                </div>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span>✍️</span>
                <span style={{ fontSize: 12, color: "#bbb" }}>Personalisatie</span>
              </div>
              <span style={{ fontSize: 16, fontWeight: 900, letterSpacing: 3, color: "#fff" }}>{text || "—"}</span>
            </div>
          </div>
        )}

        <a href="https://www.nike.com/u/custom-nike-air-max-plus-by-you-10001901" target="_blank" rel="noopener noreferrer"
          style={{
            display: "block", textAlign: "center", padding: "15px",
            background: "#fff", color: "#000", borderRadius: 30,
            fontWeight: 900, fontSize: 13, textDecoration: "none",
            letterSpacing: 2, textTransform: "uppercase", marginBottom: 8
          }}>
          Bestel op Nike.com →
        </a>
        <div style={{ textAlign: "center", fontSize: 10, color: "#2a2a2a", paddingBottom: 16 }}>
          $200 · ~4 weken levering · Handgemaakt
        </div>
      </div>
    </div>
  );
}
