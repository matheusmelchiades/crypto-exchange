import React from "react";
import { DatePicker as DatePickerComponent } from "baseui/datepicker";

import { LabelMedium } from "baseui/typography";
import { Block } from "baseui/block";

interface DatePickerPropsI {
  label?: string;
  value?: Date;
  onChange?: (date?: Date) => any;
}

export default function DatePicker({
  label,
  value,
  onChange,
}: DatePickerPropsI) {
  const isGreater = (date: Date, target: Date) => {
    return date.getTime() < target.getTime();
  };

  const isEqualNow = (date: Date) => {
    return toZeroTime(date).getTime() === toZeroTime(new Date()).getTime();
  };

  const toZeroTime = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const getBackgroundColor = (
    theme: any,
    date: Date,
    outsideMonth: boolean = false
  ): string => {
    if (!value && isEqualNow(date))
      return theme.colors.calendarDayBackgroundSelectedHighlighted;

    return !outsideMonth && isGreater(date, new Date()) && !isEqualNow(date)
      ? theme.colors.backgroundPrimary
      : "transparent";
  };

  const getColor = (
    theme: any,
    date: Date,
    selected: boolean = false
  ): string => {
    if ((!value && isEqualNow(date)) || (value && selected))
      return theme.colors.textPrimaryContrast;

    return theme.colors.textPrimary;
  };

  const hasEvent = (...events: boolean[]): boolean => {
    return events.some((e) => !!e);
  };

  const borderColor = (...events: boolean[]) => {
    return hasEvent(...events) ? "black" : "transparent";
  };

  return (
    <Block>
      <LabelMedium
        color="textSecondary"
        $style={{ textTransform: "capitalize" }}
      >
        {label}
      </LabelMedium>
      <DatePickerComponent
        value={value}
        onChange={({ date }) => onChange?.(date as Date)}
        formatString="dd/MM/yyyy"
        placeholder="dd / mm / yyyy"
        trapTabbing
        overrides={{
          Input: {
            props: {
              overrides: {
                Root: {
                  style: ({ $theme }: any) => ({
                    borderRadius: $theme.borders.radius300,
                  }),
                },
              },
            },
          },
          Day: {
            style: ({
              $theme,
              $selected,
              $isHovered,
              $isHighlighted,
              $date,
              $outsideMonth,
            }: any) => ({
              borderRadius: $theme.sizing.scale300,
              color: getColor($theme, $date, $selected),
              backgroundColor: !$outsideMonth
                ? (getBackgroundColor($theme, $date, $outsideMonth) as string)
                : "",
              border:
                $date &&
                !$outsideMonth &&
                (!isGreater($date, new Date()) || isEqualNow($date))
                  ? "1px solid black"
                  : "none",

              pointerEvents:
                !isEqualNow($date) && isGreater($date, new Date())
                  ? "none"
                  : "auto",
              margin: $theme.sizing.scale0,
              "::after": {
                backgroundColor: !$outsideMonth
                  ? (getBackgroundColor($theme, $date) as string)
                  : "transparent",
                borderRadius:
                  $isHovered || $selected || $isHighlighted
                    ? $theme.sizing.scale300
                    : "",
                borderLeftColor: borderColor(
                  $isHovered,
                  $selected,
                  $isHighlighted
                ),
                borderRightColor: borderColor(
                  $isHovered,
                  $selected,
                  $isHighlighted
                ),
                borderTopColor: borderColor(
                  $isHovered,
                  $selected,
                  $isHighlighted
                ),
                borderBottomColor: borderColor(
                  $isHovered,
                  $selected,
                  $isHighlighted
                ),
              },
            }),
          },
        }}
      />
    </Block>
  );
}
