import { Route, Routes } from "react-router-dom";
import FavoriteMeetups from "./pages/FavoriteMeetups";
import Layout from "./components/layout/Layout";
import MeetupsList from "./pages/MeetupsList";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MeetupsList />}/>
        <Route path='/favorite-meetups' element={<FavoriteMeetups/>}/>
        <Route path='/new-meetups' element={<NewMeetups/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
