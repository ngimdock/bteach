import React, { useEffect, useRef, useState, useMemo } from "react";
import style from './style.module.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ImgCircle from "../../elements/imgCircle/ImgCircle";

const image = require("../../../medias/photos/shallow-focus-shot-young-black-male-grey-wall (1).jpg")

const RecommandationItem = ({ stars, message }) => {

  return (
    <article className={style.recommandationItem}>
      <span>
       { message }
      </span>

      <div className={style.recommandationInfo}>
        <ImgCircle classe={style.recommandationImage} src={image} alt="eleve" />

        <span className={style.recommandationLevel}>Eleve de 3-ieme</span>
      </div>
    </article>
  )
}

const RecommandationCarousel = ({ notes }) => {

  // console.log(notes)
  
  // Set Local state
  const [slideIndex, setSlideIndex] = useState(0)
  
  // Set Slider Ref
  const slider = useRef()

  // UseEffect section
  useEffect(() => {
    slider.current.style.translate = `-${slideIndex * 100}%`
  }, [slideIndex])

  const handleSlide = (action) => {
    switch (action) {
      case "next": {
        if (slideIndex === 2) {
          setSlideIndex(0)
        } else {
          setSlideIndex(prev => prev + 1)
        }

        break
      }

      case "prev": {
        if (slideIndex === 0) {
          setSlideIndex(2)
        } else {
          setSlideIndex(prev => prev - 1)
        }

        break
      }

      default: // Nothing here
      break
    }
  }

  return (
    <section className={style.recommandation}>
      <section className={style.recommationContainer}>
        <div 
          ref={slider} 
          className={style.recommandationSlider}
        >
          {
            notes.map((item) => {
              return <RecommandationItem  message={item.message} />
            })
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

      <span className={style.sliderIndicator}>{slideIndex + 1} sur 3</span>
    </section>
  )
}

export default React.memo(RecommandationCarousel)