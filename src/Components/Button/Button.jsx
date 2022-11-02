import styled from "styled-components";

function Button(props) {
  return <MainButton {...props} />;
}

export default Button;

const MainButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  background-color: #f8c2c2;
  border: 1px solid black;
  border-radius: 10px;
  margin: ${props => props.margin};
  cursor: pointer;
  :hover {
    background-color: #fa8989;
    transition: 700ms;
  }
`;
