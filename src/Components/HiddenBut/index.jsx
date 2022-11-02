import styled from "styled-components";

function HiddenBut({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default HiddenBut;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: red;
`;
