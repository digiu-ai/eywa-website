import styled from "@emotion/styled";

const Button = styled.div<{ primary?: boolean }>`
  height: 48px;
  border: 1px solid ${({ primary }) => (primary ? "#3BC199" : "#ffffff")};
  background: ${({ primary }) => (primary ? "#3BC199" : "transparent")};
  ${({ primary }) =>
    primary &&
    "box-shadow: -11.09px 18.13px 36.6483px rgba(62, 188, 158, 0.4)"};
  ${({ primary }) =>
    !primary &&
    "filter: drop-shadow(-11.09px 18.13px 36.6483px rgba(62, 188, 158, 0.4))"};
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 54px;
`;

export default Button;
