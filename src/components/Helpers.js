export const getTotalExpenses = expenses =>
    expenses.reduce((sum, { price }) => sum + Number(price), 0)
