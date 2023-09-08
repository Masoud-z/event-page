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

  function onSearch(e: string) {
    setEnteredDate(undefined);
    setSelectedCities([]);
    if (e.length === 0) {
      setEvents(data);
    } else {
      setEvents(
        data.filter((event) =>
          event.title.toUpperCase().includes(e.toUpperCase())
        )
      );
    }
  }
  function onSetDate(value: any, date: any) {
    setEnteredDate(value);
    setSearchedTitle("");
    setSelectedCities([]);
    if (value !== null) {
      const newDate = new Date(value.$d).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      setEvents(data.filter((event) => event.date === newDate));
    } else {
      setEvents(data);
    }
  }
  function onSetCity(cities: CheckboxValueType[]) {
    setSearchedTitle("");
    setEnteredDate(undefined);
    setSelectedCities(cities);
    if (cities.length === 0) {
      setEvents(data);
    } else {
      const newArr: {
        date: string;
        imgUrl: string;
        title: string;
        company: string;
        city: string;
        state: string;
        favorite: boolean;
      }[] = [];
      cities.forEach((city) => {
        newArr.push(...data.filter((event) => event.city === city));
      });
      setEvents(newArr);
    }
  }
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
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
}
export default Events;
