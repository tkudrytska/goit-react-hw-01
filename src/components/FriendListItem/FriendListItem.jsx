import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <>
          <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
          <p className={clsx({
              [css.online]: isOnline,
              [css.offline]: !isOnline
          })}>{isOnline ? "Online" : "Offline"}</p>
        </>
    )
};

export default FriendListItem;