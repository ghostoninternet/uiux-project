import Datepicker from "tailwind-datepicker-react"
import { useState } from "react"
const options = {
	title: "Pick due date",
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-white dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-gray-200",
		input: "bg-[#FFF8E8] border-0 cursor-pointer rounded-lg font-bold",
		inputIcon: "",
		selected: "bg-[#FABB18]",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span>{'<'}</span>,
		next: () => <span>{'>'}</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date(),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Due Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

function DatePicker() {
	const [show, setShow] = useState(false)
	const handleChange = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}

	return (
		<div className="w-1/5">
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
                
            </Datepicker>
		</div>
	)
}

export default DatePicker