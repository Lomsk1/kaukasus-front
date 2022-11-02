import styled from "styled-components";
import propTypes from "prop-types";

function Infos({start, end, price, contactHandler, bookingHandler, id, availability}) {
  return (
    <>
      <tr>
        <td>{start}</td>
        <td>{end}</td>
        <td>from EUR {price}</td>
        <td>
          <img src={process.env.REACT_APP_BASE_URL + availability} alt='img not found' />
        </td>
        <td>
          <MainButton onClick={() => bookingHandler(id)}>Buchen</MainButton>
          <MainButton onClick={contactHandler}>Nachricht senden</MainButton>
        </td>
      </tr>
    </>
  );
}

export default Infos;

const MainButton = styled.button`
  width: 7rem;
  height: 2rem;
  margin: 0.2em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #2828e4;
  color: white;
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

Infos.propTypes = {
  start: propTypes.string.isRequired,
  end: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};
