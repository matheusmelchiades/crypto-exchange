import React from "react";

import { Button as ButtonComponent, ButtonProps } from "baseui/button";

import { getColorByKind } from "./utils";

interface ButtonPropsI extends ButtonProps {
  color: "primary" | "secondary";
  onClick?: any;
  label: string;
}

export default function Button({
  color = "primary",
  label,
  onClick,
  ...props
}: ButtonPropsI) {
  return (
    <ButtonComponent
      kind={color}
      onClick={onClick}
      overrides={{
        BaseButton: {
          style: ({ $theme, $kind, $disabled }) => ({
            textTransform: "capitalize",
            border: `1px solid ${getColorByKind($kind, "button$kindBorder")}`,
            borderRadius: $theme.borders.radius300,
            padding: `${$theme.sizing.scale500} ${$theme.sizing.scale800}`,
            ":hover": !$disabled
              ? {
                  backgroundColor: getColorByKind(
                    $kind,
                    "button$kindFillHover"
                  ),
                  color: getColorByKind($kind, "button$kindTextHover"),
                  border: getColorByKind($kind, "button$kindBorderHover"),
                }
              : {},

            ":disabled": {
              backgroundColor: getColorByKind($kind, "button$kindFillDisabled"),
              border: `1px solid ${getColorByKind(
                $kind,
                "button$kindBorderDisabled"
              )}`,
              color: getColorByKind($kind, "button$kindTextDisabled"),
            },
          }),
        },
      }}
      {...props}
    >
      {label}
    </ButtonComponent>
  );
}
