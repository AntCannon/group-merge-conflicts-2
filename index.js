function sumNumbers(...numbers) {
    if (!numbers.every((num) => typeof num === 'number')) {
      throw new Error('All arguments must be numbers.');
    }
    
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  try {
    console.log(sumNumbers(1, 2, 3)); 
    console.log(sumNumbers(10, "B", 20)); 
  } catch (error) {
    console.error(error.message);
  }
  