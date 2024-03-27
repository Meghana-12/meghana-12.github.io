const cursor = document.getElementById("cursor");
let prevX = 0,
  prevY = 0;

const paragraph = document.getElementById("about-me");

document.addEventListener("mousemove", function (e) {
  const delay = 10;
  const newX = (e.clientX - prevX) / delay + prevX;
  const newY = (e.clientY - prevY) / delay + prevY;

  prevX = newX;
  prevY = newY;

  cursor.style.left = newX + "px";
  cursor.style.top = newY + "px";
});

const SKILLS = [
  "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  "https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white",
  "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
  "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  "https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react",
  "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
  "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
  "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
];
const skillsContainer = document.getElementById("skills");

SKILLS.forEach(item => {
  const image = document.createElement("img");
  image.src = item;
  image.style.maxHeight = "200px";
  image.style.width = "auto";
  image.className = "skill-item";
  skillsContainer.appendChild(image);
});
