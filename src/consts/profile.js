import Mail from "../assets/images/icons/mail.svg";
import Linkedin from "../assets/images/icons/linkedin.svg";
import Github from "../assets/images/icons/github.svg";
import Twitter from "../assets/images/icons/twitter.svg";

const HEADER = "Hi Amigos! I'm a Full Stack Developer based in India.";
const ROLE = "Full Stack Developer";

const DESCRIPTION = (
  <>
    &nbsp;I've got hands-on experience in full-stack development. On the
    front-end, I'm familiar with&nbsp;
    <i>
      <b>TypeScript</b>
    </i>
    &nbsp;and React Query, while on the back-end, I've worked extensively with
    Node.js and PostgreSQL.
    <br />
    <br />
    Over the past few years, I've delved into a range of web development
    technologies, exploring React, Redux, and Saga, as well as dynamic CSS,
    component CSS, and good old vanilla CSS. Handling APIs has been a
    fundamental part of my journey. I've also gained practical experience
    through internships in the same field.
    <br /> <br />
    Beyond coding, I've excelled in diverse roles - from being the&nbsp;
    <i>
      <b>General Secretary of Cultural Affairs</b>
    </i>
    &nbsp;to participating actively in hackathons, mentoring, and contributing
    to open-source projects. And if you think development is the only thing I
    do, darling, you got me all wrong, I play guitar, make art and more
    importantly have fun :D
    <br />
    <br />
    <b>Thanks for visiting, and have a wonderful day! 🌟</b>
  </>
);

const RESUME = {
  HREF: "./assets/Meghana_Resume.pdf",
  BUTTON_TEXT: "Take a look at my resume!",
};

const CONTACT = {
  TWITTER: {
    ICON: Twitter,
    LINK: "https://twitter.com/meghanacosmos",
  },
  GITHUB: {
    ICON: Github,
    LINK: "https://github.com/meghanacosmos",
  },
  MAIL: {
    ICON: Mail,
    LINK: "mailto:meghana.cosmos@gmail.com",
  },
  LINKEDIN: {
    ICON: Linkedin,
    LINK: "https://www.linkedin.com/in/meghanacosmos",
  },
};

export { HEADER, ROLE, DESCRIPTION, RESUME, CONTACT };
