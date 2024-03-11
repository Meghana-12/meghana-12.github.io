import Mail from "../assets/images/icons/mail.svg";
import Linkedin from "../assets/images/icons/linkedin.svg";
import Github from "../assets/images/icons/github.svg";
import Twitter from "../assets/images/icons/twitter.svg";

const HEADER = "Hi Amigos!";
const ROLE = "Full Stack Developer";

const DESCRIPTION = (
  <>
    I’m a Full Stack developer based out of India, with a BTech in CSE from the
    Indian Institute of Technology (IIT), Bhilai. With a solid foundation in
    technologies like ReactJS, NodeJS & PostgreSQL, I specialize in crafting
    robust solutions for complex problems.
    <br />
    <br />
    In my current role at Needl AI, I've played a pivotal role in developing and
    launching innovative features, enhancing user experience, and optimizing
    backend processes. From spearheading the integration of third-party payment
    systems to building full stack features in React JS NodeJS and PostgreSQL, I
    excel in delivering impactful solutions, taking full ownership of every
    feature I develop.
    <br />
    <br />
    My journey extends beyond the confines of traditional development, as
    evidenced by my participation in programs like Microsoft Engage and
    successful collaborations in hackathons, where my team secured top
    positions. Furthermore, I have taken on leadership roles at IIT Bhilai,
    providing me with valuable management experience.
    <br />
    <br />
    Explore my portfolio to delve into my projects, achievements, and expertise.
    And if you think development is the only thing I do, darling, you got me all
    wrong, I play guitar, make art and more importantly have fun :D
    <br />
    <br />
    If this is you're vibe, let's connect ✨ ! Thanks for visiting, and have a
    wonderful day!🌟
  </>
);

const RESUME = {
  HREF: "./assets/images/Meghana_Varanasi_2024.pdf",
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
