import React, { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import css from './css/projectTile.css';
import TechList from './TechList';

function ProjectTile({ tile }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={css.container}>
      <div id="tile image" className={css.imgContainer}>
        <img src={tile.imgDisplay} alt="default display" className={css.img} onClick={openModal} />
      </div>
      <div id="text block" className={css.textBlock}>
        <div className={css.textComponent}>
          <h2>{tile.title}</h2>
        </div>
        <div className={css.textComponent}>
          <p>{tile.body}</p>
        </div>
        <div className={css.textComponent}>
          <TechList list={tile.tech} />
        </div>
        <div>
          <a href={tile.github} className={css.link}>
            <button type="button" className={css.myButton}>
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" className={css.iconLinks} />
              <span className={css.text}>
                {tile.title}
                {' '}
                Github
              </span>
            </button>
          </a>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={css.modal}
      >
        <div className={css.carouselContainer}>
          <Carousel
            showThumbs={false}
            className={css.carousel}
            autoPlay
            infiniteLooop
            showStatus={false}
          >
            {tile.img.map((image) => (
              <div>
                <img src={image} className={tile.css} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={css.blockContainer}>
          <div className={css.modalTextContainer}>
            <div className={css.modalTextComponent}>
              <p className={css.modalParagraph}>{tile.body}</p>
            </div>
          </div>
          <div className={css.modalButton}>
            <a href={tile.github} className={css.link}>
              <button type="button" className={css.myButtonModal}>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" className={css.iconLinks} />
                <span className={css.text}>
                  {tile.title}
                  {' '}
                  Github
                </span>
              </button>
            </a>
          </div>
          <div className={css.modalTextContainer}>
            <div className={css.modalTechList}>
              <TechList list={tile.tech} />
            </div>
          </div>
        </div>

      </Modal>
    </div>
  );
}

export default ProjectTile;
