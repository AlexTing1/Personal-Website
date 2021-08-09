import React, { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import css from './css/projectTile.css';
import TechList from './TechList';

function ProjectTile({ tile }) {
  console.log(tile);
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
        <img src={tile.imgDisplay} alt="default display" className={css.img} />
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
          <button type="button" onClick={openModal}>Open Modal</button>
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
          >
            {tile.img.map((image) => (
              <div>
                <img src={image} className={tile.css} alt="" />
              </div>
            ))}
          </Carousel>
        </div>

      </Modal>
    </div>
  );
}

export default ProjectTile;
