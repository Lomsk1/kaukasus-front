import styled from "styled-components";
import { useState } from "react";
import propTypes from "prop-types";

function AGBTermShowAdmin({ id, description, onEdit }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{description}</td>
        <td>
          <MainButton
            onClick={() => {
              onEdit(id);
              setOpen(!open);
            }}
            type='submit'
          >
            Edit
          </MainButton>
        </td>
      </tr>
    </>
  );
}

export default AGBTermShowAdmin;

const MainButton = styled.button`
  width: 7rem;
  height: 2rem;
  margin: 0.2em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #2828e4;
  color: white;
  @media (max-width: 560px) {
    width: 100%;
  }
  &:hover {
    background-color: #0606a7;
    transition: 700ms;
  }
  &:last-child {
    background-color: red;
    &:hover {
      background-color: #ad0202;
      transition: 700ms;
    }
  }
`;

AGBTermShowAdmin.propTypes = {
  id: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
};
