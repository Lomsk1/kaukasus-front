import styled from "styled-components";
import { useState } from "react";
import propTypes from "prop-types";

function ShowServicesAdmin({
  id,
  achievements,
  tour,
  not,
  onDelete,
  onEdit
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{achievements}</td>
        <td>{not}</td>
        <td>{tour}</td>

        <td>
          <MainButton
            onClick={() => {
              onEdit(id,tour);
              setOpen(!open);
            }}
            type='submit'
          >
            Edit
          </MainButton>
          <MainButton onClick={() => onDelete(id)}>Delete</MainButton>
        </td>
      </tr>
    </>
  );
}

export default ShowServicesAdmin;

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

ShowServicesAdmin.propTypes = {
  id: propTypes.number.isRequired,
  achievements: propTypes.string.isRequired,
  not: propTypes.string.isRequired,
  tour: propTypes.number.isRequired,
};
