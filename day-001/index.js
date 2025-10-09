const allSteps = [6000, 8500, 22000, 10000, 15000];

const userSteps = 5500;

function getAverageSteps(allSteps) {
    let sum = 0;

    for (let i = 0; i < allSteps.length; i++) {
        sum += allSteps[i];
    }

    return sum / allSteps.length;
}

function getStepsLevel(userSteps) {
    if (userSteps < 5000) {
        return "Low";
    }

    if (userSteps < 10000) {
        return "Moderate";
    }

    return "High";
}


function dailyStepsMessage(allSteps, userSteps) {
    const averageSteps = getAverageSteps(allSteps);
    const stepsLevel = getStepsLevel(userSteps);

    if (stepsLevel == "Low") {
        return "Try to move more! You took " + (userSteps) + " steps today, which is considered " + (stepsLevel) + " activity. The community average is " + (averageSteps) + " steps.";
    }
    if (stepsLevel == "Moderate") {
        return "Nice work! You took " + (userSteps) + " steps today, which is considered " + (stepsLevel) + " activity. the community average is " + (averageSteps) + " steps.";
    }
    if (stepsLevel == "High") {
        return "Great job! You took " + (userSteps) + " steps today, which is considered " + (stepsLevel) + " activity. The community average is " + (averageSteps) + " steps.";
    }
}

console.log(dailyStepsMessage(allSteps, userSteps));
