let selectCounty = document.querySelector('.countrySelect')
let selectCity = document.querySelector('.citySelect')

const data= {
    ["Iran"]: [
        {id: 1, title: "اصفهان"},
        {id: 2, title: "مشهد"},
        {id: 3, title: "تهران"},
    ],
    ["Turkey"]: [
        {id: 1, title: "استانبول"},
        {id: 2, title: "آنکارا"},
    ],
    ["USA"]: [
        {id: 1, title: "نیویورک"},
        {id: 2, title: "تگزاس"},
    ]
}
selectCounty.addEventListener("change", (e) => {
    let countryValue = selectCounty.value

    data[countryValue].forEach(element => {
        let option = document.createElement("option")
        option.setAttribute('value', element.id);
        option.innerHTML = element.title
        selectCity.append(option)
    });

})