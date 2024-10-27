import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <>
          <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
          <p>{isOnline ? "Online" : "Offline"}</p>
        </>
    )
};

export default FriendListItem;