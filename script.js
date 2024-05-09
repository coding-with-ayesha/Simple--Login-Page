document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    if (!username || !password) {
      errorMessage.textContent = 'Please enter both username and password';
      return;
    }
  
    // Here you can add your authentication logic
    // For demo purposes, let's just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Clear input fields and error message after successful login
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    errorMessage.textContent = '';
  });
  