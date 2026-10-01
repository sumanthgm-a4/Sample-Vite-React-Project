import RobotProfileImg from '../assets/chatbot.png'
import UserProfileImg from '../assets/user.png'
import './ChatMessage.css'
import dayjs from 'dayjs';

console.log(UserProfileImg);

function ChatMessage({ message, sender }) {
    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props;

    /*
    if (sender === 'robot') {
      return (
        <div>
          <img src="robot.png" width="50" />
          {message}
        </div>
      );
    }
    */

    const time = dayjs().valueOf();

    return (
        <div className={sender === "robot" ? "chat-message-robot" : "chat-message-user"}>
            {sender === 'robot' && (
                <img src={RobotProfileImg} width="50" />
            )}
            <div className="chat-message-text">
                {message} <br/>
                {dayjs(time).format('h:mma')}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImg} width="50" />
            )}
        </div>
    );
}

export {ChatMessage};