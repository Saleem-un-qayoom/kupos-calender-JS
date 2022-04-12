const renderCalenderReturn = (
	currentMonthReturn,
	currentYearReturn,
	selectedDateReturn
) => {
	const month = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC',
	];

	monthRowSpanReturn.innerHTML =
		month[currentMonthReturn] + ` ${currentYearReturn}`;

	let firstDateOfTheMonth = new Date(
		currentYearReturn,
		currentMonthReturn,
		1
	).getDay();

	if (firstDateOfTheMonth === 0) {
		firstDateOfTheMonth = 7;
	}

	const daysOfCurrentMOnth = new Date(
		currentYearReturn,
		currentMonthReturn + 1,
		0
	).getDate();

	const todaysDate = dReturn.getDate();

	let days = '';

	let i = 1;
	let k = 1;
	while (i <= daysOfCurrentMOnth) {
		if (firstDateOfTheMonth <= k) {
			if (currentYearReturn < dReturn.getFullYear()) {
				days += `<div class="disable-button-r date-column-item-r" >${i}</div>`;
			} else if (currentYearReturn === dReturn.getFullYear()) {
				if (currentMonthReturn < dReturn.getMonth()) {
					days += `<div class="disable-button-r date-column-item-r" >${i}</div>`;
				} else {
					if (
						currentMonthReturn == dReturn.getMonth() &&
						i < todaysDate
					) {
						days += `<div class="disable-button-r date-column-item-r" >${i}</div>`;
					} else {
						days += `<div class="date-column-item-r ${
							currentMonthReturn == selectedMonthReturn &&
							i == selectedDateReturn
								? 'selected-date-'
								: ''
						}" 
						
						onclick="onDateSelectReturn(${i})"
						>${i}</div>`;
					}
				}
			} else {
				days += `<div class="date-column-item-r"
				onclick="onDateSelectReturn(${i})"
				>${i}</div>`;
			}

			i++;
		} else {
			days += `<div></div>`;
		}
		k++;
	}

	dateColumReturn.innerHTML = days;
	calenderInputReturn.innerHTML = `${selectedDateReturn}/${selectedMonthReturn}/${selectedYearReturn}`;
};

const renderClock1Return = () => {
	hourValueReturn.innerHTML = hourReturn;
	minuteValueReturn.innerHTML = minuteReturn;
	amPmValueReturn.innerHTML = amPmReturn;

	clockValueReturn.innerHTML = `${hourReturn}:${minuteReturn}:${amPmReturn}`;
};

const renderClock2Return = () => {
	let i = 0;

	document.querySelector('.hour-list-r').innerHTML = '';
	while (i <= 23) {
		if (i < 10) {
			document.querySelector(
				'.hour-list-r'
			).innerHTML += `<div class="hour-item-r"
			onclick="onHourClickReturn(0${i})"
			>0${i}</div>`;
		} else {
			document.querySelector(
				'.hour-list-r'
			).innerHTML += `<div class="hour-item-r"
			onclick="onHourClickReturn(${i})"
			>${i}</div>`;
		}
		i++;
	}
};

const renderClock3Return = () => {
	let i = 0;
	document.querySelector('.minute-list-r').innerHTML = '';

	while (i <= 55) {
		if (i < 10) {
			document.querySelector(
				'.minute-list-r'
			).innerHTML += `<div class="minute-item-r"
			onclick="onMinuteClick(0${i})"
			>0${i}</div>`;
		} else {
			document.querySelector(
				'.minute-list-r'
			).innerHTML += `<div class="minute-item-r"
			onclick="onMinuteClick(${i})"
			>${i}</div>`;
		}
		i += 5;
	}
};

const onHourClickReturn = i => {
	hourReturn = i;
	if (parseInt(i) > 11) {
		amPmReturn = 'PM';
	} else {
		amPmReturn = 'AM';
	}
	renderClock1Return();
	clockSecondReturn.classList.toggle('show-calender-r');
	clockThirdReturn.classList.toggle('show-calender-r');
};

const onMinuteClick = i => {
	minuteReturn = i;
	renderClock1Return();
	clockThirdReturn.classList.toggle('show-calender-r');
};

const onDateSelectReturn = date => {
	selectedDateReturn = date;
	selectedMonthReturn = currentMonthReturn;
	selectedYearReturn = currentYearReturn;

	renderCalenderReturn(
		currentMonthReturn,
		currentYearReturn,
		selectedDateReturn
	);
	renderClock1Return();
	renderClock2Return();
	renderClock3Return();

	calenderReturn.classList.toggle('show-calender-r');
	clockOneReturn.classList.toggle('show-calender-r');
};

