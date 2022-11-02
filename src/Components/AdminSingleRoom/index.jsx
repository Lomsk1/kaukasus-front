import { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import AuthContext from "../../Hoc/authContext";
import SingleRoomShowAdmin from "./show";

function AdminTableSingleRoom({ data, reload }) {
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

    formData.append("description", data.description);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/single_room/put/${userId}/`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    setOpen(false);
    reload();

    reset();
  };

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(data => (
              <SingleRoomShowAdmin
                key={data.id}
                id={data.id}
                description={data.description}
                onEdit={putClick}
              />
            ))}
        </tbody>
      </Table>

      {open && (
        <Module>
          <div className='h2'>
            <h2>Edit Single Room</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Textarea
              placeholder={"Enter Description"}
              {...register("description", {
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

export default AdminTableSingleRoom;

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
