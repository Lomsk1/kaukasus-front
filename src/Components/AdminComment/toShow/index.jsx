import styled from "styled-components";
import propTypes from "prop-types";

function ShowComment({
  id,
  name,
  lastName,
  body,
  onDelete,
  onEdit,
  tour,
}) {
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{lastName}</td>
        <td>{body}</td>
        <td>{tour}</td>
        <td>
          <MainButton
            onClick={() => {
              onEdit(id);
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

export default ShowComment;

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

ShowComment.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  tour: propTypes.number.isRequired,
};
