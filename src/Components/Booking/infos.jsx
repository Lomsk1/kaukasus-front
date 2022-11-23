import styled from "styled-components";
import propTypes from "prop-types";

function Infos({start, end, date, price, contactHandler, bookingHandler, id, availability}) {
  return (
    <>
      <tr>
        {/* <td>{start}</td>
        <td>{end}</td> */}
        <td className="pad">{date}</td>
        <td>ab EUR {price}</td>
        <td>
          <img src={process.env.REACT_APP_BASE_URL + availability} alt='img not found' />
        </td>
        <td>
          <MainButton onClick={() => bookingHandler(id)}>Buchen</MainButton>
          <MainButton onClick={contactHandler}>Anfragen</MainButton>
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
  background-color: #7B952C;
  color: white;
  &:hover {
    background-color: #55681c;
    transition: 700ms;
  }
  &:last-child {
    background-color: #ffb703;
    color: black;
    &:hover {
      background-color: #c58f05;
      transition: 700ms;
    }
  }
.pad {
  width: max-content;
}
`;

Infos.propTypes = {
  // start: propTypes.string.isRequired,
  // end: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};
