import { Block } from "baseui/block";
import { DURATION, PLACEMENT } from "baseui/snackbar";
import { LabelLarge } from "baseui/typography";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  placement: PLACEMENT.bottom,
  defaultDuration: DURATION.short,
  overrides: {
    Root: {
      component: ({ children }: any) => {
        return (
          <Block
            width="100vw"
            height="48px"
            backgroundColor="rgba(73, 205, 94, 1)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginBottom="-16px"
          >
            {children}
          </Block>
        );
      },
    },
    Content: {
      component: ({ children }: any) => <Block>{children}</Block>,
    },
    Message: {
      component: ({ children }: any) => (
        <LabelLarge color="white" $style={{ fontWeight: "700" }}>
          {children}
        </LabelLarge>
      ),
    },
  },
};
