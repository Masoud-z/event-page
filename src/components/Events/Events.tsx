import { useState } from "react";
import styles from "./Events.less";
import { Input, DatePicker, Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import EventCard from "./EventCard";
import data from "../../assets/data";

const plainOptions = ["Austin", "Los Angeles", "Tucson"];

const { Search } = Input;

function Events() {
  const [events, setEvents] = useState(data);
  const [searchedTitle, setSearchedTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState(undefined);
  const [selectedCities, setSelectedCities] = useState<CheckboxValueType[]>([]);

  //Search events titles based on user input
  function onSearch(e: string) {
    //Clear previous filters
    setEnteredDate(undefined);
    setSelectedCities([]);

    //Check input to not be empty
    if (e.length === 0) {
      setEvents(data);
    } else {
      // filter the events based on enter entered title
      setEvents(
        data.filter((event) =>
          event.title.toUpperCase().includes(e.toUpperCase())
        )
      );
    }
  }

  //Search events dates based on user input
  function onSetDate(value: any, date: any) {
    //Clear previous filters
    setEnteredDate(value);
    setSearchedTitle("");
    setSelectedCities([]);

    //Check value to not be empty
    if (value !== null) {
      const newDate = new Date(value.$d).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      // filter events based on the entered date
      setEvents(data.filter((event) => event.date === newDate));
    } else {
      setEvents(data);
    }
  }

  //Search events cities based on user input
  function onSetCity(cities: CheckboxValueType[]) {
    //Clear previous filters
    setSearchedTitle("");
    setEnteredDate(undefined);
    setSelectedCities(cities);

    //Check value to not be empty
    if (cities.length === 0) {
      setEvents(data);
    } else {
      const newArr: {
        id: number;
        date: string;
        imgUrl: string;
        title: string;
        company: string;
        city: string;
        state: string;
        favorite: boolean;
      }[] = [];

      //Filter the events based on the array of chosen cities
      cities.forEach((city) => {
        newArr.push(...data.filter((event) => event.city === city));
      });
      setEvents(newArr);
    }
  }

  //Reset all filters
  function reset() {
    setEvents(data);
    setSearchedTitle("");
    setEnteredDate(undefined);
    setSelectedCities([]);
  }
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <h4 onClick={reset} className={styles.reset}>
          Reset
        </h4>
        <h5>Title</h5>
        <Search
          placeholder="Search titles"
          onSearch={onSearch}
          style={{ width: "100%" }}
          value={searchedTitle}
          onChange={(e) => setSearchedTitle(e.target.value)}
        />
        <h4>Filters</h4>
        <DatePicker
          onChange={onSetDate}
          style={{ width: "100%" }}
          value={enteredDate}
        />
        <h5>City</h5>
        <Checkbox.Group
          options={plainOptions}
          onChange={onSetCity}
          className={styles.cities}
          value={selectedCities}
        />
      </div>
      <div className={styles.events}>
        {events.map((event, index) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
export default Events;
