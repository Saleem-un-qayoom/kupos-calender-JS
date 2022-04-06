let calender = document.querySelector('.delfos-calender');

document
	.querySelector('.delfos-calender-input')
	.addEventListener('click', () => {
		calender.setAttribute('style', 'display: inline-block !important;');
	});

let currentMonth = 0;

const renderCalender = currentMonth => {
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const d = new Date();
	document.querySelector('.month-row span').innerHTML =
		month[d.getMonth() + currentMonth];
	const firstDateOfTheMonth = new Date(
		d.getFullYear(),
		d.getMonth() + currentMonth,
		1
	).getDay();
	const daysOfCurrentMOnth = new Date(
		d.getFullYear(),
		d.getMonth() + (currentMonth + 1),
		0
	).getDate();

	const todaysDate = d.getDate();

	let days = '';

	let i = 1;
	let k = 1;
	while (i <= daysOfCurrentMOnth) {
		if (firstDateOfTheMonth <= k) {
			// if (d.getMonth() + currentMonth > d.getMonth()) {
			// 	days += `<div class="disable-button">${i}</div>`;
			// } else if (i >= todaysDate) {
			// 	days += `<div class="disable-button">${i}</div>`;
			// } else {
			// 	days += `<div>${i}</div>`;
			// }

			if (d.getMonth() + currentMonth < d.getMonth()) {
				days += `<div class="disable-button">${i}</div>`;
			} else {
				if (
					d.getMonth() + currentMonth == d.getMonth() &&
					i < todaysDate
				) {
					days += `<div class="disable-button">${i}</div>`;
				} else {
					days += `<div>${i}</div>`;
				}
			}

			// if (i >= todaysDate) {
			// 	days += `<div>${i}</div>`;
			// } else {
			// 	days += `<div class="disable-button">${i}</div>`;
			// }

			i++;
		} else {
			days += `<div></div>`;
		}
		k++;
	}

	document.querySelector('.date-column').innerHTML = days;
};

renderCalender(currentMonth);

document.querySelector('.prev-month').addEventListener('click', () => {
	currentMonth--;
	renderCalender(currentMonth);
});

document.querySelector('.next-month').addEventListener('click', () => {
	currentMonth++;
	renderCalender(currentMonth);
});
