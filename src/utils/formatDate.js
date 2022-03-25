// This function display the relative date
const getRelativeDate = (date) => {
	const months = [
		"janvier",
		"fevrier",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"aout",
		"septembre",
		"octobre",
		"novembre",
		"decembre"
	]
  console.log(date)

	const exactDate = new Date(date)
		
	return `${exactDate.getDate() + 1} ${months[exactDate.getMonth()]} ${exactDate.getFullYear()}`
}

export {getRelativeDate}