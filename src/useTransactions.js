//  CREATING A CUSTOM HOOKS TO ADD DATA IN THE CARD
// import context
import { useContext } from 'react';
// import expense tracker
import { ExpenseTrackerContext } from './context/context';
// import categories
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

// create a use transaction custom hooks( arrow function starting with use)
const useTransactions = (title) => {
// reset the categories
  resetCategories();
 // take out the transaction  
  const { transactions } = useContext(ExpenseTrackerContext);

  // specify the type with the title(income or expense)
  const transactionsPerType = transactions.filter((t) => t.type === title);

  // reduce is used to sum up the number in an array( accumulator  = accumulator + current value) and inital value in the specific type
  const total =transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0)
  
   //   CALCULATING TOTAL FOR EACH CATEGORY
  // condtional statement for categories
  const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({transactionsPerType, total, categories})

    // specifying  a function for each transaction
    transactionsPerType.forEach((t) => {
        // find the type
        const category = categories.find((c) => c.type === t.category)

        // add up the value of the current amount with the transaction amount
        if(category) category.amount += t.amount
    });

    // filter out the category greater than zero
    const filteredCategories = categories.filter((c) => c.amount > 0)

    //  creating our charts
    const chartData = {
        datasets: [{
          data: filteredCategories.map((c) => c.amount),
          backgroundColor: filteredCategories.map((c) => c.color),
        }],
        labels: filteredCategories.map((c) => c.type),
    };
    return {  total, chartData}
};

export default useTransactions;