// import { div, Text } from '@chakra-ui/react';
import img1 from '../../../assets/user.jpg'
import img2 from '../../../assets/Avatar (3).png';
import msg from './message.module.css';
import { FaFile } from 'react-icons/fa';

const Message = ({ text, user = 'other', audioURL, fileURL }) => {
  const renderMessageContent = () => {
    if (audioURL) {
      return (
        <audio controls src={audioURL} />
      );
    } else if (fileURL) {
      return (
        <a href={fileURL} target="_blank" rel="noopener noreferrer">
          <FaFile />
          File
        </a>
      );
    } else {
      return <div>{text}</div>;
    }
  };

  return (
    <div
      // alignSelf={user === 'me' ? 'flex-end' : 'flex-start'}
      // borderRadius={'base'}
      // bg="gray.100"
      // paddingY={'10'}
      // paddingX={user === 'me' ? '4' : '2'}
      className={msg.message01}
    >
      {user === 'other' && <img src={img1} className={msg.avatar} alt="User Avatar" />}
      <div className={msg.text_messages_container}>
        {renderMessageContent()}
      </div>
      {user === 'me' && <img src={img2} className={msg.avatar} alt="User Avatar" />}
    </div>
  );
};

export default Message;
