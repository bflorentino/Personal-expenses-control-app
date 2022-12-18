const BASE_URL = process.env.REACT_APP_BASE_URL
export default BASE_URL

export const incomeTypes = [
    {type: "Ingreso Por Salario", id:1},
    {type: "Préstamo Recibido", id:2},
    {type: "Pago de cuota por préstamo recibido", id:3},
    {type: "Ingresos Otros", id:4},
]

export const expenseTypes = [
    {type: "Gastos Pesonales", id:1},
    {type: "Préstamo Realizado", id:2},
    {type: "Pago de cuota de préstamo", id:3},
    {type: "Gastos Otros", id:4},
]



