import { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import AuthContext from "../../Hoc/authContext";
import AboutCountryShowAdmin from "./show";

function AdminTableAboutCountry({ data, reload }) {
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
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/country_info/put/${userId}`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    setOpen(false);

    reset();

    reload();
  };

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(data => (
              <AboutCountryShowAdmin
                key={data.id}
                id={data.id}
                country={data.country_name}
                title={data.title}
                description={data.description}
                onEdit={putClick}
              />
            ))}
        </tbody>
      </Table>

      {open && (
        <Module>
          <div className='h2'>
            <h2>Edit Countries</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Inputs
              type={"text"}
              placeholder={"Enter Title"}
              {...register("title", {
                required: true,
              })}
            />
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

export default AdminTableAboutCountry;

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
