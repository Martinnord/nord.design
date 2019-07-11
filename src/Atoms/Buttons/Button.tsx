import styled from "styled-components";

interface Props {
  width?: string | number;
  gutter?: string;
}

export const Button = styled.button<Props>`
  display: block;
  width: ${props => props.width || "100%"};
  padding: 6pt 20pt;
  border-radius: 2px;
  line-height: 1.7;
  font-weight: 400;
  transition: 0.3s;
  text-decoration: none;
  text-align: center;
  letter-spacing: 1px;
  margin: ${props => props.gutter};
  border: 1px solid #bdbdbd;
  background: #fff;
  cursor: pointer;
  color: #000;
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
    background: #bdbdbd;
  }
`;
