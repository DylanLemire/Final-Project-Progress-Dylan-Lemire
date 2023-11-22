
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function generateMealPlan() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const mealPlanData = {};

    for (const day of daysOfWeek) {
        const mealTypes = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];
        const dayMeals = [];
        for (const mealType of mealTypes) {
            const mealInput = document.getElementById(`${day.toLowerCase()}${mealType}`).value;
            dayMeals.push(`${mealType}: ${mealInput}`);
        }

        mealPlanData[day] = dayMeals;
    }

	// User should also have the ability to print or download planner. Add that some time.
    const mealPlanContent = `
        <h2>${name}'s Meal Plan for the Week</h2>
        <p>Email: ${email}</p>
        <p>Weekly Goal: ${goal}</p>
        ${daysOfWeek.map(day => `
            <h3>${day}</h3>
            <ul>
                ${mealPlanData[day].map(meal => `<li>${meal}</li>`).join('')}
            </ul>
        `).join('')}
    `;

    // Open a new window and write the content. Need to add ability to print and download planner, so this is a stopgap measure for now.
    const mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.write(mealPlanContent);
}

document.getElementById('mealPlanButton').addEventListener('click', generateMealPlan);