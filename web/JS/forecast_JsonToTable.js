
function reset() {
	obj = buidObj();
	document.getElementById("tableContainer").innerHTML = "";
	document.getElementById("message").innerHTML = "";
}


function getJson() {
	let obj;
	let xmlhttp = new XMLHttpRequest();
	let url = "./resources/abril.json";
	let msg = document.getElementById("message");

	msg.innerHTML = "<p>Datos cargados con Ajax</p>";
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			msg.innerHTML = "<p>Datos servidor propio con Ajax</p>";
			obj = JSON.parse(this.responseText);


		} else {
			msg.innerHTML = "<p>Datos creados manualmente</p>";
			obj = buidObj(obj);
		}
		createTable(obj);

	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function capitalize(text) {
	return text.replace(/(^[a-z]| [a-z])/g, function (match, letter) {
		return letter.toUpperCase();
	});
}

function createTable(obj) {
	let cantLines = Object.keys(obj).length;
	let cantFields = Object.keys(obj[0]).length;

	let loc = capitalize(String(obj[0].nombre).toLowerCase());

	let dFormat = { day: 'numeric' };
	let mFormat = { month: 'long' };
	let dmFormat = { day: 'numeric', month: 'long' };
	let dmyFormat = { day: 'numeric', month: 'long', year: 'numeric' };
	let fIni = new Date(obj[0].fecha);
	let fEnd = new Date(obj[cantLines - 1].fecha);
	let ffIni = fIni.toLocaleDateString('es-ES', dFormat);
	let ffEnd = fEnd.toLocaleDateString('es-ES', dFormat);
	let ffmonth = fIni.toLocaleDateString('es-ES', mFormat);

	
	let table = "<table>" + "<caption>" + "Datos meteorológicos de " + loc + " <br>entre el " + ffIni + " y el " + ffEnd + " de " + ffmonth + "</caption>";
	table += "<thead><tr>";
	for (let i = 0; i < cantFields; i++) {
		table += "<th scope=\"col\">";
		table += Object.keys(obj[0])[i];
		table += "</th>";
	}
	table += "</tr></thead>";

	table += "<tbody>";
	for (let i = 0; i < cantLines; i++) {
		table += "<tr>";
		
		table += "<th scope=\"row\">";
		let f = new Date(obj[i].fecha);
		let ff = f.toLocaleDateString('es-ES', dmyFormat);
		table += ff;

		table += "</th>";
		for (let j = 1; j < cantFields; j++) {
			table += "<td>";
			if(Object.keys(obj[i])[j] = "nombre"){
				table += capitalize(Object.values(obj[i])[j].toLowerCase());
			}else{
				table += Object.values(obj[i])[j];
			}
			
			table += "</td>";
		}
		table += "</tr>";
	}


	table += "</tbody>";
	table += "</table>";

	document.getElementById("tableContainer").innerHTML = table;

}

