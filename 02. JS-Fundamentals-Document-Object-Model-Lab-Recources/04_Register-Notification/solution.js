
 function register() {
   //TODO
   let username = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let regex = /(.+)@(.+).(com|bg)/gm;
   let output = document.getElementById('result');

   let header = document.createElement('h1');
   header.textContent = 'Successful Registration!'
   let newLine = document.createElement('br');
   let newNewLine = document.createElement('br');

   if (username.length > 0 && password.length > 0 && regex.test(email)) {
      let currentUsername = document.createTextNode('Username: ' + username);
      let currentEmail = document.createTextNode('Email: ' + email);
      let currentPassword = document.createTextNode('Password: '  + '*'.repeat(password.length));

      output.appendChild(header)
      output.appendChild(currentUsername);
      output.appendChild(newLine);
      output.appendChild(currentEmail);
      output.appendChild(newNewLine);
      output.appendChild(currentPassword);
   }


 }
