import React, { useEffect, useRef, useState } from 'react'
import style from '../../../css/base.module.css'

const LoadingPage = ({ loading }) => {
	const defaultLoading = loading ? loading:true

  // Set Local state
	const [loaderPage, setLoaderPage] = useState(true)

	// Ref section
	const loadingPageRef = useRef()

	// UseEffect section
	useEffect(() => {
		window.addEventListener("load", handleLoadingPage)

		return () => window.removeEventListener("load", handleLoadingPage)
	}, [])

	// Some Handlers
	const handleLoadingPage = () => {
		setLoaderPage(false)

		let timer = setTimeout(() => {
			loadingPageRef.current.style.display = "none"

			clearTimeout(timer)
		}, 1000)
	}

	const hideLoaderPage = () => {
		return !loaderPage && defaultLoading
	}

  return (
    <section 
			ref={loadingPageRef} 
			className={`${style.loadingPage} ${hideLoaderPage() ? style.loadingPageAnimation:""}`}>
			<span className={style.loadingPageLogo}>Bteach</span>
			<div className={style.loaderSection}>
				<div className={style.loaderSectionIn} />
			</div>
		</section>
  )
}

export default LoadingPage