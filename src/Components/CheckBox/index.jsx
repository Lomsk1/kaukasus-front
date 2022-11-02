import styled from "styled-components";

function Checkbox({ label, topSize }) {
  return (
    <Div marginTop={topSize}>
      <input id='1' type='checkbox' />
      <label htmlFor='1'>{label}</label>
    </Div>
  );
}

export default Checkbox;

const Div = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  margin-top: ${props => props.marginTop || "0"};
  input {
    margin-left: 3em;
    cursor: pointer;
  }
  label {
    margin-left: 1em;
    color: rgb(1, 61, 91);
    font-size: 1rem;
    cursor: pointer;
  }
`;
