import { Block } from "baseui/block";
import { LabelLarge } from "baseui/typography";

export default function SelectOption({ option }: any) {
  return (
    <Block display="flex" flexDirection="row" alignItems="center" padding="0px 8px">
      {option?.url && <img src={option.url} alt="any" width={24} height={24} />}
      <LabelLarge marginLeft="16px">{option?.name}</LabelLarge>
    </Block>
  );
}
