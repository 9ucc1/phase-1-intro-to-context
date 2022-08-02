// Your code here
function createEmployeeRecord(employee){
    const employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeRecord
}

function createEmployeeRecords(employees){
    return employees.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(employeeRecord, dateStamp){
    const [date, hour] = dateStamp.split(" ")
    const inEvent = {
        type: "TimeIn",
        hour: parseFloat(hour),
        date: date,
    }
    employeeRecord.timeInEvents.push(inEvent)
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
    const [date, hour] = dateStamp.split(" ")
    const outEvent = {
        type: "TimeOut",
        hour: parseFloat(hour),
        date: date,
    }
    employeeRecord.timeOutEvents.push(outEvent)
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, targetDate){
    const inEvent = employeeRecord.timeInEvents.find(inEvent =>inEvent.date === targetDate)
    const outEvent =  employeeRecord.timeOutEvents.find(outEvent => outEvent.date === targetDate)
    return (outEvent.hour - inEvent.hour)/100
}

function wagesEarnedOnDate(employeeRecord, targetDate){
    return hoursWorkedOnDate(employeeRecord, targetDate)*employeeRecord.payPerHour
    //const inEvent = employeeRecord.timeInEvents.find(inEvent =>inEvent.date === targetDate)
    //const outEvent =  employeeRecord.timeOutEvents.find(outEvent => outEvent.date === targetDate)
    //return (outEvent.hour - inEvent.hour)*employeeRecord.payPerHour/100
}

function allWagesFor(employeeRecord){
    for (let i=0; i<employeeRecord.timeInEvents.length; i++){
    const wagesPerDate = wagesEarnedOnDate(employeeRecord, employeeRecord.timeInEvents[i].date)
    let sum = 0
    sum += wagesPerDate
    return wagesPerDate
    }
}
    //employeeRecord.timeInEvents.reduce(wagesEarnedOnDate(employeeRecord, targetDate))

    /*const wages = employeeRecord.timeInEvents.map(targetDate => wagesEarnedOnDate(targetDate))
    let reducedWages= wages.reduce(function(memo, targetDate){
        return memo + wagesEarnedOnDate(employee, targetDate)
        }, 0)
        //I HAVE NO IDEA WHAT THIS MEANS*/

function calculatePayroll(){

}