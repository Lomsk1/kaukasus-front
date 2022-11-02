import { Fragment, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";

import Button from "../Button/Button";
import ShowToursAdmin from "./ToShowThem";
import AuthContext from "../../Hoc/authContext";
import ShowServicesAdmin from "./ServicesShow";
import ShowHighlightsAdmin from "./highlight/indes";

function AdminTableTour({
  tour,
  isLoading,
  deleteClick,
  position,
  tourShowHandler,
  bookShowHandler,
  bookAddHandler,
  commentGet,
  commentAdd,
  onAddServices,
  onShowServices,
  serviceData,
  onHighlights,
  command,
  highlightsData,
}) {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [tourID, setTourID] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [tags, setTags] = useState([]);
  const [tourValue, setTourValue] = useState([]);
  const { authTokens } = useContext(AuthContext);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceID, setServiceID] = useState(null);
  const [serviceTourID, setServiceTourID] = useState(null);
  const [highlightID, setHighlightID] = useState(null);
  const [highlightTourID, setHighlightTourID] = useState(null);
  const [highlightOpne, setHighlightOpne] = useState(false);

  const putClick = id => {
    setUserId(id);
    setOpen(!open);
    setServiceOpen(false);

    fetch(`${process.env.REACT_APP_BASE_URL}/tours/${id}/`)
      .then(response => response.json())
      .then(data => setTourValue(data.Tour));
  };
  const addClick = id => {
    setTourID(id);
    setToggle(!toggle);
    setOpen(false);
    setServiceOpen(false);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/tag/get/`)
      .then(response => response.json())
      .then(data => setTags(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

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

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/tours/put/${userId}/`,
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
    setServiceOpen(false);
  };

  const tourDayHandler = async data => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    formData.append("drivingKilometers", data.km);
    formData.append("driveTime", data.time);
    formData.append("meals", data.meals);
    formData.append("tour", tourID);
    formData.append("overnight_stay", data.overnight_stay);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/tour_days/post/`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    reset();
    setOpen(false);
    setServiceOpen(false);
  };

  // //////////////////////// Service ///////////////////////

  const deleteService = async id => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/services/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    setServiceOpen(false);
    setOpen(false);
  };

  const editService = async (id, tour) => {
    setServiceOpen(!serviceOpen);
    setToggle(false);
    setOpen(false);
    setServiceID(id);
    setServiceTourID(tour);
  };

  const servicesEdit = async data => {
    const formData = new FormData();
    formData.append("notedAchievements", data.notedAchievements);
    formData.append("servicesNotRealized", data.servicesNotRealized);
    formData.append("tour", serviceTourID);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/services/put/${serviceID}/`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    reset();
    setServiceOpen(false);
    setOpen(false);
  };

  // ////////////////////// Highlights /////////////////////

  const deleteHighlight = async id => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/highlights/delete/${id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    setOpen(false);
    setServiceOpen(false);
  };

  const editHighlight = async (id, tour) => {
    setHighlightID(id);
    setHighlightTourID(tour);
    setHighlightOpne(!highlightOpne);
    setOpen(false);
    setServiceOpen(false);
  };

  const highlightEdit = async data => {
    const formData = new FormData();
    formData.append("highlight", data.highlight);
    formData.append("tour", highlightTourID);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/highlights/put/${highlightID}/`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    reset();
    setHighlightOpne(false);
    setOpen(false);
    setServiceOpen(false);
  };

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Country</th>
            <th>Description</th>
            <th>Language</th>
            <th>execution</th>
            <th>Min Participant</th>
            <th>Max Participant</th>
            <th>Tag</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            tour.map(tour => (
              <ShowToursAdmin
                key={tour.id}
                id={tour.id}
                country={tour.countryName}
                title={tour.title}
                duration={tour.duration}
                description={tour.description}
                minParticipant={tour.minParticipants}
                maxParticipant={tour.maxParticipants}
                tag={tour.tag}
                overNight={tour.overnight_stay}
                thumbnail={tour.image}
                onDelete={deleteClick}
                onEdit={putClick}
                onAddTourDay={addClick}
                position={position}
                onTourShow={tourShowHandler}
                onBookShow={bookShowHandler}
                onBookAdd={bookAddHandler}
                onGet={commentGet}
                onAddComment={commentAdd}
                onAddServices={onAddServices}
                onShowServices={onShowServices}
                onHighlights={onHighlights}
                language={tour.language}
                execution={tour.execution}
              />
            ))}
        </tbody>

        {/* Service */}
      </Table>
      {command === "general" && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Noted Achievements</th>
              <th>Services Not Realized</th>
              <th>Tour ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceData &&
              serviceData.map(service => (
                <ShowServicesAdmin
                  key={service.id}
                  id={service.id}
                  achievements={service.notedAchievements}
                  not={service.servicesNotRealized}
                  tour={service.tour}
                  onEdit={editService}
                  onDelete={deleteService}
                />
              ))}
          </tbody>
        </Table>
      )}

      {/* Highlights */}

      {command === "highlight" && (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Highlights</th>
              <th>Tour ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {highlightsData &&
              highlightsData.map(highlightsData => (
                <ShowHighlightsAdmin
                  key={highlightsData.id}
                  id={highlightsData.id}
                  highlights={highlightsData.highlight}
                  tour={highlightsData.tour}
                  onEdit={editHighlight}
                  onDelete={deleteHighlight}
                />
              ))}
          </tbody>
        </Table>
      )}

      {/* Add Day */}

      {toggle && !isLoading && (
        <Module>
          <div className='h2'>
            <h2>Add Day</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(tourDayHandler)}
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
            <Inputs
              type={"file"}
              accept={"image/*"}
              {...register("image", {
                required: true,
              })}
            />
            <Inputs
              type={"number"}
              placeholder={"Enter Driving Kilometers"}
              {...register("km", {
                required: true,
              })}
            />
            <Inputs
              type={"number"}
              placeholder={"Enter Driving Time"}
              {...register("time", {
                required: true,
              })}
            />
            <Inputs
              type={"text"}
              placeholder={"Night or Day"}
              {...register("overnight_stay", {
                required: true,
              })}
            />
            <Inputs
              type={"text"}
              placeholder={
                "Enter Meals: For Exp: chips, vine... or chips / wine..."
              }
              {...register("meals", {
                required: true,
              })}
            />
            <Button type='submit' margin={"1em"}>
              Submit
            </Button>
          </form>
        </Module>
      )}

      {/* Edit Tour */}

      {open && tourValue && (
        <Module>
          <div className='h2'>
            <h2>Edit Tour</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Select
              defaultValue={tourValue.countryName}
              {...register("countryName", {
                required: true,
              })}
            >
              <option value=''>Choose Country</option>
              <option value='Georgia'>Georgia</option>
              <option value='Azerbaijan'>Azerbaijan</option>
              <option value='Armenia'>Armenia</option>
            </Select>
            <Inputs
              defaultValue={tourValue.title}
              type={"text"}
              placeholder={"Enter Title"}
              {...register("title", {
                required: true,
              })}
            />
            <Inputs
              defaultValue={tourValue.duration}
              type={"number"}
              placeholder={"Enter Duration"}
              {...register("duration", {
                required: true,
              })}
            />
            <Textarea
              defaultValue={tourValue.description}
              placeholder={"Enter Description"}
              {...register("description", {
                required: true,
              })}
            />
            <Inputs
              defaultValue={tourValue.minParticipants}
              type={"number"}
              placeholder={"Enter Min participant"}
              {...register("minParticipants", {
                required: true,
              })}
            />
            <Inputs
              defaultValue={tourValue.maxParticipants}
              type={"number"}
              placeholder={"Enter Max participant"}
              {...register("maxParticipants", {
                required: true,
              })}
            />
            <Inputs
              type={"file"}
              accept={"image/*"}
              {...register("image", {
                required: true,
              })}
            />
            <Select
              defaultValue={tourValue.tag}
              {...register("filter", {
                required: true,
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
              defaultValue={tourValue.abstract_price}
              type={"number"}
              placeholder={"Enter Abstract Price"}
              {...register("price", {
                required: true,
              })}
            />

            <Select
              defaultValue={tourValue.execution}
              {...register("execution", {
                required: true,
              })}
              data-mdb-placeholder='Choose Guaranteed or not'
            >
              <option value={"Guaranteed"}>Guaranteed</option>
              <option value={"Not Guaranteed"}>Not Guaranteed</option>
            </Select>

            <Select
              defaultValue={tourValue.language}
              {...register("language", {
                required: true,
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
      )}

      {/* Add Service Module */}

      {serviceOpen && (
        <Module className={styles.second}>
          <div className='h2'>
            <h2>Edit Services</h2>
          </div>
          <form
            method='put'
            encType='multipart/form-data'
            onSubmit={handleSubmit(servicesEdit)}
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

      {/* Edit Highlights */}

      {command === "highlight" && highlightOpne && (
        <Module className={styles.second}>
          <div className='h2'>
            <h2>Edit Services</h2>
          </div>
          <form
            method='put'
            encType='multipart/form-data'
            onSubmit={handleSubmit(highlightEdit)}
          >
            <Textarea
              type={"text"}
              placeholder={"Enter Highlight"}
              {...register("highlight", {
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

export default AdminTableTour;

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
  &:last-child {
    margin-top: 2em;
  }
`;
const Module = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  border-top: 2px dotted black;
  .h2 {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 80%;
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
const Select = styled.select`
  margin: 1em;
  width: 15rem;
  height: 2rem;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  background-color: #d4d3d3;
  text-align: center;
`;
