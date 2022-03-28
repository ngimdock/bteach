import React, { useEffect, useRef, useState, useContext, useMemo } from "react";
import style from './style.module.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ImgCircle from "../../elements/imgCircle/ImgCircle";
import Paragraphe from "../../elements/p/Paragraphe";
import serviceContext from "../../../dataManager/context/servicesContext";

const image = require("../../../medias/photos/shallow-focus-shot-young-black-male-grey-wall (1).jpg")

const RecommandationItem = ({ note }) => {

  console.log(note);

  return (
    <article className={style.recommandationItem}>

      <div className="grid content-between h-full">
        <Paragraphe>
        { note.message }
        </Paragraphe>
        <span>{`${note.stars} étoiles`}</span>
      </div>

      <div className={style.recommandationInfo}>
        <ImgCircle classe={style.recommandationImage} src={note.author.profilePic} alt="eleve" />

        <span className={`${style.recommandationLevel} block test-xs `}>{`${note.author.name + " " + note.author.firstName }`}</span>
      </div>
    </article>
  )
}

const RecommandationCarousel = ({ notes, serviceId }) => {
  // Set Local state
  const [slideIndex, setSlideIndex] = useState(0)

  //services context
  const { services, storeAllNotesService } = useContext(serviceContext);
  
  // Set Slider Ref
  const slider = useRef()

  // UseEffect section
  useEffect(() => {
    slider.current.style.translate = `-${slideIndex * 100}%`
  }, [slideIndex])

  useEffect(() => {
    console.log(getService(services, serviceId).getNotes)
  }, []);

  const handleSlide = (action) => {
    switch (action) {
      case "next": {
        if (slideIndex === notes.length-1) {
          setSlideIndex(0)
        } else {
          setSlideIndex(prev => prev + 1)
        }

        break
      }

      case "prev": {
        if (slideIndex === 0) {
          setSlideIndex(notes.length-1)
        } else {
          setSlideIndex(prev => prev - 1)
        }

        break
      }

      default: // Nothing here
      break
    }
  }

  const getService = (services, serviceId) => {
    const service = services.find((serv) => {
      return serv.getId === serviceId;
    });

    return service;
  };

  return (
    <section className={style.recommandation}>
      <section className={style.recommationContainer}>
        <div 
          ref={slider} 
          className={style.recommandationSlider}
        >
          {
            notes && (
              notes.map((note) => {
                return <RecommandationItem note={note} />
              })
            )
          }
        </div>
      </section>

      <BsArrowLeft
        onClick={() => handleSlide("prev")} 
        size={25} 
        className={style.recommandationPrev} 
      />
      <BsArrowRight 
        onClick={() => handleSlide("next")} 
        size={25} 
        className={style.recommandationNext} 
      />

      <span className={style.sliderIndicator}>{slideIndex + 1} sur {notes.length}</span>
    </section>
  )
}

export default React.memo(RecommandationCarousel)