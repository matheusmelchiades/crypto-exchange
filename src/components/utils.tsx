import theme from "../config/theme";

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const getColorByKind = (kind: string, colorName: string) => {
  const kind_tag = "$kind";
  const kindCaptilize = capitalizeFirstLetter(kind);

  return (theme.colors as any)[colorName.replace(kind_tag, kindCaptilize)];
};

export function convertDate(
  dateString: string,
  format = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  } as Intl.DateTimeFormatOptions
) {
  const formatter = new Intl.DateTimeFormat([], format);
  const date = new Date(dateString);

  return formatter.format(date);
}
