import styled from "styled-components";
import { useState } from "react";
import propTypes from "prop-types";

function ShowGalleryAdmin({
  id,
  title,
  description,
  image,
  onDelete,
  onEdit,
  onShowBlog,
  addBlog,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <img src={process.env.REACT_APP_BASE_URL + image} alt='img not found' />
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
          <MainButton onClick={() => onShowBlog(id)}>Show Blog</MainButton>
          <MainButton onClick={() => addBlog(id)}>Add Blog</MainButton>
        </td>
      </tr>
    </>
  );
}

export default ShowGalleryAdmin;

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
    background-color: red;
    &:hover {
      background-color: #ad0202;
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
`;

ShowGalleryAdmin.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
