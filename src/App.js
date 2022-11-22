import { Route, Routes, useLocation } from "react-router-dom";

import "./App.module.css";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import About from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Georgia from "./Pages/Georgia";
import Tours from "./Components/Tours";
import EachTour from "./Pages/EachTour";
import Armenia from "./Pages/Armenia";
import Azerbaijan from "./Pages/Azerbaijan";
import AdminMember from "./Pages/Admin/member";
import AdminTour from "./Pages/Admin/tour";
import Contact from "./Pages/Contact";
import PhotoBlog from "./Pages/Photo_Blog";
import BookingPage from "./Pages/Booking_Page";
import AdminTourDay from "./Pages/Admin/tourDay";
import AdminTag from "./Pages/Admin/tag";
import PrivateRoute from "./Hoc/ProtectedRout";
import CommentAdmin from "./Pages/Admin/comment";
import AdminHighlights from "./Pages/Admin/highlights";
import Photos from "./Pages/Photos";
import AboutCountries from "./Pages/AboutCountries";
import Term from "./Pages/Terms";
import AdminAGBTerms from "./Pages/Admin/agb";
import AdminAboutCountry from "./Pages/Admin/About_Country";
import AboutEachCountry from "./Pages/AboutEachCountry";
import AdminSingleRooms from "./Pages/Admin/singleRooms";
import AdminGallery from "./Pages/Admin/gallery";
import { useEffect } from "react";
import SiteServices from "./Pages/Services";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Georgia" element={<Georgia />} />
        <Route path="/Armenia" element={<Armenia />} />
        <Route path="/Azerbaijan" element={<Azerbaijan />} />
        <Route exact path="/tour/:id" element={<EachTour />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photo_blog" element={<PhotoBlog />} />
        <Route path="/photo_blog/:id" element={<Photos />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/about_countries" element={<AboutCountries />} />
        <Route path="/country_about/:id" element={<AboutEachCountry />} />
        <Route path="/term" element={<Term />} />
        <Route path="/servicess" element={<SiteServices />} />

        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/admin/"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/members"
          element={
            <PrivateRoute>
              <AdminMember />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/tours"
          element={
            <PrivateRoute>
              <AdminTour />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/photo_blog"
          element={
            <PrivateRoute>
              <AdminGallery />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/highlight"
          element={
            <PrivateRoute>
              <AdminHighlights />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/tour_day"
          element={
            <PrivateRoute>
              <AdminTourDay />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/tag"
          element={
            <PrivateRoute>
              <AdminTag />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/comment"
          element={
            <PrivateRoute>
              <CommentAdmin />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/term"
          element={
            <PrivateRoute>
              <AdminAGBTerms />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/country_about"
          element={
            <PrivateRoute>
              <AdminAboutCountry />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/single_room"
          element={
            <PrivateRoute>
              <AdminSingleRooms />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
