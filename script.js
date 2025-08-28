function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
  }
  
  // Clear the input field
  function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
  }
  
  // Calculate the result
  function calculateResult() {
    const resultField = document.getElementById('result');
    try {
      // Evaluate the expression in the input field
      resultField.value = eval(resultField.value);
    } catch (error) {
      // Handle invalid expressions
      resultField.value = 'Error';
    }
  }
  