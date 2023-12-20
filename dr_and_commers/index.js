const expenseTable = document.querySelector('.expense-table');
const employees = document.querySelector('.employees');
const mainExpenseTable = document.querySelector('.main__expense-table');
const mainEmployees = document.querySelector('.main__employees');
const finalExpense = document.querySelector('.final-expense');
const mainFinalExpense = document.querySelector('.main__final-expenses');
const income = document.querySelector('.income');
const mainIncome = document.querySelector('.main__income');
const kpi = document.querySelector('.kpi');
const mainKpi = document.querySelector('.main__kpi');

expenseTable.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn_active');
    expenseTable.classList.remove('btn');
    addDisable(mainEmployees);
    mainExpenseTable.classList.remove('disable');
    addDisable(mainFinalExpense);
    finalExpense.classList.add('btn');
    finalExpense.classList.remove('btn_active');
    income.classList.remove('btn_active');
    income.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    addDisable(mainIncome);
    mainKpi.classList.add('disable');

})

employees.addEventListener('click', () => {
    employees.classList.add('btn_active');
    employees.classList.remove('btn');
    expenseTable.classList.remove('btn_active');
    expenseTable.classList.add('btn');
    addDisable(mainExpenseTable);
    mainEmployees.classList.remove('disable');
    addDisable(mainFinalExpense);
    finalExpense.classList.add('btn');
    finalExpense.classList.remove('btn_active');
    income.classList.remove('btn_active');
    income.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    addDisable(mainIncome);
    mainKpi.classList.add('disable');

})

finalExpense.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    mainEmployees.classList.add('disable');
    mainExpenseTable.classList.add('disable');
    finalExpense.classList.add('btn_active');
    finalExpense.classList.remove('btn');
    expenseTable.classList.add('btn');
    employees.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    removeDisable(mainFinalExpense);
    income.classList.remove('btn_active');
    income.classList.add('btn');
    addDisable(mainIncome);
    mainKpi.classList.add('disable');

})

income.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    finalExpense.classList.remove('btn_active');
    income.classList.add('btn_active');
    income.classList.remove('btn');
    employees.classList.add('btn');
    expenseTable.classList.add('btn');
    finalExpense.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    addDisable(mainEmployees);
    addDisable(mainFinalExpense);
    addDisable(mainExpenseTable);
    mainIncome.classList.remove('disable');
    mainKpi.classList.add('disable');

})

kpi.addEventListener('click', () => {
    kpi.classList.add('btn_active');
    kpi.classList.remove('btn');
    mainKpi.classList.remove('disable');
    income.classList.remove('btn_active');
    income.classList.add('btn');
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    finalExpense.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn');
    finalExpense.classList.add('btn');
    addDisable(mainEmployees);
    addDisable(mainFinalExpense);
    addDisable(mainExpenseTable);
    addDisable(mainIncome);
})

function addDisable(elem) {
    elem.classList.add('disable');
}

function removeDisable(elem) {
    elem.classList.remove('disable');
}