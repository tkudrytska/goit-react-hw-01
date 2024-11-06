import css from "./FriendList.module.css";
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({friends}) => {
  return (
    <ul className={css.friendsWrap}>
      {friends.map((friend) => (
        <li className={css.friendItem} key={friend.id}>
          <FriendListItem 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
