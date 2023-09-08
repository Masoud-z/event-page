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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span className={styles.showDetail} onClick={showModal}>
        <FaShare style={{ color: "#69b1ff" }} />
      </span>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
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
