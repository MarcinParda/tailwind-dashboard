import { BsPlusCircleFill } from 'react-icons/bs';

export const BottomBar = () => (
    <div className='bottom-bar-wrapper'>
      <div className='bottom-bar'>
        <PlusIcon />
        <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
      </div>
    </div>
);

export const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  const color = Math.floor(Math.random() * 5);

  const colors = [
      'text-gray-800 dark:text-white',
      'text-gray-600 dark:text-gray-400',
      'text-red-800 dark:dark:text-red-400',
      'text-yellow-800 dark:text-yellow-400',
      'text-blue-800 dark:text-blue-400',
      'text-blue-700 dark:text-blue-500',
  ];
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className={`post-owner ${colors[color]}`}>
            {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

export const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);
