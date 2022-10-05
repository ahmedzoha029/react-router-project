import { Route, Routes } from "react-router-dom";
import FavoriteMeetups from "./pages/FavoriteMeetups";
import MainNavigation from "./components/layout/MainNavigation";
import MeetupsList from "./pages/MeetupsList";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<MeetupsList />}/>
        <Route path='/favorite-meetups' element={<FavoriteMeetups/>}/>
        <Route path='/new-meetups' element={<NewMeetups/>}/>
      </Routes>
    </div>
  );
}

export default App;
