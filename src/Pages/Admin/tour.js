import { Fragment, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminTableTour from "../../Components/AdminTableTour";
import Button from "../../Components/Button/Button";
import { getTourData } from "../Tour/tour-action";
import AuthContext from "../../Hoc/authContext";

function AdminTour() {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [tags, setTags] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);
  const [tourID, setTourID] = useState(null);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceData, setServiceData] = useState([]);

  const data = useSelector(state => state.tour);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  // //////////////////// Add Tour ///////////////////

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append("countryName", data.countryName);
    formData.append("title", data.title);
    formData.append("duration", data.duration);
    formData.append("description", data.description);
    formData.append("minParticipants", data.minParticipants);
    formData.append("maxParticipants", data.maxParticipants);
    formData.append("image", data.image[0]);
    formData.append("tag", data.filter);
    formData.append("abstract_price", data.price);
    formData.append("execution", data.execution);
    formData.append("language", data.language);

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tours/post/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    });

    setReload(!reload);

    reset();
  };

  // //////////////////// Add Services ///////////////////

  const onAddServices = id => {
    setServiceOpen(!serviceOpen);
    setTourID(id);
  };

  const onShowServices = id => {
    fetch(`${process.env.REACT_APP_BASE_URL}/services/all/`)
      .then(response => response.json())
      .then(data =>
        setServiceData(data.filter(data => data.tour === parseInt(id)))
      );
  };

  const servicesAdd = async data => {
    const formData = new FormData();
    formData.append("notedAchievements", data.notedAchievements);
    formData.append("servicesNotRealized", data.servicesNotRealized);
    formData.append("tour", tourID);

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/services/post/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    reset();
    setServiceOpen(false);
  };

  const { tourData, isLoading } = useSelector(state => state.tour);

  const navigate = useNavigate();

  const deleteMembers = async id => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tours/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    setReload(!reload);
  };

  useEffect(() => {
    dispatch(getTourData());
  }, [reload, dispatch]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/tag/get/`)
      .then(response => response.json())
      .then(data => setTags(data));
  }, []);

  const refreshHandler = e => {
    dispatch(getTourData());
    setReload(!reload);
  };

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
  };
  const agbHandler = () => {
    navigate("/admin/term");
  };
  const countryAboutHandler = () => {
    navigate("/admin/country_about");
  };
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
              <AdminTableTour
                isLoading={isLoading}
                tour={tourData}
                deleteClick={deleteMembers}
                position={"general"}
                onAddServices={onAddServices}
                onShowServices={onShowServices}
                serviceData={serviceData}
                command={"general"}
              />
            )}
          </RightDiv>
          <Refresher onClick={refreshHandler}>Refresh</Refresher>

          {/* Add Tour Module */}

          <Module>
            <div className='h2'>
              <h2>Add Tour</h2>
            </div>
            <form
              method='post'
              encType='multipart/form-data'
              onSubmit={handleSubmit(onSubmit)}
            >
              <Select
                {...register("countryName", {
                  // required: true,
                })}
              >
                <option value=''>Choose Country</option>
                <option value='Georgia'>Georgia</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Armenia'>Armenia</option>
              </Select>
              <Inputs
                type={"text"}
                placeholder={"Enter Title"}
                {...register("title", {
                  // required: true,
                })}
              />
              <Inputs
                type={"number"}
                placeholder={"Enter Duration"}
                {...register("duration", {
                  // required: true,
                })}
              />
              <Textarea
                placeholder={"Enter Description"}
                {...register("description", {
                  // required: true,
                })}
              />
              <Inputs
                type={"number"}
                placeholder={"Enter Min participant"}
                {...register("minParticipants", {
                  // required: true,
                })}
              />
              <Inputs
                type={"number"}
                placeholder={"Enter Max participant"}
                {...register("maxParticipants", {
                  // required: true,
                })}
              />
              <Inputs
                type={"file"}
                accept={"image/*"}
                {...register("image", {
                  // required: true,
                })}
              />
              <Select
                {...register("filter", {
                  // required: true,
                })}
                data-mdb-placeholder='Example placeholder'
              >
                {tags &&
                  tags.map(tag => (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  ))}
              </Select>

              <Inputs
                type={"number"}
                placeholder={"Enter Abstract Price"}
                {...register("price", {
                  // required: true,
                })}
              />

              <Select
                {...register("execution", {
                  // required: true,
                })}
                data-mdb-placeholder='Choose Guaranteed or not'
              >
                <option value={"Guaranteed"}>Guaranteed</option>
                <option value={"Not Guaranteed"}>Not Guaranteed</option>
              </Select>

              <Select
                {...register("language", {
                  // required: true,
                })}
                data-mdb-placeholder='Choose Language'
              >
                <option value={"English"}>English</option>
                <option value={"German"}>German</option>
              </Select>

              <Button type='submit' margin={"1em"}>
                Submit
              </Button>
            </form>
          </Module>

          {/* Add Service Module */}

          {serviceOpen && (
            <Module className='second'>
              <div className='h2'>
                <h2>Add Services</h2>
              </div>
              <form
                method='post'
                encType='multipart/form-data'
                onSubmit={handleSubmit(servicesAdd)}
              >
                <Textarea
                  type={"text"}
                  placeholder={"Enter Valid Service"}
                  {...register("notedAchievements", {})}
                />
                <Textarea
                  type={"text"}
                  placeholder={"Enter Not Service"}
                  {...register("servicesNotRealized", {})}
                />
                <Button type='submit' margin={"1em"}>
                  Submit
                </Button>
              </form>
            </Module>
          )}
        </RightSide>
      </MainSection>
    </Fragment>
  );
}

export default AdminTour;

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
  .second {
    background-color: red;
    align-self: flex-end;
    width: 25rem;
    transform: translateY(-37em);
  }
`;

const RightDiv = styled.div`
  width: 90%;
  height: 70%;
  margin: 2em;
  transform: translateY(-1em);
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
  width: 40rem;
  height: 37rem;
  display: flex;
  flex-direction: column;
  background-color: green;
  @media (max-width: 560px) {
    width: 17rem;
  }
  .h2 {
    width: 100%;
    height: 20%;
    text-align: center;
  }
  form {
    width: 100%;
    height: 80%;
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
const Select = styled.select`
  margin: 1em;
  width: 15rem;
  height: 2.5rem;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  background-color: #d4d3d3;
  text-align: center;
`;
