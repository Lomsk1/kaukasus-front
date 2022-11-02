import styled from "styled-components";
import { useState } from "react";
import propTypes from "prop-types";

function ShowToursAdmin({
  id,
  title,
  duration,
  description,
  thumbnail,
  tag,
  onDelete,
  onEdit,
  country,
  onAddTourDay,
  maxParticipant,
  minParticipant,
  position,
  onTourShow,
  onBookAdd,
  onBookShow,
  onGet,
  onAddComment,
  onAddServices,
  onShowServices,
  onHighlights,
  language,
  execution,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{duration}</td>
        <td>{country}</td>
        <td>{description}</td>
        <td>{language}</td>
        <td>{execution}</td>
        <td>{minParticipant}</td>
        <td>{maxParticipant}</td>
        <td>{tag}</td>
        <td>
          <img src={ process.env.REACT_APP_BASE_URL + thumbnail} alt='img not found' />
        </td>
        {position === "general" && (
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
            <MainButton onClick={() => onAddTourDay(id)}>
              Each Day Add
            </MainButton>
            <MainButton onClick={() => onAddServices(id)}>
              Services Add
            </MainButton>
            <MainButton onClick={() => onShowServices(id)}>
              Services Show
            </MainButton>
          </td>
        )}
        {position === "days" && (
          <td>
            <MainButton
              onClick={() => {
                onTourShow(id);
                setOpen(!open);
              }}
              type='submit'
            >
              Tour Days Show
            </MainButton>
            <MainButton
              onClick={() => {
                onBookShow(id);
              }}
              type='submit'
            >
              Booking Show
            </MainButton>
            <MainButton
              onClick={() => {
                onBookAdd(id);
              }}
              type='submit'
            >
              Booking Add
            </MainButton>
          </td>
        )}
        {position === "comment" && (
          <td>
            <MainButton type='submit' onClick={() => onGet(id)}>
              Comment Show
            </MainButton>
            <MainButton onClick={() => onAddComment(id)}>
              Comment Add
            </MainButton>
          </td>
        )}
        {position === "highlights" && (
          <td>
            <MainButton type='submit' onClick={() => onHighlights(id)}>
              Highlights Show & Add
            </MainButton>
          </td>
        )}
      </tr>
    </>
  );
}

export default ShowToursAdmin;

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
  &:nth-child(3) {
    background-color: #d42e04;
    &:hover {
      background-color: #bb2601;
      transition: 700ms;
    }
  }
  &:nth-child(4) {
    background-color: red;
    &:hover {
      background-color: #ad0202;
      transition: 700ms;
    }
  }
  &:last-child {
    background-color: red;
    &:hover {
      background-color: #ad0202;
      transition: 700ms;
    }
  }
`;

ShowToursAdmin.propTypes = {
  id: propTypes.number.isRequired,
  country: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
  minParticipant: propTypes.number.isRequired,
  maxParticipant: propTypes.number.isRequired,
  tag: propTypes.number.isRequired,
};
