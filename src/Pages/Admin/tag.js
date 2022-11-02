import { Fragment, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import { getTags } from "../../Components/Tags/tag-actions";
import AdminTableTeg from "../../Components/Admin_Teg";
import AuthContext from "../../Hoc/authContext";

function AdminTag() {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);

  const data = useSelector(state => state.tag);
  const navigate = useNavigate();
  const { authTokens, logoutUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();

    formData.append("name", data.name);

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tag/post/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    });

    setReload(!reload);

    reset();
  };

  const { tagData, isLoading } = useSelector(state => state.tag);

  const deleteTag = async id => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tag/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    setReload(!reload);
  };

  const changeTag = async id => {
    console.log(id);
  };

  const refreshHandler = e => {
    dispatch(getTags());
    setReload(!reload);
  };

  useEffect(() => {
    dispatch(getTags());
  }, [reload, dispatch]);

  const tourGetHandler = () => {
    navigate("/admin/tours");
  };
  const memberGetHandler = () => {
    navigate("/admin/members");
  };
  const photoGetGHandler = () => {
    navigate("/admin/photo_blog");
  };
  const tourDayGHandler = () => {
    navigate("/admin/tour_day");
  };
  const tagHandler = () => {
    navigate("/admin/tag");
  };
  const commentHandler = () => {
    navigate("/admin/comment");
  };
  const highlightHandler = () => {
    navigate("/admin/highlight");
  }
  const agbHandler = () => {
    navigate("/admin/term");
  }
  const countryAboutHandler = () => {
    navigate("/admin/country_about");
  }
  const singleRoomsHandler = () => {
    navigate("/admin/single_room");
  };

  return (
    <Fragment>
      <MainSection>
        <LeftSide>
          <div>
            <ul>
              <li onClick={tourGetHandler}>Tour</li>
              <li onClick={memberGetHandler}>Member</li>
              <li onClick={photoGetGHandler}>photo Blog</li>
              <li onClick={tourDayGHandler}>Tour Day</li>
              <li onClick={tagHandler}>Tags</li>
              <li onClick={commentHandler}>Comment</li>
              <li onClick={highlightHandler}>Highlights</li>
              <li onClick={agbHandler}>AGB</li>
              <li onClick={countryAboutHandler}>About Country </li>
              <li onClick={singleRoomsHandler}>Single Rooms </li>
            </ul>
          </div>
          <div>
            <ul>
              <Button onClick={logoutUser}>Log Out</Button>
            </ul>
          </div>
        </LeftSide>
        <RightSide>
          <RightDiv>
            {data && (
              <AdminTableTeg
                isLoading={isLoading}
                tags={tagData}
                deleteClick={deleteTag}
                putClick={changeTag}
              />
            )}
          </RightDiv>
          <Refresher onClick={refreshHandler}>Refresh</Refresher>
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
        </RightSide>
      </MainSection>
    </Fragment>
  );
}

export default AdminTag;

const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  position: relative;
  background-color: #cfeaf6;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 20%;
  height: 100%;
  @media (max-width: 750px) {
    width: 100%;
    height: max-content;
  }
  div {
    width: 100%;
    height: 49%;
    display: flex;
    flex-direction: column;
    ul {
      outline: none;
      text-decoration: none;
      width: max-content;
      li {
        list-style: none;
        padding: 0.5em;
        font-size: 1.4rem;
        cursor: pointer;

        text-decoration: none;
        color: #0606a7;
        &:hover {
          color: green;
          transition: 700ms;
        }

        font-weight: 600;
        a {
          text-decoration: none;
          color: #0606a7;
          &:hover {
            color: green;
            transition: 700ms;
          }
        }
      }
    }
    &:first-child {
      border-bottom: 1px dotted black;
    }
  }
`;
const RightSide = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;
    height: max-content;
    align-items: center;
  }
`;

const RightDiv = styled.div`
  width: 90%;
  height: 70%;
  margin: 2em;
  transform: translateY(-1em);
  background-color: brown;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
`;
const Refresher = styled.button`
  margin: 2em;
  width: 12rem;
  height: 5rem;
  background-color: grey;
  border: none;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: #0606a7;
    transition: 700ms;
    cursor: pointer;
  }
`;
const Module = styled.div`
  width: 35rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  background-color: green;
  @media (max-width: 560px) {
    width: 17rem;
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
