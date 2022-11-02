import styled from "styled-components";
import propTypes from "prop-types";

function ToursAdmin({
  id,
  title,
  duration,
  description,
  thumbnail,
  onTourDayShow,
  country,
  tag,
  maxParticipant,
  minParticipant,
}) {
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{country}</td>
        <td>{title}</td>
        <td>{duration}</td>
        <td>{description}</td>
        <td>{minParticipant}</td>
        <td>{maxParticipant}</td>
        <td>{tag}</td>
        <td>
          <img src={process.env.REACT_APP_BASE_URL + thumbnail} alt='img not found' />
        </td>
        <td>
          <MainButton
            onClick={() => {
              onTourDayShow(id);
            }}
            type='submit'
          >
            Every Day
          </MainButton>
        </td>
      </tr>
    </>
  );
}

export default ToursAdmin;

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

ToursAdmin.propTypes = {
  id: propTypes.number.isRequired,
  country: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  minParticipant: propTypes.number.isRequired,
  maxParticipant: propTypes.number.isRequired,
  tag: propTypes.number.isRequired,
  thumbnail: propTypes.string.isRequired,
};
