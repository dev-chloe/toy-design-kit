import React from "react";
import { theme } from "../../stories/theme";
import type { Colors } from "stories/theme/types";

export default {
  title: "toy-design-kit/Tokens/Color",
  parameters: {
    design: {
      type: "figma",
      url: `${process.env.TOY_DK_FIGMA_URL}?node-id=1-6`,
    },
  },
};

export function Default(): React.JSX.Element {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {Object.entries(theme.colors).map(([key, value]) => (
        <div key={key}>
          <ColorChip
            colorName={key as keyof Colors}
            colorCode={value as Colors[keyof Colors]}
          />
        </div>
      ))}
    </div>
  );
}

type ColorChipPros = {
  colorName: string & keyof Colors;
  colorCode: string & Colors[keyof Colors];
};

function ColorChip({ colorName, colorCode }: ColorChipPros): React.JSX.Element {
  return (
    <>
      <div
        style={{
          width: 150,
          height: 100,
          background: colorCode,
        }}
      />
      <div
        style={{
          padding: "20px 8px 8px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          {colorName}
        </span>
        <span
          style={{
            color: `${theme.colors.gray}`,
          }}
        >
          {colorCode}
        </span>
      </div>
    </>
  );
}
