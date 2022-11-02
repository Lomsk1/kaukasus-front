import styled from "styled-components";

function DayRemainder({ label }) {
  return (
    <MainDiv>
      <label htmlFor='day'>{label}</label>
      <input type='number' name='day' id='day' />
    </MainDiv>
  );
}

export default DayRemainder;

const MainDiv = styled.div`
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
    width: 1rem;
    color: rgb(1, 61, 91);
    font-size: 1rem;
    cursor: pointer;
    outline: none;
  }
`;
