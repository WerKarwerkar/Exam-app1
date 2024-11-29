import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { VenueProvider } from "./Context/VenueContext";
import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import ListOfVenues from "./pages/ListOfVenues";
import SingleVenue from "./pages/SingleVenue";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingPage from "./pages/BookingPage";
import RentOut from "./pages/RentOut";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RoleSelection from "./pages/RoleSelection";

function App() {
  return (
    <AuthProvider>
      <VenueProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="ContactPage" element={<ContactPage />} />
            <Route path="RentOut/:id" element={<RentOut />} />
            <Route path="ListOfVenues" element={<ListOfVenues />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="ProfilePage" element={<ProfilePage />} />
            <Route path="RegisterPage" element={<RegisterPage />} />
            <Route path="RoleSelection" element={<RoleSelection />} />
            <Route path="SingleVenue/:id" element={<SingleVenue />} />
            <Route path="BookingPage" element={<BookingPage />} />
            <Route
              path="BookingConfirmation"
              element={<BookingConfirmation />}
            />
          </Route>
        </Routes>
      </VenueProvider>
    </AuthProvider>
  );
}

export default App;
