import { Link } from "gatsby";
import React from "react";

import * as s from "./TopicFilterMenu.module.css";

type TopicFilterItemProps = {
  name?: string;
  uid: string | null;
  isActive?: boolean;
};
const TopicFilterItem = ({ name, uid, isActive }: TopicFilterItemProps) => {
  const url = uid ? `/blog/${uid}` : "/blog";
  return (
    <li className={`${s.topicFilterItem} ${isActive ? s.active : ""}`}>
      {isActive ? (
        name
      ) : (
        <Link className={s.topicLink} to={url}>
          {name}
        </Link>
      )}
    </li>
  );
};

type TopicFilterMenuProps = {
  activeTopic: string | null;
  topics: {
    name?: string;
    uid: string;
  }[];
};
const TopicFilterMenu = ({ activeTopic, topics }: TopicFilterMenuProps) => {
  const items = [{ name: "All Topics", uid: null }, ...topics];
  return (
    <div className={s.bleedWrapper}>
      <div className={s.gridParent}>
        <ul className={s.topicFilterMenu}>
          {items.map((topic) => (
            <TopicFilterItem
              key={topic.uid}
              name={topic.name}
              uid={topic.uid}
              isActive={topic.uid === activeTopic}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TopicFilterMenu;
