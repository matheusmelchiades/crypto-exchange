import React from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { LabelMedium } from "baseui/typography";

type TableConfig = {
  label: string;
  field?: string;
  renderRow?: (row: any) => any;
};

interface TablePropsI {
  config: TableConfig[];
  data: any[];
}

export default function Table({ config, data }: TablePropsI) {
  return (
    <TableBuilder
      data={data}
      overrides={{
        Table: {
          style: () => ({
            borderCollapse: "collapse",
          }),
        },
        TableHeadCell: {
          style: ({ $theme }: any) => ({
            backgroundColor: $theme.colors.backgroundPrimary,
            border: "none",
            ":first-child": {
              borderTopLeftRadius: $theme.sizing.scale100,
              borderBottomLeftRadius: $theme.sizing.scale100,
            },
            ":last-child": {
              borderTopRightRadius: $theme.sizing.scale100,
              borderBottomRightRadius: $theme.sizing.scale100,
            },
          }),
        },
        TableBodyCell: {
          style: ({ $theme }: any) => ({
            border: "none",
            ":first-child": {
              borderTopLeftRadius: $theme.sizing.scale100,
              borderBottomLeftRadius: $theme.sizing.scale100,
            },
            ":last-child": {
              borderTopRightRadius: $theme.sizing.scale100,
              borderBottomRightRadius: $theme.sizing.scale100,
            },
          }),
        },
        TableBodyRow: {
          style: ({ $theme, $rowIndex }: any) => ({
            borderRadius: $theme.sizing.scale100,
            backgroundColor:
              $rowIndex % 2
                ? $theme.colors.backgroundPrimary
                : $theme.colors.backgroundSecondary,
            ":hover": {
              border: "1px solid black",
              ":nth-child(even)": {
                backgroundColor: $theme.colors.backgroundPrimary,
              },
              ":nth-child(odd)": {
                backgroundColor: $theme.colors.backgroundSecondary,
              },
            },
          }),
        },
      }}
    >
      {config.map((config) => (
        <TableBuilderColumn header={config.label}>
          {typeof config.renderRow === "function"
            ? config.renderRow
            : (row) => (
                <LabelMedium>
                  <p>{row?.[config?.field || ""] || ""}</p>
                </LabelMedium>
              )}
        </TableBuilderColumn>
      ))}
    </TableBuilder>
  );
}
