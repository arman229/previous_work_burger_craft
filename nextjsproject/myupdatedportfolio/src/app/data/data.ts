import weatherimage from "@/app/assets/projects/weather.png";
import responsivebmi from "@/app/assets/projects/responsivebmi.png"
import agecalculator from "@/app/assets/projects/outputimage.jpg";
import todo from "@/app/assets/projects/todo-app-output.png";
import HTML5 from "@/app/assets/skills/html.png";
import CSS from "@/app/assets/skills/Css.png";
import Bootstrap from "@/app/assets/skills/Bootstrap.jpeg";
import JavaScript from "@/app/assets/skills/Js.jpeg";
import TypeScript from "@/app/assets/skills/TypeScript.png";
import JQuery from "@/app/assets/skills/Jquery.png";
import Matrial_UI from "@/app/assets/skills/MatrialUi.png";
import Reactjs from "@/app/assets/skills/React.png";
import Github from "@/app/assets/skills/Github.png";
import metafront from '@/app/assets/mycertificate/metafront.png';
import ai from  '@/app/assets/mycertificate/ai.png';
import googleCloudPNG from '@/app/assets/mycertificate/googleCloudPNG.png';
import problemsolvin from '@/app/assets/mycertificate/problemsolvin.png';

const DataCard = [
  {
    id: "0",
    image: weatherimage,
    heading: "Weather Web App",
    detail:
      "A compilation of my weather web app projects exemplifying innovation and skill.",
    demo: "https://weatherinfo24.netlify.app/",
    github: "https://github.com/arman229/Weather-app",
  },
  {
    id: "1",
    image: responsivebmi,
    heading: "BMI Calculator",
    detail:
      "A compilation of my BMI calculator projects exemplifying technical prowess and user-focused development.",
    demo: "https://bmicalculator-arman.netlify.app/",
    github: "https://github.com/arman229/CalculateBMI.git",
  },
  {
    id: "2",
    image: agecalculator,
    heading: "Web Design Portfolio",
    detail:
      "A collection of my web design projects showcasing creativity and expertise.",
    demo: "https://findbirthdayandage.netlify.app",
    github: "https://github.com/arman229/Find-Birthday-And-Age",
  },
  {
    id: "3",
    image: todo,
    heading: "To Do App",
    detail:
      "A collection of my web design projects showcasing creativity and expertise.",
    demo: "https://todo-responsive-app.netlify.app/",
    github: "https://github.com/arman229/ToDoTracker.git",
  },
];

const skillsdata = [
  { name: "HTML5", image: HTML5 },
  { name: "CSS", image: CSS },
  { name: "Bootstrap", image: Bootstrap },
  { name: "JavaScript", image: JavaScript },
  { name: "TypeScript ", image: TypeScript },
  { name: "JQuery", image: JQuery },
  { name: "Matrial-UI", image: Matrial_UI },
  { name: "Reactjs", image: Reactjs },
  { name: "Github", image: Github },
  
];
const certificates = [
  {
      title: 'Meta Front-End Developer',
      issuer: 'coursera',

      image: metafront,
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/WGYV6H7JU6R2',
  },
  {
      title: 'AI For Everyone',
      issuer: 'coursera',

      image: ai,
      link: 'https://www.coursera.org/account/accomplishments/verify/DGR6855NSVRS',
  },
  {
      title: 'Introduction to Generative AI',
      issuer: 'coursera',

      image: googleCloudPNG,
      link: 'https://www.coursera.org/account/accomplishments/verify/JSABU3F2YMPH',
  },
  {
      title: 'Problem Solving Using Computational  ',
      issuer: 'coursera',

      image: problemsolvin,
      link: 'https://coursera.org/verify/7N7ZTGRCFA76',
  },

];
export { skillsdata,certificates };
export default DataCard;
