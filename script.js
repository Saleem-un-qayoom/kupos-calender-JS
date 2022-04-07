const renderCalender = (currentMonth, currentYear, selectedDate) => {
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

	monthRowSpan.innerHTML = month[currentMonth] + ` ${currentYear}`;

	let firstDateOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();

	if (firstDateOfTheMonth === 0) {
		firstDateOfTheMonth = 7;
	}

	const daysOfCurrentMOnth = new Date(
		currentYear,
		currentMonth + 1,
		0
	).getDate();

	const todaysDate = d.getDate();

	let days = '';

	let i = 1;
	let k = 1;
	while (i <= daysOfCurrentMOnth) {
		if (firstDateOfTheMonth <= k) {
			if (currentYear < d.getFullYear()) {
				days += `<div class="disable-button date-column-item" >${i}</div>`;
			} else if (currentYear === d.getFullYear()) {
				if (currentMonth < d.getMonth()) {
					days += `<div class="disable-button date-column-item" >${i}</div>`;
				} else {
					if (currentMonth == d.getMonth() && i < todaysDate) {
						days += `<div class="disable-button date-column-item" >${i}</div>`;
					} else {
						days += `<div class="date-column-item ${
							currentMonth == selectedMonth &&
							i == selectedDate
								? 'selected-date'
								: ''
						}" 
						
						onclick="onDateSelect(${i})"
						>${i}</div>`;
					}
				}
			} else {
				days += `<div class="date-column-item"
				onclick="onDateSelect(${i})"
				>${i}</div>`;
			}

			i++;
		} else {
			days += `<div></div>`;
		}
		k++;
	}

	dateColum.innerHTML = days;
	calenderInput.innerHTML = `${selectedDate}/${selectedMonth}/${selectedYear}`;
};

const renderClock1 = () => {
	hourValue.innerHTML = hour;
	minuteValue.innerHTML = minute;
	amPmValue.innerHTML = amPm;

	clockValue.innerHTML = `${hour}:${minute}:${amPm}`;
};

const renderClock2 = () => {
	let i = 0;

	while (i <= 23) {
		if (i < 10) {
			document.querySelector(
				'.hour-list'
			).innerHTML += `<div class="hour-item"
			onclick="onHourClick(0${i})"
			>0${i}</div>`;
		} else {
			document.querySelector(
				'.hour-list'
			).innerHTML += `<div class="hour-item"
			onclick="onHourClick(${i})"
			>${i}</div>`;
		}
		i++;
	}
};

const renderClock3 = () => {
	let i = 0;

	while (i <= 55) {
		if (i < 10) {
			document.querySelector(
				'.minute-list'
			).innerHTML += `<div class="minute-item"
			onclick="onMinuteClick(0${i})"
			>0${i}</div>`;
		} else {
			document.querySelector(
				'.minute-list'
			).innerHTML += `<div class="minute-item"
			onclick="onMinuteClick(${i})"
			>${i}</div>`;
		}
		i += 5;
	}
};

const onHourClick = i => {
	hour = i;
	if (parseInt(i) > 11) {
		amPm = 'PM';
	} else {
		amPm = 'AM';
	}
	renderClock1();
	clockSecond.classList.toggle('show-calender');
	clockThird.classList.toggle('show-calender');
};

const onMinuteClick = i => {
	minute = i;
	renderClock1();
	clockThird.classList.toggle('show-calender');
};

const onDateSelect = date => {
	selectedDate = date;
	selectedMonth = currentMonth;
	selectedYear = currentYear;

	renderCalender(currentMonth, currentYear, selectedDate);

	calender.classList.toggle('show-calender');
	clockOne.classList.toggle('show-calender');
};

let calenderInput = document.querySelector('.delfos-calender-value');
let calender = document.querySelector('.delfos-calender');
let nextMonth = document.querySelector('.next-month');
let prevMonth = document.querySelector('.prev-month');
let monthRowSpan = document.querySelector('.month-row span');
let dateColum = document.querySelector('.date-column');
let clockOne = document.querySelector('.delfos-clock-1');
let clockSecond = document.querySelector('.delfos-clock-2');
let clockThird = document.querySelector('.delfos-clock-3');

