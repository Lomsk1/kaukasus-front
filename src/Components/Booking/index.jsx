import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Infos from "./infos";

function Booking({ data }) {
  const navigate = useNavigate();

  const bookingHandler = (id) => {
    navigate(`/booking/${id}`);
  };
  const contactHandler = () => {
    navigate("/contact");
  };
  return (
    <Table>
      <thead>
        <tr>
          {/* <th>Start Date</th>
          <th>End Date</th> */}
          <th>Reisetermine</th>
          <th>Preis</th>
          <th>Ausgebucht {<br/>} / {<br/>}Buchbar</th>
          <th>Buchen {<br/>} /  {<br/>}Anfragen</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((data) => (
            <Infos
              key={data.id}
              id={data.id}
              date={`${data.startDate} - ${data.endDate}`}
              // start={data.startDate}
              // end={data.endDate}
              price={data.price}
              availability={data.booking_remaining_places_img}
              contactHandler={contactHandler}
              bookingHandler={bookingHandler}
            />
          ))}
      </tbody>
    </Table>
  );
}

export default Booking;

const Table = styled.table`
  width: 80%;
  text-align: center;
  background-color: #e0e0d8;
  margin-top: 2em;
  &,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    td:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
