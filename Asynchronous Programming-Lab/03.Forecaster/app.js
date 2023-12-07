function attachEvents() {
    const townName = document.getElementById("location");
    const button = document.getElementById("submit");
    const forecast = document.getElementById("forecast");
    const cuurentCondition = forecast.querySelector("#current");
    const upcomingCondition = forecast.querySelector("#upcoming");

    button.addEventListener("click", showWeather)

    function showWeather() {
        fetch("http://lsocalhost:3030/jsonstore/forecaster/locations")
            .then(res => res.json())
            .then(data => {
                const weatherObject = data.filter(w => w.name === townName.value)[0];
                const codeName = weatherObject.code;

                fetch(`http://localhost:3030/jsonstore/forecaster/today/${codeName}`)
                    .then(res => res.json())
                    .then(data => {
                        forecast.style.display = "block";

                        const forecastName = data.name;
                        const forecasCondition = data.forecast.condition;
                        const lowForecastTemperature = data.forecast.low;
                        const highForecastTemperature = data.forecast.high;

                        const forecastElement = document.createElement("div");
                        forecastElement.classList.add("forecasts");
                        cuurentCondition.appendChild(forecastElement);


                        const spanConditionSymbol = document.createElement("span");
                        spanConditionSymbol.classList.add("condition", "symbol");
                        spanConditionSymbol.innerHTML = `&#x2600`;
                        forecastElement.appendChild(spanConditionSymbol);

                        const spanCondition = document.createElement("span");
                        spanCondition.classList.add("condition");
                        forecastElement.appendChild(spanCondition);

                        const spanForecastName = document.createElement("span");
                        spanForecastName.classList.add("forecast-data");
                        spanForecastName.textContent = forecastName;
                        spanCondition.appendChild(spanForecastName);

                        const spanForecastTemperature = document.createElement("span");
                        spanForecastTemperature.classList.add("forecast-data");
                        spanForecastTemperature.innerHTML = `${lowForecastTemperature}&#176/${highForecastTemperature}&#176`;
                        spanCondition.appendChild(spanForecastTemperature);

                        const spanForecastCondition = document.createElement("span");
                        spanForecastCondition.classList.add("forecast-data");
                        spanForecastCondition.textContent = forecasCondition;
                        spanCondition.appendChild(spanForecastCondition);

                        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${codeName}`)
                            .then(res => res.json())
                            .then(data => {
                                const forecastName = data.name;
                                const forecasts = data.forecast;

                                const forecastInfo = document.createElement("div");
                                forecastInfo.classList.add("forecast-info");
                                upcomingCondition.appendChild(forecastInfo);

                                for (const forecast of forecasts) {
                                    const forecasCondition = forecast.condition;
                                    const lowForecastTemperature = forecast.low;
                                    const highForecastTemperature = forecast.high;

                                    const upcoming = document.createElement("span");
                                    upcoming.classList.add("upcoming");
                                    forecastInfo.appendChild(upcoming);

                                    const spanConditionSymbol = document.createElement("span");
                                    spanConditionSymbol.classList.add("symbol");
                                    spanConditionSymbol.innerHTML = `&#x26C5`;
                                    upcoming.appendChild(spanConditionSymbol);

                                    const spanForecastTemperatureDays = document.createElement("span");
                                    spanForecastTemperatureDays.classList.add("forecast-data");
                                    spanForecastTemperatureDays.innerHTML = `${lowForecastTemperature}&#176/${highForecastTemperature}&#176`;
                                    upcoming.appendChild(spanForecastTemperatureDays);

                                    const spanForecastWheatherDays = document.createElement("span");
                                    spanForecastWheatherDays.classList.add("forecast-data");
                                    spanForecastWheatherDays.textContent = `${forecasCondition}`;
                                    upcoming.appendChild(spanForecastWheatherDays);
                                }
                            });
                    });
            })
            .catch(err => {
                forecast.textContent = "Error";
                forecast.style.display = "block";
            });
    }
}

attachEvents();