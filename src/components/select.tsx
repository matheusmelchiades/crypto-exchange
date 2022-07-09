import React from "react";

import { Select as SelectComponent, SelectProps } from "baseui/select";
import { LabelMedium } from "baseui/typography";
import { Block } from "baseui/block";

interface SelectPropsI extends SelectProps {
  label?: string;
  options?: { [key in string]: any }[];
  placeHolder?: string;
  labelKey: string;
  valueKey: string;
  value?: any;
  onChange?: (param: any) => any;
}

export default function Select({
  label = "label",
  placeHolder = "place holder",
  options = [],
  value = [],
  labelKey,
  valueKey,
  onChange,
  ...props
}: SelectPropsI) {
  return (
    <Block width="100%">
      <LabelMedium
        color="textSecondary"
        $style={{ textTransform: "capitalize" }}
      >
        {label}
      </LabelMedium>
      <SelectComponent
        backspaceRemoves={false}
        deleteRemoves={false}
        escapeClearsValue={false}
        searchable={false}
        options={options}
        labelKey={labelKey}
        valueKey={valueKey}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              marginTop: "2px",
            }),
          },
          ControlContainer: {
            style: ({ $theme }) => ({
              borderRadius: $theme.borders.radius300,
              ":hover": {
                borderColor: "#B5D9BB",
              },
              ":active": {
                borderColor: "#49CD5E",
              },
            }),
          },
          Dropdown: {
            style: ({ $theme }) => ({
              borderRadius: $theme.borders.radius300,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
          },
          DropdownListItem: {
            style: () => ({
              ":not(:last-child)": {
                borderBottom: "1px solid #F2F2F2",
              },
            }),
          },
        }}
        {...props}
      />
    </Block>
  );
}
