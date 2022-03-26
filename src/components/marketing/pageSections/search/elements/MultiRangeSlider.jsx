import React, { useCallback, useEffect, useState, useRef } from "react";
import "../../../../../css/multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onGetFilter }) => {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const minValRef = useRef(null);
	const maxValRef = useRef(null);
	const range = useRef(null);

	// Convert to percentage
	const getPercent = useCallback(
		(value) => Math.round(((value - min) / (max - min)) * 100),
		[min, max]
	);

	// Set width of the range to decrease from the left side
	useEffect(() => {
		if (maxValRef.current) {
			const minPercent = getPercent(minVal);
			const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

			if (range.current) {
				range.current.style.left = `${minPercent}%`;
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [minVal, getPercent]);

	// Set width of the range to decrease from the right side
	useEffect(() => {
		if (minValRef.current) {
			const minPercent = getPercent(+minValRef.current.value);
			const maxPercent = getPercent(maxVal);

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [maxVal, getPercent]);

	const handleChange = (type, value) => {
		if (type === "min") {
			setMinVal(value)
		} else {
			setMaxVal(value)
		}

		handleGetFilter()
	}

	const handleGetFilter = () => {
		const	value = {
			min: minVal,
			max: maxVal
		}

		console.log(value)

		onGetFilter("prix", value)
	}

	return (
		<div className="my-3 multiRangeSlider">
			<input
				type="range"
				min={min}
				max={max}
				value={minVal}
				step="1000"
				ref={minValRef}
				id="slider1"
				onChange={(event) => handleChange("min", event.target.value)}
				className="thumb thumb--zindex-4"
			/>
			<input
				type="range"
				min={min}
				max={max}
				value={maxVal}
				step="1000"
				ref={maxValRef}
				id="slider2"
				onChange={(event) => handleChange("max", event.target.value)}
				className="thumb thumb--zindex-4"
			/>

			<div className="slider">
				<div className="slider__track" />
				<div ref={range} className="slider__range" />
				<div className="slider__left-value">{minVal} fcfa</div>
				<div className="slider__right-value">{maxVal} fcfa</div>
			</div>
		</div>
	);
};


export default MultiRangeSlider;
