import React, { useContext } from 'react';
import Img from 'react-image';
import Card from '../../components/Card';
import projects from '../../store/projects';
import { Text, LanguageContext } from '../../context/LanguageContext';
import Loading, { UnLoader } from '../../components/Loading';


export default () => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  return (
    <div className="projects">
      <p className="title"><Text tid="projects" /></p>
      <div className="cardContainer">
        {projects.map((project) => (
          <Card
            key={project.id}
            width={300}
            height={300}
            to={`/projects/${project.slug()}`}
            shadow
          >
            <Img
              src={project.thumbnailHostname + project.imgPathName}
              className="card-image"
              loader={<Loading />}
              unloader={<UnLoader />}
              alt={project.title}
            />
            <p className="inner-title">{project.title}</p>
            <p className="inner-description">{project.description[language.id]}</p>
          </Card>
        ))}

      </div>
    </div>
  );
};