const renderNoOfPassengersReturn = () => {
	adultValueReturn.innerHTML = noOfAdultsReturn;
	kidValueReturn.innerHTML = noOfKidsReturn;
	babyValueReturn.innerHTML = noOfBabyReturn;
	totalNoOfPassengersReturn.innerHTML = noOfAdultsReturn + noOfKidsReturn;
};

let calenderInputReturn = document.querySelector('.delfos-calender-value-r');
let calenderReturn = document.querySelector('.delfos-calender-r');
let nextMonthReturn = document.querySelector('.next-month-r');
let prevMonthReturn = document.querySelector('.prev-month-r');
let monthRowSpanReturn = document.querySelector('.month-row-r span');
let dateColumReturn = document.querySelector('.date-column-r');
let clockOneReturn = document.querySelector('.delfos-clock-1-r');
let clockSecondReturn = document.querySelector('.delfos-clock-2-r');
let clockThirdReturn = document.querySelector('.delfos-clock-3-r');

// HOURS
let increaseHourReturn = document.querySelector('.increase-hour-r');
let decreaseHourReturn = document.querySelector('.decrease-hour-r');

// MINUTES
let increaseMinutesReturn = document.querySelector('.increase-minute-r');
let decreaseMinutesReturn = document.querySelector('.decrease-minute-r');

// AM PM
let changeAmPM1Return = document.querySelector('.change-am-pm-1-r');
let changeAmPM2Return = document.querySelector('.change-am-pm-2-r');

let hourValueReturn = document.querySelector('.hour-value-r');
let minuteValueReturn = document.querySelector('.minute-value-r');
let amPmValueReturn = document.querySelector('.am-pm-value-r');

let clockValueReturn = document.querySelector('.delfos-clock-value-r');

const dReturn = new Date();

let selectedDateReturn = dReturn.getDate();
let selectedMonthReturn = dReturn.getMonth();
let selectedYearReturn = dReturn.getFullYear();

let currentMonthReturn = dReturn.getMonth();
let currentYearReturn = dReturn.getFullYear();

let hourReturn = '00';
let minuteReturn = '00';
let amPmReturn = 'AM';

// CALENDER
calenderInputReturn.addEventListener('click', () => {
	if (clockThirdReturn.classList.contains('show-calender-r')) {
		clockThirdReturn.classList.toggle('show-calender-r');
	}
	if (clockSecondReturn.classList.contains('show-calender-r')) {
		clockSecondReturn.classList.toggle('show-calender-r');
	}
	if (clockOneReturn.classList.contains('show-calender-r')) {
		clockOneReturn.classList.toggle('show-calender-r');
	}
	if (selectPassengerBoxReturn.classList.contains('show-calender-r')) {
		selectPassengerBoxReturn.classList.toggle('show-calender-r');
	}

	calenderReturn.classList.toggle('show-calender-r');
});

prevMonthReturn.addEventListener('click', () => {
	if (currentMonthReturn === 0) {
		currentMonthReturn = 11;
		currentYearReturn--;
	} else {
		currentMonthReturn--;
	}
	renderCalenderReturn(
		currentMonthReturn,
		currentYearReturn,
		selectedDateReturn
	);
});

nextMonthReturn.addEventListener('click', () => {
	if (currentMonthReturn === 11) {
		currentMonthReturn = 0;
		currentYearReturn++;
	} else {
		currentMonthReturn++;
	}
	renderCalenderReturn(
		currentMonthReturn,
		currentYearReturn,
		selectedDateReturn
	);
});

changeAmPM1Return.addEventListener('click', () => {
	if (amPmReturn === 'AM') {
		amPmReturn = 'PM';
	} else {
		amPmReturn = 'AM';
	}
	renderClock1Return();
});

changeAmPM2Return.addEventListener('click', () => {
	if (amPmReturn === 'AM') {
		amPmReturn = 'PM';
	} else {
		amPmReturn = 'AM';
	}
	renderClock1Return();
});

// CLOCK
increaseHourReturn.addEventListener('click', () => {
	if (parseInt(hourReturn) != 23) {
		if (parseInt(hourReturn) < 9) {
			hourReturn = `0${parseInt(hourReturn) + 1}`;
		} else {
			if (parseInt(hourReturn) >= 11) {
				amPmReturn = 'PM';
			}
			hourReturn = parseInt(hourReturn) + 1;
		}
		renderClock1Return();
	}
});

decreaseHourReturn.addEventListener('click', () => {
	if (parseInt(hourReturn) != 00) {
		if (parseInt(hourReturn) < 10) {
			hourReturn = `0${parseInt(hourReturn) - 1}`;
		} else {
			if (parseInt(hourReturn) <= 12) {
				amPmReturn = 'AM';
			}
			hourReturn = parseInt(hourReturn) - 1;
		}
		renderClock1Return();
	}
});

