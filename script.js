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

const onDateSelect = date => {
	selectedDate = date;
	selectedMonth = currentMonth;
	selectedYear = currentYear;

	renderCalender(currentMonth, currentYear, selectedDate);

	calender.classList.toggle('show-calender');
};

let calenderInput = document.querySelector('.delfos-calender-input');
let calender = document.querySelector('.delfos-calender');
let nextMonth = document.querySelector('.next-month');
let prevMonth = document.querySelector('.prev-month');
let monthRowSpan = document.querySelector('.month-row span');
let dateColum = document.querySelector('.date-column');

const d = new Date();

let selectedDate = d.getDate();
let selectedMonth = d.getMonth();
let selectedYear = d.getFullYear();

let currentMonth = d.getMonth();
let currentYear = d.getFullYear();

calenderInput.addEventListener('click', () => {
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

window.onload = function () {
	renderCalender(currentMonth, currentYear, selectedDate);
};