function buidObj() {
	let obj =
		[{
			"fecha": "2021-04-01",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "16,8",
			"prec": "14,0",
			"tmin": "13,0",
			"horatmin": "23:59",
			"tmax": "20,6",
			"horatmax": "03:10",
			"dir": "26",
			"velmedia": "0,6",
			"racha": "9,4",
			"horaracha": "03:40"
		}, {
			"fecha": "2021-04-02",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "15,0",
			"prec": "0,5",
			"tmin": "12,5",
			"horatmin": "23:00",
			"tmax": "17,6",
			"horatmax": "14:20",
			"dir": "24",
			"velmedia": "0,6",
			"racha": "6,1",
			"horaracha": "18:20"
		}, {
			"fecha": "2021-04-03",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "14,6",
			"prec": "0,0",
			"tmin": "8,4",
			"horatmin": "23:59",
			"tmax": "20,9",
			"horatmax": "13:50",
			"dir": "04",
			"velmedia": "1,4",
			"racha": "8,9",
			"horaracha": "15:40"
		}, {
			"fecha": "2021-04-04",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "14,6",
			"prec": "0,0",
			"tmin": "6,3",
			"horatmin": "06:40",
			"tmax": "22,9",
			"horatmax": "15:10",
			"dir": "99",
			"velmedia": "1,9",
			"racha": "6,9",
			"horaracha": "Varias"
		}, {
			"fecha": "2021-04-05",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "15,6",
			"prec": "0,0",
			"tmin": "6,8",
			"horatmin": "05:50",
			"tmax": "24,4",
			"horatmax": "13:50",
			"dir": "03",
			"velmedia": "1,4",
			"racha": "7,8",
			"horaracha": "17:40"
		}, {
			"fecha": "2021-04-06",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "11,4",
			"prec": "0,0",
			"tmin": "5,8",
			"horatmin": "06:10",
			"tmax": "17,1",
			"horatmax": "14:50",
			"dir": "04",
			"velmedia": "1,7",
			"racha": "9,4",
			"horaracha": "20:00"
		}, {
			"fecha": "2021-04-07",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "13,4",
			"prec": "0,0",
			"tmin": "6,1",
			"horatmin": "06:50",
			"tmax": "20,7",
			"horatmax": "13:40",
			"dir": "13",
			"velmedia": "1,1",
			"racha": "6,4",
			"horaracha": "08:40"
		}, {
			"fecha": "2021-04-08",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "12,6",
			"prec": "0,0",
			"tmin": "7,4",
			"horatmin": "06:40",
			"tmax": "17,7",
			"horatmax": "13:20",
			"dir": "25",
			"velmedia": "1,7",
			"racha": "8,1",
			"horaracha": "15:10"
		}, {
			"fecha": "2021-04-09",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "13,2",
			"prec": "1,0",
			"tmin": "8,4",
			"horatmin": "05:40",
			"tmax": "18,0",
			"horatmax": "12:20",
			"dir": "24",
			"velmedia": "1,4",
			"racha": "8,6",
			"horaracha": "13:50"
		}, {
			"fecha": "2021-04-10",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "12,6",
			"prec": "1,0",
			"tmin": "9,9",
			"horatmin": "23:59",
			"tmax": "15,3",
			"horatmax": "12:00",
			"dir": "36",
			"velmedia": "0,8",
			"racha": "7,2",
			"horaracha": "22:00"
		}, {
			"fecha": "2021-04-11",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "9,8",
			"prec": "0,0",
			"tmin": "6,0",
			"horatmin": "23:59",
			"tmax": "13,5",
			"horatmax": "15:10",
			"dir": "03",
			"velmedia": "1,9",
			"racha": "11,1",
			"horaracha": "10:30"
		}, {
			"fecha": "2021-04-12",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "11,7",
			"prec": "0,9",
			"tmin": "4,9",
			"horatmin": "06:20",
			"tmax": "18,5",
			"horatmax": "14:30",
			"dir": "12",
			"velmedia": "1,7",
			"racha": "8,1",
			"horaracha": "08:50"
		}, {
			"fecha": "2021-04-13",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "13,7",
			"prec": "2,7",
			"tmin": "10,4",
			"horatmin": "06:50",
			"tmax": "17,0",
			"horatmax": "15:20",
			"dir": "15",
			"velmedia": "0,8",
			"racha": "4,7",
			"horaracha": "16:20"
		}, {
			"fecha": "2021-04-14",
			"indicativo": "1475X",
			"nombre": "SANTIAGO DE COMPOSTELA",
			"provincia": "A CORUÑA",
			"altitud": "240",
			"tmed": "16,2",
			"prec": "0,0",
			"tmin": "9,8",
			"horatmin": "04:00",
			"tmax": "22,6",
			"horatmax": "13:50",
			"dir": "03",
			"velmedia": "1,7",
			"racha": "7,8",
			"horaracha": "19:30"
		}]

	return obj;
}