increaseMinutesReturn.addEventListener('click', () => {
	if (parseInt(minuteReturn) != 55) {
		if (parseInt(minuteReturn) < 5) {
			minuteReturn = `0${parseInt(minuteReturn) + 5}`;
		} else {
			minuteReturn = parseInt(minuteReturn) + 5;
		}
		renderClock1Return();
	}
});

decreaseMinutesReturn.addEventListener('click', () => {
	if (parseInt(minuteReturn) !== 00) {
		if (parseInt(minuteReturn) <= 10) {
			minuteReturn = `0${parseInt(minuteReturn) - 5}`;
		} else {
			minuteReturn = parseInt(minuteReturn) - 5;
		}
		renderClock1Return();
	}
});

// CLOCK SECOND
clockValueReturn.addEventListener('click', () => {
	if (clockOneReturn.classList.contains('show-calender-r')) {
		clockOneReturn.classList.toggle('show-calender-r');
	}
	if (calenderReturn.classList.contains('show-calender-r')) {
		calenderReturn.classList.toggle('show-calender-r');
	}
	if (clockThirdReturn.classList.contains('show-calender-r')) {
		clockThirdReturn.classList.toggle('show-calender-r');
	}
	if (selectPassengerBoxReturn.classList.contains('show-calender-r')) {
		selectPassengerBoxReturn.classList.toggle('show-calender-r');
	}
	clockSecondReturn.classList.toggle('show-calender-r');
});

const selectPassengerInputReturn = document.querySelector(
	'.select-passengers-input-r'
);
const selectPassengerBoxReturn = document.querySelector(
	'.select-passengers-box-r'
);

selectPassengerInputReturn.addEventListener('click', () => {
	if (clockOneReturn.classList.contains('show-calender-r')) {
		clockOneReturn.classList.toggle('show-calender-r');
	}
	if (calenderReturn.classList.contains('show-calender-r')) {
		calenderReturn.classList.toggle('show-calender-r');
	}
	if (clockThirdReturn.classList.contains('show-calender-r')) {
		clockThirdReturn.classList.toggle('show-calender-r');
	}
	if (clockSecondReturn.classList.contains('show-calender-r')) {
		clockSecondReturn.classList.toggle('show-calender-r');
	}
	selectPassengerBoxReturn.classList.toggle('show-calender-r');
});

let adultValueReturn = document.querySelector('.adult-value-r');
let kidValueReturn = document.querySelector('.kid-value-r');
let babyValueReturn = document.querySelector('.baby-value-r');

let totalNoOfPassengersReturn = document.querySelector(
	'.select-passenger-value-r'
);

let increaseAdultReturn = document.querySelector('.increase-adult-r');
let decreaseAdultReturn = document.querySelector('.decrease-adult-r');

let increaseKidReturn = document.querySelector('.increase-kid-r');
let decreaseKidReturn = document.querySelector('.decrease-kid-r');

let increaseBabyReturn = document.querySelector('.increase-baby-r');
let decreaseBabyReturn = document.querySelector('.decrease-baby-r');

let noOfAdultsReturn = 1;
let noOfKidsReturn = 0;
let noOfBabyReturn = 0;

increaseAdultReturn.addEventListener('click', () => {
	if (noOfAdultsReturn !== 10) {
		noOfAdultsReturn++;
		renderNoOfPassengersReturn();
	}
});

decreaseAdultReturn.addEventListener('click', () => {
	if (noOfAdultsReturn !== 1) {
		noOfAdultsReturn--;
		renderNoOfPassengersReturn();
	}
});

increaseKidReturn.addEventListener('click', () => {
	if (noOfKidsReturn !== 10) {
		noOfKidsReturn++;
		renderNoOfPassengersReturn();
	}
});

decreaseKidReturn.addEventListener('click', () => {
	if (noOfKidsReturn !== 0) {
		noOfKidsReturn--;
		renderNoOfPassengersReturn();
	}
});

increaseBabyReturn.addEventListener('click', () => {
	if (noOfBabyReturn !== 7) {
		noOfBabyReturn++;
		renderNoOfPassengersReturn();
	}
});

decreaseBabyReturn.addEventListener('click', () => {
	if (noOfBabyReturn !== 0) {
		noOfBabyReturn--;
		renderNoOfPassengersReturn();
	}
});

window.onload = function () {
	renderCalenderReturn(
		currentMonthReturn,
		currentYearReturn,
		selectedDateReturn
	);
	// renderClock1Return();
	// renderClock2Return();
	// renderClock3Return();
	renderNoOfPassengersReturn();
};
