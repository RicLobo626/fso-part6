import { useNotification } from "../context/NotificationContext";

const Notification = () => {
  const { notification, removeNotification } = useNotification();

  if (!notification) return null;

  return (
    <div className={`notification notification--${notification.style}`}>
      {notification.message}

      <button onClick={removeNotification} className="close-btn">
        Close
      </button>
    </div>
  );
};

export default Notification;
