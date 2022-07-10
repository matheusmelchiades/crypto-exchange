import React, { useEffect, useState } from "react";

import { Block } from "baseui/block";

import "./app.css";
import Topbar from "./components/topbar";
import { HeadingSmall, LabelMedium } from "baseui/typography";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import Select from "./components/select";
import Button from "./components/button";
import DatePicker from "./components/datepicker";
import Table from "./components/table";
import { convertDate } from "./components/utils";
import api from "./services/api";

const TYPE_DATA = {
  live_price: "Live Price",
  exchanged: "exchanged",
};

const config = [
  {
    label: "Date & Time",
    field: "timestamp",
    renderRow: (row: any) => <p>{convertDate(row.timestamp)}</p>,
  },
  {
    label: "Currency From",
    field: "currencyFrom",
  },
  {
    label: "Amount 1",
    field: "amountFrom",
  },
  {
    label: "Currency To",
    field: "currencyTo",
  },
  {
    label: "Amount 2",
    field: "amountTo",
  },
  {
    label: "Type",
    field: "amountTo",
    renderRow: (row: any) => (
      <LabelMedium
        color={row.type === "live_price" ? "primaryA" : "primaryB"}
        $style={{
          fontWeight: "700",
        }}
      >
        <p>{TYPE_DATA[(row.type as "live_price" | "exchanged") || ""]}</p>
      </LabelMedium>
    ),
  },
];

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: allData = [] } = await api.get("/");

      setData(allData);
    })();
  }, []);

  return (
    <Block>
      <Topbar />

      <Block padding="52px 120px 45px 222px">
        <HeadingSmall>History</HeadingSmall>

        <Block>
          <FlexGrid
            flexGridColumnCount={6}
            flexGridColumnGap="scale800"
            flexGridRowGap="scale800"
            alignItems="end"
          >
            <FlexGridItem>
              <DatePicker label="From date" />
            </FlexGridItem>

            <FlexGridItem>
              <DatePicker label="To date" />
            </FlexGridItem>

            <FlexGridItem>
              <Select
                label="Type"
                options={[
                  { id: 0, label: "Live price", value: "live_price" },
                  { id: 1, label: "Exchanged", value: "exchanged" },
                ]}
                placeHolder="type"
                labelKey="label"
                valueKey="value"
              />
            </FlexGridItem>

            <FlexGridItem>
              <Button label="Filter" color="secondary" />
            </FlexGridItem>
          </FlexGrid>

          <Block marginTop="45px">
            <Table data={data} config={config} />
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