// HOURS
let increaseHour = document.querySelector('.increase-hour');
let decreaseHour = document.querySelector('.decrease-hour');

// MINUTES
let increaseMinutes = document.querySelector('.increase-minute');
let decreaseMinutes = document.querySelector('.decrease-minute');

// AM PM
let changeAmPM1 = document.querySelector('.change-am-pm-1');
let changeAmPM2 = document.querySelector('.change-am-pm-2');

let hourValue = document.querySelector('.hour-value');
let minuteValue = document.querySelector('.minute-value');
let amPmValue = document.querySelector('.am-pm-value');

let clockValue = document.querySelector('.delfos-clock-value');

const d = new Date();

let selectedDate = d.getDate();
let selectedMonth = d.getMonth();
let selectedYear = d.getFullYear();

let currentMonth = d.getMonth();
let currentYear = d.getFullYear();

let hour = '00';
let minute = '00';
let amPm = 'AM';

// CALENDER
calenderInput.addEventListener('click', () => {
	if (clockThird.classList.contains('show-calender')) {
		clockThird.classList.toggle('show-calender');
	}
	if (clockSecond.classList.contains('show-calender')) {
		clockSecond.classList.toggle('show-calender');
	}
	if (clockOne.classList.contains('show-calender')) {
		clockOne.classList.toggle('show-calender');
	}

	calender.classList.toggle('show-calender');
});

prevMonth.addEventListener('click', () => {
	if (currentMonth === 0) {
		currentMonth = 11;
		currentYear--;
	} else {
		currentMonth--;
	}
	renderCalender(currentMonth, currentYear, selectedDate);
});

nextMonth.addEventListener('click', () => {
	if (currentMonth === 11) {
		currentMonth = 0;
		currentYear++;
	} else {
		currentMonth++;
	}
	renderCalender(currentMonth, currentYear, selectedDate);
});

changeAmPM1.addEventListener('click', () => {
	console.log('first');
	if (amPm === 'AM') {
		amPm = 'PM';
	} else {
		amPm = 'AM';
	}
	renderClock1();
});

changeAmPM2.addEventListener('click', () => {
	console.log('first');
	if (amPm === 'AM') {
		amPm = 'PM';
	} else {
		amPm = 'AM';
	}
	renderClock1();
});

// CLOCK
increaseHour.addEventListener('click', () => {
	if (parseInt(hour) != 23) {
		if (parseInt(hour) < 9) {
			hour = `0${parseInt(hour) + 1}`;
		} else {
			if (parseInt(hour) >= 11) {
				amPm = 'PM';
			}
			hour = parseInt(hour) + 1;
		}
		renderClock1();
	}
});

decreaseHour.addEventListener('click', () => {
	if (parseInt(hour) != 00) {
		if (parseInt(hour) < 10) {
			hour = `0${parseInt(hour) - 1}`;
		} else {
			if (parseInt(hour) <= 12) {
				amPm = 'AM';
			}
			hour = parseInt(hour) - 1;
		}
		renderClock1();
	}
});

increaseMinutes.addEventListener('click', () => {
	if (parseInt(minute) != 55) {
		if (parseInt(minute) < 5) {
			minute = `0${parseInt(minute) + 5}`;
		} else {
			minute = parseInt(minute) + 5;
		}
		renderClock1();
	}
});

decreaseMinutes.addEventListener('click', () => {
	if (parseInt(minute) !== 00) {
		if (parseInt(minute) <= 10) {
			minute = `0${parseInt(minute) - 5}`;
		} else {
			minute = parseInt(minute) - 5;
		}
		renderClock1();
	}
});

// CLOCK SECOND
clockValue.addEventListener('click', () => {
	if (clockOne.classList.contains('show-calender')) {
		clockOne.classList.toggle('show-calender');
	}
	if (calender.classList.contains('show-calender')) {
		calender.classList.toggle('show-calender');
	}
	if (clockThird.classList.contains('show-calender')) {
		clockThird.classList.toggle('show-calender');
	}
	clockSecond.classList.toggle('show-calender');
});

window.onload = function () {
	renderCalender(currentMonth, currentYear, selectedDate);
	renderClock1();
	renderClock2();
	renderClock3();
};
