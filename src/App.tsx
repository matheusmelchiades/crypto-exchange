import React, { useEffect, useState } from "react";

import { Block } from "baseui/block";

import "./app.css";
import { HeadingSmall, LabelMedium } from "baseui/typography";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import Select from "./components/select";
import Button from "./components/button";
import DatePicker from "./components/datepicker";
import Table from "./components/table";
import Topbar from "./components/topbar";
import { convertDate } from "./components/utils";

import api from "./services/api";
import socket from "./services/socket";
import { typeExchangeOptions } from "./config/application";

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

  const [filter, setFilter] = useState<{
    type: { id: number; name: string; value: string }[];
    fromDate: Date;
    toDate: Date;
  }>({} as any);

  const requestData = async (params = {}) => {
    try {
      const { data: allData = [] } = await api.get("/", {
        params,
      });

      setData(allData);
    } catch (err) {
      setData([]);
    }
  };

  const handleUpdateFilter = (field: string, value: any) => {
    setFilter((prev) => {
      return Object.assign({}, prev, { [field]: value });
    });
  };

  const handleRequestByFilter = () => {
    const [typeOption] = filter.type as any[];
    const fromDate = filter?.fromDate?.toISOString();
    const toDate = filter?.toDate?.toISOString();

    requestData({
      fromDate,
      toDate,
      type: typeOption?.value,
    })
      .then()
      .catch();
  };

  useEffect(() => {
    const pathSocket = "update";
    requestData().then().catch();

    socket.on(pathSocket, () => {
      requestData().then().catch();
    });

    return () => {
      socket.off(pathSocket);
    };
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
              <DatePicker
                label="From date"
                onChange={(date) => handleUpdateFilter("fromDate", date)}
                value={filter.fromDate}
              />
            </FlexGridItem>

            <FlexGridItem>
              <DatePicker
                label="To date"
                onChange={(date) => handleUpdateFilter("toDate", date)}
                value={filter.toDate}
              />
            </FlexGridItem>

            <FlexGridItem>
              <Select
                label="Type"
                options={typeExchangeOptions}
                placeHolder="type"
                labelKey="name"
                valueKey="value"
                onChange={({ value }) => handleUpdateFilter("type", value)}
                value={filter.type}
              />
            </FlexGridItem>

            <FlexGridItem>
              <Button
                label="Filter"
                color="secondary"
                onClick={handleRequestByFilter}
              />
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
