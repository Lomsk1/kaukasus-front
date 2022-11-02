import styled from "styled-components";
import { useState } from "react";
import propTypes from "prop-types";

function ShowMemberAdmin({id, name, lastName, description, image, onDelete, onEdit}) {
    const [open, setOpen] = useState(false);

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{lastName}</td>
        <td>{description}</td>
        <td>
          <img src={`${process.env.REACT_APP_BASE_URL + image}`} alt='img not found' />
        </td>
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
          <MainButton onClick={() => onDelete(id)}>Delete</MainButton>
        </td>
      </tr>
    </>
  );
}

export default ShowMemberAdmin;


const MainButton = styled.button`
  width: 7rem;
  height: 2rem;
  margin: 0.2em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #2828e4;
  color: white;
  @media (max-width: 560px){
   width: 100% 
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

ShowMemberAdmin.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
}