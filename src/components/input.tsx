import React from "react";

import { Input as InputComponent, InputProps } from "baseui/input";
import { LabelMedium } from "baseui/typography";
import { Block } from "baseui/block";

interface InputComponentPropsI extends InputProps {
  label: string;
  placeHolder: string;
  value: any;
  onChange: (e: any) => any;
}

export default function Input({
  label = "label",
  placeHolder = "place holder",
  value = [],
  onChange,
  type,
  ...props
}: InputComponentPropsI) {
  return (
    <Block>
      <LabelMedium
        color="textSecondary"
        $style={{ textTransform: "capitalize" }}
      >
        {label}
      </LabelMedium>
      <InputComponent
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={(e: any) => onChange?.(e?.target?.value)}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              marginTop: "2px",
              borderRadius: $theme.borders.radius300,
            }),
          },
          Input: {
            style: ({ $theme }) => ({
              ":hover": {
                borderColor: "#B5D9BB",
              },
              ":active": {
                borderColor: "#49CD5E",
              },
            }),
          },
        }}
        {...props}
      />
    </Block>
  );
}
