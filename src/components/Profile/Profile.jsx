import css from "./Profile.module.css";

export default function Profile(props) {
    const { name, tag, location, image, stats: { followers, views, likes}} = props;
    return (
        <div className={css.profileContainer}>
            <div className={css.profileHero}>
              <img
                className={css.profileImage}
                src={image}
                alt={name}
              />
              <p className={css.profileTitle}>{name}</p>
              <p className={css.profileText}>@{tag}</p>
              <p className={css.profileText}>{location}</p>
            </div>

            <ul className={css.profileStats}>
              <li className={css.profileItem}>
                <span className={css.profileTextDetail}>Followers</span>
                <span className={css.profileTextDetail}>{followers}</span>
              </li>
              <li className={css.profileItem}>
                <span className={css.profileTextDetail}>Views</span>
                <span className={css.profileTextDetail}>{views}</span>
              </li>
              <li className={css.profileItem}>
                <span className={css.profileTextDetail}>Likes</span>
                <span className={css.profileTextDetail}>{likes}</span>
              </li>
            </ul>
          </div>
    )
}