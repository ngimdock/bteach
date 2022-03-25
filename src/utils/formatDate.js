// This function display the relative date
const getRelativeDate = (date) => {
	const currentDate = new Date().getTime()
	let diffDate = Math.floor((currentDate - Number(date))/1000)

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