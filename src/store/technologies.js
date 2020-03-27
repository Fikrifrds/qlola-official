import ReactJs from '../assets/images/technologies/react.svg';
import NodeJs from '../assets/images/technologies/node.svg';
import NodeJsWhite from '../assets/images/technologies/node-white.svg';
import MongoDB from '../assets/images/technologies/mongodb.svg';
import Sass from '../assets/images/technologies/sass.svg';
import Aws from '../assets/images/technologies/aws.svg';
import AwsWhite from '../assets/images/technologies/aws-white.svg';

export default (isDark) => [
  {
    label: 'ReactJs',
    img: ReactJs,
  },
  {
    label: 'NodeJs',
    img: isDark ? NodeJsWhite : NodeJs,
  },
  {
    label: 'MongoDB',
    img: MongoDB,
  },
  {
    label: 'Sass',
    img: Sass,
  },
  {
    label: 'Aws',
    img: isDark ? AwsWhite : Aws,
  },
];
