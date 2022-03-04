import React, { useEffect, useRef, useState } from "react";
import style from './style.module.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ImgCircle from "../../elements/imgCircle/ImgCircle";

const image = require("../../../medias/photos/shallow-focus-shot-young-black-male-grey-wall (1).jpg")

const RecommandationItem = () => {
  return (
    <article className={style.recommandationItem}>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius voluptate similique asperiores sapiente est dolores tempora sequi, officia iste rem consectetur fugiat vel nesciunt earum veniam voluptatem aspernatur odit. Qui corrupti odit, perferendis quisquam harum libero recusandae excepturi autem deleniti rerum modi sapiente, animi facere, sint est incidunt illum tenetur!
      </span>

      <div className={style.recommandationInfo}>
        <ImgCircle classe={style.recommandationImage} src={image} alt="eleve" />

        <span className={style.recommandationLevel}>Eleve de 3-ieme</span>
      </div>
    </article>
  )
}

const RecommandationCarousel = () => {
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
            [1, 1, 1].map((item) => {
              return <RecommandationItem />
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

export default RecommandationCarousel