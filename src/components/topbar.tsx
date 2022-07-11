import React, { useCallback, useState } from "react";

import { Block } from "baseui/block";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import { HeadingLarge, LabelMedium } from "baseui/typography";

import Select from "./select";
import Input from "./input";
import Button from "./button";
import { cryptoCurrencies, fiatCurrencies } from "../config/application";
import SelectOption from "./select-option";
import api from "../services/api";

import { useSnackbar } from "baseui/snackbar";

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
  const { enqueue } = useSnackbar();
  const [currencyFrom, setCurrencyFrom] = useState([]);
  const [amountFrom, setAmountFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState([]);
  const [amountTo, setAmountTo] = useState();

  const requestNewExchange = useCallback(() => {
    const [currencyFromOption = { name: "" }] = currencyFrom;
    const [currencyToOption = { name: "" }] = currencyTo;

    const payload = {
      currencyFrom: currencyFromOption?.name,
      amountFrom: Number(amountFrom || 0),
      currencyTo: currencyToOption?.name,
      amountTo: Number(amountTo || 0),
    };

    api
      .post("/", payload)
      .then(() => {
        setCurrencyFrom([]);
        setAmountFrom(undefined);
        setCurrencyTo([]);
        setAmountTo(undefined);

        enqueue({
          message: "Exchange submitted.",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currencyFrom, amountFrom, currencyTo, amountTo]);

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
          <Select
            label="Currency from"
            options={cryptoCurrencies}
            labelKey="name"
            valueKey="name"
            getOptionLabel={(props) => <SelectOption {...props} />}
            getValueLabel={(props) => <SelectOption {...props} />}
            onChange={({ value }) => setCurrencyFrom(value)}
            value={currencyFrom}
          />
        </FlexGridItem>

        <FlexGridItem {...inputOverrides}>
          <Input
            type="number"
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
          <Select
            label="Currency To"
            options={fiatCurrencies}
            labelKey="name"
            valueKey="name"
            getOptionLabel={(props) => <SelectOption {...props} />}
            getValueLabel={(props) => <SelectOption {...props} />}
            onChange={({ value }) => setCurrencyTo(value)}
            value={currencyTo}
          />
        </FlexGridItem>

        <FlexGridItem {...inputOverrides}>
          <Input
            type="number"
            label="Amount To"
            placeHolder="amount"
            value={amountTo}
            onChange={(value) => {
              setAmountTo(value);
            }}
          />
        </FlexGridItem>

        <FlexGridItem>
          <Button label="SAVE" onClick={requestNewExchange} />
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
}
