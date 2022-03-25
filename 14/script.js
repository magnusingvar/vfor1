let hotel = {
	name: 'Park',
	roomRate: '240',
	discount: '15',
	offerPrice: function() {
		return this.roomRate * ((100 - this.discount) / 100);
	}
};

let hotelName, roomRate, specialRate;
let expiryMsg, today, elEnds;

hotelName 		= document.getElementById('hotelName');
roomRate 		= document.getElementById('roomRate');
specialRate 	= document.getElementById('specialRate');
elEnds 			= document.getElementById('offerEnds');

hotelName.textContent 		= hotel.name;
roomRate.textContent 		= parseFloat(hotel.roomRate).toFixed(2); // hotel.roomRate.toFixed(2); virkaði ekki.
specialRate.textContent 	= '$' + hotel.offerPrice();
today 						= new Date();
elEnds.innerHTML 			= offerExpires(today);

function offerExpires(input) {
	let weekFromToday, day, date, month, year, dayNames, monthNames;

	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	dayNames = [ 'Sunnudagur', 'Mánudagur',
				 'Þriðjudagur', 'Miðvikudagur',
				 'Fimmtudagur', 'Föstudagur',
				 'Laugardagur' ];

	monthNames = [ 'Janúar', 'Febrúar',
				   'Mars', 'Apríl',
				   'Maí','Júní',
		           'Júlí','Ágúst',
		           'Spetember', 'Október',
		           'Nóvember', 'Desember'
	];

	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDay();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();

	expiryMsg = 'Offer expires next ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
}
