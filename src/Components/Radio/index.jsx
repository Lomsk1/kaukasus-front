import styled from "styled-components";

function Radio({ label, topSize, value, onChange,onClick }) {
  return (
    <Div marginTop={topSize}>
      <input
        id={label}
        type='checkbox'
        defaultValue={value}
        name='filter'
        onChange={onChange}
        onClick={onClick}
      />
      <label htmlFor={label}>{label}</label>
    </Div>
  );
}

export default Radio;

const Div = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  margin-top: ${props => props.marginTop || "0"};
  @media (max-width: 800px) {
      width: max-content;
      height: max-content;
      min-height: 2rem;
  }
  input {
    margin-left: 3em;
    cursor: pointer;
    appearance: none;
  }
  label {
    margin-left: 1em;
    color: rgb(1, 61, 91);
    font-size: 1rem;
    cursor: pointer;
  }
`;
