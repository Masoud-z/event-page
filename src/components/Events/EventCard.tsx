import styles from "./Events.less";
import { FiMapPin } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import EventModal from "./EventModal";

function EventCard({ event, onLike }: any) {
  return (
    <div className={styles.card}>
      <img src={event.imgUrl} alt={event.title} />
      <div className={styles.info}>
        <h5>{event.date}</h5>
        <h3>{event.title}</h3>
        <p>
          <img
            src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
            alt="logo"
          />
          By {event.company}
        </p>
        <p>
          <FiMapPin /> {event.city}, {event.state}
        </p>
        <div className={styles.cardFooter}>
          <div className={styles.people}>
            <div className={styles.avatars}>
              <Avatar.Group
                maxCount={4}
                maxPopoverTrigger="click"
                size="small"
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size="small"
                />
                <Avatar style={{ backgroundColor: "#f56a00" }} size="small">
                  K
                </Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                    size="small"
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                  size="small"
                />
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                  size="small"
                />
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                  size="small"
                />
              </Avatar.Group>
            </div>
            <p>105 Interested</p>
            <p>42 Going</p>
          </div>
          <div className={styles.options}>
            <span
              onClick={() => onLike(event.id, event.favorite)}
              className={styles.favorite}
              key={event.id}
            >
              {event.favorite ? (
                <AiFillHeart style={{ color: "red" }} />
              ) : (
                <AiOutlineHeart />
              )}
            </span>
            <EventModal event={event} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
