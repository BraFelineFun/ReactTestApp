import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import MySelect from "./components/MySelect/MySelect";
import "./styles/App.css";

function App() {
	const [evtArr, setEvtArr] = useState([]);

	const [filterCity, setFilterCity] = useState("");
	const [filterMonth, setFilterMonth] = useState("");

	const monthNumb = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]; //Нумерация с 01 = январь по 12 = декабрь

	// Хук для подгрузки данных при загрузке страницы
	useEffect(() => {
		getCards();
	}, []);

	function getArr(str) {
		if (str === "cities") {
			var cities = [];
			evtArr.forEach((val) => {
				cities.push(val.city);
			});
			return Array.from(new Set(cities));
		}

		if (str === "months") {
			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];
			return Array.from(new Set(months));
		}
	}

	// Получаем данные о карточках по http через fetch API
	async function getCards() {
		const response = await fetch(
			"https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json"
		);

		if (response.ok) {
			let data = await response.json();
			setEvtArr(data);
		} else {
			alert("error", response.status);
		}
	}

	function getSortedCardsByCity() {
		if (filterCity !== "none") {
			return [...evtArr].filter((evt) => evt.city.includes(filterCity));
		}
		return evtArr;
	}

	function getSortedCards() {
		var p = getSortedCardsByCity();
		if (filterMonth !== "none") {
			return p.filter((evt) => evt.date.split(".")[1].includes(filterMonth));
		}
		return getSortedCardsByCity();
	}

	const sortedCards = getSortedCards();

	const filterCardsCity = (prop) => {
		setFilterCity(prop);
	};

	const filterCardsMonth = (prop) => {
		setFilterMonth(prop);
	};

	return (
		<div className="App">
			<div className="content">
				<div className="wrapper">
					<div className="header">
						<div className="header__title">
							<h1>Event Listing</h1>
						</div>
						<div className="header__searchParam">
							{/* Выбор города */}
							<MySelect
								arr={getArr("cities")}
								innerval={getArr("cities")}
								title="City"
								value={filterCity}
								onChange={filterCardsCity}
							/>
							{/* Выбор месяца */}
							<MySelect
								arr={getArr("months")}
								innerval={monthNumb}
								title="Month"
								value={filterMonth}
								onChange={filterCardsMonth}
							/>
						</div>
					</div>

					<CardList cards={sortedCards}></CardList>
				</div>
			</div>
		</div>
	);
}

export default App;
