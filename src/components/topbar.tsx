import React, { useState } from "react";

import { Block } from "baseui/block";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import { HeadingLarge, LabelMedium } from "baseui/typography";

import Select from "./select";
import Input from "./input";
import Button from "./button";

const inputOverrides = {
  overrides: {
    Block: {
      style: ({ $theme }: any) => ({
        width: `calc((100% - ${$theme.sizing.scale800}) / 6)`,
        flexGrow: 0,
      }),
    },
  },
};

export default function Topbar() {
  const [amountFrom, setAmountFrom] = useState();
  const [amountTo, setAmountTo] = useState();

  return (
    <Block
      $style={{
        boxShadow: "0px 8px 16px rgba(17, 17, 17, 0.06)",
      }}
      padding="60px 120px 45px 222px"
    >
      <HeadingLarge>Exchange</HeadingLarge>

      <FlexGrid
        flexGridColumnCount={6}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
        alignItems="end"
      >
        <FlexGridItem>
          <Select label="Currency from" options={[]} labelKey="" valueKey="" />
        </FlexGridItem>

        <FlexGridItem {...inputOverrides}>
          <Input
            label="Amount from"
            placeHolder="amount"
            value={amountFrom}
            onChange={(value) => {
              setAmountFrom(value);
            }}
          />
        </FlexGridItem>

        <FlexGridItem
          overrides={{
            Block: {
              style: () => ({
                width: 0,
              }),
            },
          }}
        >
          <LabelMedium $style={{ textAlign: "center" }}>
            <p>{"="}</p>
          </LabelMedium>
        </FlexGridItem>

        <FlexGridItem>
          <Select label="Currency To" options={[]} labelKey="" valueKey="" />
        </FlexGridItem>

        <FlexGridItem {...inputOverrides}>
          <Input
            label="Amount To"
            placeHolder="amount"
            value={amountTo}
            onChange={(value) => {
              setAmountTo(value);
            }}
          />
        </FlexGridItem>

        <FlexGridItem>
          <Button label="SAVE" />
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
}
