import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import ShowToursDayAdmin from "./ToShowThem";
import AuthContext from "../../Hoc/authContext";
import BookingShow from "./BookingShow";

function AdminTableTourDay({
  tourDay,
  deleteClick,
  bookingData,
  bookingOpen = false,
  tourIDs,
}) {
  const [open, setOpen] = useState(false);
  // const [bookingOpen, setBookingOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const { authTokens } = useContext(AuthContext);
  const [bookingEdit, setBookingEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [tourDayValue, setTourDayValue] = useState([]);

  const putClick = id => {
    setUserId(id);
    setOpen(!open);

    fetch(`${process.env.REACT_APP_BASE_URL}/tour_days/${id}/`)
      .then(res => res.json())
      .then(data => setTourDayValue(data))
      .catch(err => console.error(err));
  };

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    formData.append("drivingKilometers", data.km);
    formData.append("driveTime", data.time);
    formData.append("meals", data.meals);
    formData.append("overnight_stay", data.overnight_stay);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/tour_days/put/${userId}/`,
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

  const bookingDeleteHandler = async id => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/booking/delete/${id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    // setBookingOpen(false)
  };

  const bookingAdd = async data => {
    const formData = new FormData();

    formData.append("startDate", data.start);
    formData.append("endDate", data.end);
    formData.append("price", data.price);
    formData.append("tour", tourIDs);
    formData.append(
      "booking_remaining_places_img",
      data.booking_remaining_places_img[0]
    );

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/booking/post/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + String(authTokens.access),
      },
    });

    reset();
    // setBookingOpen(false)
  };

  const bookingEditHandler = id => {
    setBookingEdit(!bookingEdit);
    setEditID(id);
    // setBookingOpen(false)
  };

  const bookingPut = async data => {
    const formData = new FormData();

    formData.append("startDate", data.start);
    formData.append("endDate", data.end);
    formData.append("price", data.price);
    formData.append("tour", tourIDs);
    formData.append(
      "booking_remaining_places_img",
      data.booking_remaining_places_img[0]
    );

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/booking/put/${editID}/`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );

    reset();
    // setBookingOpen(false)
    setBookingEdit(false)
  };

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>KM</th>
            <th>Time</th>
            <th>Meals</th>
            <th>overnight_stay</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tourDay &&
            tourDay.map(tour => (
              <ShowToursDayAdmin
                key={tour.id}
                id={tour.id}
                title={tour.title}
                description={tour.description}
                km={tour.drivingKilometers}
                time={tour.driveTime}
                meals={tour.meals}
                image={tour.image}
                onDelete={deleteClick}
                onEdit={putClick}
                BookID={tour.tour}
                overnight_stay={tour.overnight_stay}
              />
            ))}
        </tbody>
      </Table>
      {open && (
        <Module>
          <div className='h2'>
            <h2>Edit Day</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Inputs
              defaultValue={tourDayValue.title}
              type={"text"}
              placeholder={"Enter Title"}
              {...register("title", {
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
              defaultValue={tourDayValue.drivingKilometers}
              type={"number"}
              placeholder={"Enter Driving Kilometers"}
              {...register("km", {
                required: true,
              })}
            />
            <Inputs
              defaultValue={tourDayValue.driveTime}
              type={"number"}
              placeholder={"Enter Driving Time"}
              {...register("time", {
                required: true,
              })}
            />
            <Inputs
              defaultValue={tourDayValue.overnight_stay}
              type={"text"}
              placeholder={"Night or Day"}
              {...register("overnight_stay", {
                required: true,
              })}
            />
            <Textarea
              defaultValue={tourDayValue.description}
              placeholder={"Enter Description"}
              {...register("description", {
                required: true,
              })}
            />
            <Textarea
              defaultValue={tourDayValue.meals}
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

      <Table style={{ marginTop: "2em" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th>Tour</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookingData &&
            bookingData.map(book => (
              <BookingShow
                id={book.id}
                key={book.id}
                start={book.startDate}
                end={book.endDate}
                price={book.price}
                tour={book.tour}
                img={book.booking_remaining_places_img}
                onEdit={bookingEditHandler}
                onDelete={bookingDeleteHandler}
              />
            ))}
        </tbody>
      </Table>

      {bookingOpen && (
        <Module>
          <div className='h2'>
            <h2>Add Booking</h2>
          </div>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(bookingAdd)}
          >
            <Inputs
              type={"date"}
              {...register("start", {
                required: true,
              })}
            />
            <Inputs
              type={"date"}
              {...register("end", {
                required: true,
              })}
            />
            <Inputs
              type={"number"}
              placeholder={"Enter Price"}
              {...register("price", {
                required: true,
              })}
            />
            <Inputs
              type={"file"}
              accept={"image/*"}
              {...register("booking_remaining_places_img", {
                required: true,
              })}
            />
            <Button type='submit' margin={"1em"}>
              Submit
            </Button>
          </form>
        </Module>
      )}
      {bookingEdit && (
        <Module>
          <form
            method='post'
            encType='multipart/form-data'
            onSubmit={handleSubmit(bookingPut)}
          >
            <Inputs
              type={"date"}
              {...register("start", {
                required: true,
              })}
            />
            <Inputs
              type={"date"}
              {...register("end", {
                required: true,
              })}
            />
            <Inputs
              type={"number"}
              placeholder={"Enter Price"}
              {...register("price", {
                required: true,
              })}
            />
            <Inputs
              type={"file"}
              accept={"image/*"}
              {...register("booking_remaining_places_img", {
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

export default AdminTableTourDay;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 40rem;
  overflow-y: scroll;
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
  height: 30rem;
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
