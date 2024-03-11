import { CONTACT } from "../consts/profile";

export const Links = () => {
  return (
    <>
      <a
        className="icon-button"
        href={CONTACT.MAIL.LINK}
        target="_blank"
        rel="noreferrer"
      >
        <img src={CONTACT.MAIL.ICON} alt="mail" />
      </a>
      <a
        className="icon-button"
        href={CONTACT.LINKEDIN.LINK}
        target="_blank"
        rel="noreferrer"
      >
        <img src={CONTACT.LINKEDIN.ICON} alt="linkedin" />
      </a>
      <a
        className="icon-button"
        href={CONTACT.GITHUB.LINK}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={CONTACT.GITHUB.ICON}
          alt="github"
          className="dark:bg-white dark:rounded"
        />
      </a>
      <a
        className="icon-button"
        href={CONTACT.TWITTER.LINK}
        target="_blank"
        rel="noreferrer"
      >
        <img src={CONTACT.TWITTER.ICON} alt="twitter" cla />
      </a>
    </>
  );
};
