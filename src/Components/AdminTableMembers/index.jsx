import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import ShowMemberAdmin from "./ToShowThem";
import AuthContext from "../../Hoc/authContext";

function AdminTableMember({ members, isLoadingMembers, deleteClick }) {
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

    const reader = new FileReader();
    reader.readAsDataURL(data.avatar[0]);

    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("description", data.description);
    formData.append("avatar", data.avatar[0]);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/employees/put/${userId}/`,
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
            <th>Description</th>
            <th>IMG</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoadingMembers &&
            members.map(member => (
              <ShowMemberAdmin
                key={member.id}
                id={member.id}
                name={member.first_name}
                lastName={member.last_name}
                description={member.description}
                image={member.avatar}
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
            <Inputs
              type={"text"}
              placeholder={"Enter Name"}
              {...register("first_name", {
                required: true,
              })}
            />
            <Inputs
              type={"text"}
              placeholder={"Enter LastName"}
              {...register("last_name", {
                required: true,
              })}
            />
            <Textarea
              placeholder={"Enter Description"}
              {...register("description", {
                required: true,
              })}
            />
            <Inputs
              type={"file"}
              accept='image/png, image/jpg, image/gif, image/jpeg'
              {...register("avatar", {
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

export default AdminTableMember;

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
