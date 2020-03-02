import React, { useState, useContext } from 'react';
import renderHTML from 'react-render-html';
import Img from 'react-image';
import { useParams } from 'react-router-dom';
import projects from '../../store/projects';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Loading, { UnLoader } from '../../components/Loading';
import { LanguageContext } from '../../context/LanguageContext';

export default () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const { slug } = useParams();
  const currentProject = projects.find((project) => project.slug() === slug);
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onChooseImage = (imageUrl, description) => () => {
    setSelectedImage(imageUrl);
    setSelectedDescription(description);
    onOpenModal();
  };

  return (
    <div className="project-details">
      <p className="title">{currentProject.title}</p>
      <p className="sub-title">{currentProject.description[language.id]}</p>
      <Img
        className="project-main-image"
        src={`https://ik.imagekit.io/qlola/tr:w-800/${currentProject.imgPathName}`}
        loader={<Loading />}
        unloader={<UnLoader />}
      />
      <div className="content">
        {renderHTML(currentProject.content[language.id])}
      </div>
      <div>
        <div>
          Site Url:
          <a target="_blank" rel="noopener noreferrer" href={currentProject.url}>
            {' '}
            {currentProject.url}
          </a>
        </div>
        <div className="gallery-container">
          <p className="title">Project Images</p>
          <hr className="underline" />
          <div className="gallery">
            { currentProject.imageCollectionPathName.map((image) => (
              <Card width={300} key={image.urlPathName} onClick={onChooseImage(currentProject.originalHostName + image.urlPathName, image.description[language.id])}>
                <div className="image-item">
                  <Img
                    width="250px"
                    src={currentProject.thumbnailHostname + image.urlPathName}
                    loader={<Loading />}
                    unloader={<UnLoader />}
                    alt={image.description[language.id]}
                  />
                </div>
                <div className="text-center">
                  <p>{image.description[language.id]}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <Modal isOpen={modalOpen} onClose={onCloseModal}>
          <Img src={selectedImage} className="image-show" loader={<Loading />} unloader={<UnLoader />} alt={selectedDescription} />
          <p className="description-show">{selectedDescription}</p>
        </Modal>
      </div>
    </div>
  );
};
