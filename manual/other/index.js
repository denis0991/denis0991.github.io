const expenseTable = document.querySelector('.expense-table');
const employees = document.querySelector('.employees');
const mainExpenseTable = document.querySelector('.main__expense-table');
const mainEmployees = document.querySelector('.main__employees');

expenseTable.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn_active');
    expenseTable.classList.remove('btn');
    mainEmployees.classList.add('disable');
    mainExpenseTable.classList.remove('disable');
})

employees.addEventListener('click', () => {
    employees.classList.add('btn_active');
    employees.classList.remove('btn');
    expenseTable.classList.remove('btn_active');
    expenseTable.classList.add('btn');
    mainExpenseTable.classList.add('disable');
    mainEmployees.classList.remove('disable');
    mainEmployees.classList.add('transform')
})

