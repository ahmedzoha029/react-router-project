import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
  const navigate = useNavigate();
  function saveMeetup(meetUpData) {
    fetch("https://react-demo-1a0a7-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/", { replace: true }));
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm saveMeetup={saveMeetup} />
    </section>
  );
}

export default NewMeetups;
