// Your code here

//global variables 
const employeeRecords = [firstName, familyName, title, payPerHour, [timeInEvents, timeOutEvents]]


//Loads Array elements into corresponding Object properties. Initializes empty Arrays on the properties timeInEvents and timeOutEvents.
function createEmployeeRecord(employeeRecords){
    let newObject = Object.assign({}, employeeRecords)
    return newObject
};

//Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
function createEmployeeRecords(){
};

//Add an Object with keys to the timeInEvents Array on the record Object
function createTimeInEvent(){
};

//Add an Object with keys to the timeOutEvents Array on the record Object
function createTimeOutEvent(){
};

//Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
function hoursWorkedOnDate(){
};

//Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount is returned as a number.
function wagesEarnedOnDate(){
};

//Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.
function allWagesFor(){
};

//Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.
function calculatePayroll(){
};