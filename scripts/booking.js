/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

//create useful variables
let dailyRate = 35;
let dayCounter = 0;
const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];

const clearButton = document.getElementById("clear-button");

const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


daysOfWeek.forEach(day => {         // day = for each value in dayOfWeek, e.g. "monday", "tuesday" 
    const dayElement = document.getElementById(day);
    
    dayElement.addEventListener("click", () => {    // do it when click the button
        if (!dayElement.classList.contains("clicked")) {    // check whether the button is clicked or not
            dayElement.classList.add("clicked");
            dayCounter++;
        } else {
            dayElement.classList.remove("clicked");
            dayCounter--;
        }

        calculate();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", () => {
    daysOfWeek.forEach(day => {
        const dayElement = document.getElementById(day);
        dayElement.classList.remove("clicked"); // reset all the buttons
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
    });

    dayCounter = 0;
    calculate();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", () => {
    dailyRate = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", () => {
    dailyRate = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculate();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    const cost = dayCounter * dailyRate;
    document.getElementById("calculated-cost").innerText = cost;
}
