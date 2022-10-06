import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function MeetupsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://react-demo-1a0a7-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const meetupsList = [];
        for (let itemKey in data) {
          const meetup = {
            id: itemKey,
            ...data[itemKey],
          };
          meetupsList.push(meetup);
        }
        setIsLoading(false);
        setMeetups(meetupsList);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList items={meetups} />
    </section>
  );
}

export default MeetupsList;
