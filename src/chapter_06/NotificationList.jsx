import React from 'react';
import Notification from './Notification';

const reserveNotifications = [
  {
    message: "안녕하세요, 오늘 일정을 알려드립니다."
  },
  {
    message: "점심 식사 시간입니다."
  },
  {
    message: "이제 곧 미팅이 시작됩니다."
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if(notifications.length < reserveNotifications.length) {
        const index = notifications.length;
        notifications.push(reserveNotifications[index]);

        // setState를 사용하여 계속 리렌더링
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if(timer) { // timer가 undefined가 아니라면 clearInterval
      clearInterval(timer);
    }
  }

  render() {
    return  (
      <div>
        {this.state.notifications.map((notification, index) => {
          return <Notification key={index} message={notification.message} />;
        })}
      </div>
    );
  } 
}

export default NotificationList;
