import styled, { DefaultTheme, ThemedStyledProps, css } from "styled-components";
import { RootStyleProps } from "./Button.types";

function getKindStyles({ kind, theme }: ThemedStyledProps<RootStyleProps, DefaultTheme>) {
  const { colors } = theme;
  switch (kind) {
    case 'primary':
      return css`
        background: ${colors.accent};
        color: ${colors.white};
        
        &:hover {
          border: 1px solid ${colors.accent};
          background: ${colors.white};
          color: ${colors.accent};
        }
      `
    case 'secondary':
      return css`
        background: ${colors.black};
        color: ${colors.white};
        &:hover {
          border: 1px solid ${colors.black};
          background: ${colors.white};
          color: ${colors.black};
        }
      `
    case 'ghost':
      return css`
        background: ${colors.gray};
        color: ${colors.white};
        border: 1px solid ${colors.gray};
      `
  }
}

const Root = styled.button<RootStyleProps>`
  ${(props) => getKindStyles(props)}
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 18px;
  border: 0;
  gap: 10px;
  cursor: pointer;
`;

export { Root };