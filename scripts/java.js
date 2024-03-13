// let numberOfPeople = 24;
// const SLICES_PER_PERSON = 2;
// const SLICES_PER_PIZZA = 12;
// const COST_PER_PIZZA = 18.75
// let cost = numberOfPeople * SLICES_PER_PERSON / SLICES_PER_PIZZA * COST_PER_PIZZA
// let msg = `The cost of pizza for ${numberOfPeople} people is: ${cost}`

function CalculatePizzaCostTotal(numberOfPeople) {
    console.log(`num people: ${numberOfPeople}`)
    const SLICES_PER_PERSON = 2;
    const SLICES_PER_PIZZA = 12;
    const COST_PER_PIZZA = 18.75
    let cost = numberOfPeople * SLICES_PER_PERSON / SLICES_PER_PIZZA * COST_PER_PIZZA
    let msg = `The cost of pizza for ${numberOfPeople} people is: ${cost}`
    const el = document.getElementById("total");
    el.textContent = msg;
}

function CalculateNumberOfChairs(numberOfPeople) {
    console.log(`num people: ${numberOfPeople}`)
    const CHAIR_PER_PERSON = 1;
    let numberOfChairs = numberOfPeople * CHAIR_PER_PERSON;
    const el_p_chairs = document.getElementById("chairTotal");
    el_p_chairs.textContent = `number of chairs needed is: ${numberOfChairs}`
}

function CalculateAll(){
    let numberOfPeople = document.getElementById("numberOfPeople").value;
    console.log(`num people: ${numberOfPeople}`)
    CalculateNumberOfChairs(numberOfPeople);
    CalculatePizzaCostTotal(numberOfPeople);
}

const calcBtn = document.getElementById("calc")
calcBtn.addEventListener("click", CalculateAll);

// if all else fails, check MDN for assistance