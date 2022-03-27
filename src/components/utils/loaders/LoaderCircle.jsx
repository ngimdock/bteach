import styles from './loader.module.css'

const LoaderCircle = ({ size, sizeValue, color, position }) => {
  let defaultSize
  let defaultColor

  if (size) {
    if (size === "small") {
      defaultSize = 30
    } else if (size === "normal") {
      defaultSize = 50
    } else if (size === "large") {
      defaultSize = 70
    } else if (size === "custom" && sizeValue) {
      defaultSize = sizeValue
    } else {
      defaultSize = 50
    }
  }

  if (color) {
    defaultColor = color
  } else {
    defaultColor = "#3e4bff"
  }

  return (
    <span
      style={{
        position: position ? position:"",
        width: defaultSize,
        height: defaultSize,
        borderColor: defaultColor,
        borderBottomColor: "transparent"
      }} 
      className={styles.loader} 
    />
  )
}

export default LoaderCircle