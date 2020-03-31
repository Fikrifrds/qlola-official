import JavaScript from '../assets/images/technologies/javascript.svg';
import TypeScript from '../assets/images/technologies/typescript.svg';
import ReactJs from '../assets/images/technologies/react.svg';
import NodeJs from '../assets/images/technologies/node.svg';
import ExpressJs from '../assets/images/technologies/express.svg';
import ExpressJsWhite from '../assets/images/technologies/express-white.svg';
import NodeJsWhite from '../assets/images/technologies/node-white.svg';
import MongoDB from '../assets/images/technologies/mongodb.svg';
import Sass from '../assets/images/technologies/sass.svg';
// import Php from '../assets/images/technologies/php.svg';
// import Laravel from '../assets/images/technologies/laravel.svg';
// import MySql from '../assets/images/technologies/mysql.svg';
import Aws from '../assets/images/technologies/aws.svg';
import AwsWhite from '../assets/images/technologies/aws-white.svg';

export default (isDark) => [
  {
    label: 'JavaScript',
    img: JavaScript,
  },
  {
    label: 'TypeScript',
    img: TypeScript,
  },
  {
    label: 'Sass',
    img: Sass,
  },
  {
    label: 'ReactJs',
    img: ReactJs,
  },
  {
    label: 'NodeJs',
    img: isDark ? NodeJsWhite : NodeJs,
  },
  {
    label: 'ExpressJs',
    img: isDark ? ExpressJsWhite : ExpressJs,
  },
  {
    label: 'MongoDB',
    img: MongoDB,
  },
  // {
  //   label: 'PHP',
  //   img: Php,
  // },
  // {
  //   label: 'Laravel',
  //   img: Laravel,
  // },
  // {
  //   label: 'MySQL',
  //   img: MySql,
  // },
  {
    label: 'Aws',
    img: isDark ? AwsWhite : Aws,
  },
];
