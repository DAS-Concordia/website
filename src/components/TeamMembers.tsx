import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TeamMembers.module.css";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

function importProfilePicture(name: string) {
  try {
    return require(`../pages/members/${name}.jpg`).default;
  } catch {
    return require("../pages/members/default-photo.png").default;
  }
}

const CurrentPosition = ({ title, institution, institution_url }) => {
  if (!title && !institution) return null;

  return (
    <p className="margin-top--sm">
      Currently{" "}
      <b>
        {title} at{" "}
        {institution_url ? (
          <a href={institution_url} target="_blank">
            {institution}
          </a>
        ) : (
          institution
        )}
      </b>
    </p>
  );
};

const SocialButtons = ({ id, twitter, linkedin, website, email, has_page }) => (
  <ul className={clsx("pills", styles.memberButtons)}>
    {has_page && (
      <li className={clsx("pills__item", styles.website)}>
        <a href={`/members/${id}`}>
          <FontAwesomeIcon icon={faFileLines} /> Know More
        </a>
      </li>
    )}
    {website && !has_page && (
      <li className={clsx("pills__item", styles.website)}>
        <a target="_blank" href={website}>
          <FontAwesomeIcon icon={faExternalLinkAlt} /> Webpage
        </a>
      </li>
    )}
    {linkedin && (
      <li className="pills__item">
        <a target="_blank" href={`https://www.linkedin.com/in/${linkedin}`}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    )}
    {twitter && (
      <li className="pills__item">
        <a target="_blank" href={`https://twitter.com/${twitter}`}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    )}
    {email && (
      <li className="pills__item">
        <a target="_blank" href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    )}
  </ul>
);

const TeamMemberLarge = ({
  id,
  name,
  role,
  imgURL,
  affiliation,
  position,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "col col--3 margin-bottom--lg",
        styles.member,
        styles.memberLarge
      )}
    >
      <div className="card">
        <div className="card__image">
          <img src={imgURL || importProfilePicture(id)} alt={name} />
        </div>
        <div className={clsx("card__body", styles.memberName)}>
          <h3 className="margin-bottom--none">{name}</h3>
          <span>{role}</span>

          <CurrentPosition {...position} />
        </div>
        <div className="card__footer">
          <SocialButtons id={id} {...(props as any)} />
        </div>
      </div>
    </div>
  );
};

const TeamMemberMedium = ({
  name,
  imgURL,
  affiliation,
  position,
  ...props
}) => {
  return (
    <div className={clsx("col col--3 margin-bottom--xl", styles.member)}>
      <div className="avatar avatar--vertical">
        <img
          className="avatar__photo avatar__photo--xl"
          alt={name}
          src={imgURL || importProfilePicture(name)}
        />
        <div className="avatar__intro">
          <div className="avatar__name">{name}</div>
          <div className="avatar__subtitle">{position}</div>
          <small className="avatar__subtitle">{affiliation}</small>
        </div>
        <SocialButtons {...(props as any)} />
      </div>
    </div>
  );
};

const TeamMembers = ({ list }) => {
  return (
    <section>
      <div className="container">
        {list.map((category) => (
          <div key={category.title} className="row">
            <h2 className="col col--12 section">{category.title}</h2>
            {category.members?.length ? (
              category.members.map((props: any) => (
                <TeamMemberLarge key={props.name} {...props} />
              ))
            ) : (
              <div className="col col--12 margin-bottom--xl">
                {category.placeholder}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
