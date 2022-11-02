import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import AuthContext from "../../Hoc/authContext";
import ShowComment from "./toShow";

function AdminTableComment({ comment, deleteClick, tourID }) {
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

    formData.append("body", data.body);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("tour", tourID);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/comments/put/${userId}/`,
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
            <th>LastName</th>
            <th>Comment</th>
            <th>IMG</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comment &&
            comment.map(comment => (
              <ShowComment
                key={comment.id}
                id={comment.id}
                name={comment.first_name}
                lastName={comment.last_name}
                body={comment.body}
                tour={comment.tour}
                onDelete={deleteClick}
                onEdit={putClick}
              />
            ))}
        </tbody>
      </Table>
      {open && (
        <Module>
          <div className='h2'>
            <h2>Edit Them</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Textarea
              placeholder={"Enter Comment..."}
              {...register("body", {
                required: true,
              })}
            />
            <Inputs
              type={"text"}
              placeholder={"Enter First Name"}
              {...register("first_name", {
                required: true,
              })}
            />
            <Inputs
              type={"text"}
              placeholder={"Enter Last Name"}
              {...register("last_name", {
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

export default AdminTableComment;

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
  width: 100%;
  height: 20rem;
  display: flex;
  .h2 {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 60%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
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
const Textarea = styled.textarea`
  margin: 1em;
  width: 15rem;
  height: 6rem;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  background-color: #d4d3d3;
  text-align: center;
  resize: none;
  :focus {
    border: 2px solid #00ff00;
  }
`;
