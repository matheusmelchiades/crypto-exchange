import { Block } from "baseui/block";
import { LabelLarge } from "baseui/typography";

interface ToastPropsI {
  label?: string;
}

export default function Feedback({ label }: ToastPropsI) {
  return (
    <Block
      position="fixed"
      bottom="0"
      width="100%"
      height="48px"
      backgroundColor="rgba(73, 205, 94, 1)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LabelLarge color="white" $style={{ fontWeight: "700px" }}>
        {label}
      </LabelLarge>
    </Block>
  );
}
