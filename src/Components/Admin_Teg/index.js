import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import TagAdmin from "./ToShow";
import AuthContext from "../../Hoc/authContext";

function AdminTableTeg({ tags, isLoadingTags, deleteClick }) {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const { authTokens } = useContext(AuthContext);

  const putClick = id => {
    setUserId(id);
    setOpen(!open);
  };

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();

    formData.append("name", data.name);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/tag/put/${userId}/`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    reset();
    setOpen(false);
  };

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoadingTags &&
            tags.map(member => (
              <TagAdmin
                key={member.id}
                id={member.id}
                name={member.name}
                onDelete={deleteClick}
                onEdit={putClick}
              />
            ))}
        </tbody>
      </Table>
      {open && (
        <Module>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Inputs
              type={"text"}
              placeholder={"Enter Name"}
              {...register("name", {
                required: true,
              })}
            />
            <Button type='submit' margin={"1em"}>
              Submit
            </Button>
          </form>
        </Module>
      )}
    </Fragment>
  );
}

export default AdminTableTeg;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #eb8686;
  tr {
    border-bottom: 1px solid black;
    &:nth-child(even) {
      background-color: blue;
    }
  }
  td,
  th {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  td:last-child {
    display: flex;
    flex-direction: column;
  }
`;
const Module = styled.div`
  width: 60%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
const Inputs = styled.input`
  margin: 1em;
  width: 15rem;
  height: 2rem;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  background-color: #d4d3d3;
  text-align: center;
  :focus {
    border: 2px solid #00ff00;
  }
  &[type="file"] {
    width: 15rem;
    height: min-content;
  }
`;
