import { useState } from "react";
import { Modal, Avatar, Card } from "antd";
import { FaShare } from "react-icons/fa";
import styles from "./Events.less";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function EventModal({ event }: any) {
  //isModalOpen state to control the opening and closing the modal 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <span className={styles.showDetail} onClick={() => setIsModalOpen(true)}>
        <FaShare style={{ color: "#69b1ff" }} />
      </span>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        className={styles.modal}
      >
        <Card
          style={{ width: 300 }}
          cover={<img src={event.imgUrl} alt={event.title} />}
        >
          <Meta
            avatar={
              <Avatar src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" />
            }
            title={event.title}
            description={event.date}
          />
        </Card>
      </Modal>
    </>
  );
}

export default EventModal;
