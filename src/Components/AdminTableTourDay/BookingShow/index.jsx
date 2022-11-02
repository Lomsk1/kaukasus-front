import styled from "styled-components";
import { useState } from "react";
import propTypes from "prop-types";

function BookingShow({ id, start, end, price, tour, img, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{start}</td>
        <td>{end}</td>
        <td>{price}</td>
        <td>{tour}</td>
        <td>
          <img src={process.env.REACT_APP_BASE_URL + img} alt='img not found' />
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

export default BookingShow;

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

BookingShow.propTypes = {
  id: propTypes.number.isRequired,
  start: propTypes.string.isRequired,
  end: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  tour: propTypes.number.isRequired,
};
