let Account = {
  init(email, password, firstName, lastName) {
    let displayName = Math.random();
    return {
      displayName,

      email: function (passwordAttempt) {
        if (passwordAttempt === password) {
          return email;
        } else {
          return 'Invalid Password';
        }
      },

      firstName: function (passwordAttempt) {
        if (passwordAttempt === password) {
          return firstName;
        } else {
          return 'Invalid Password';
        }
      },

      lastName: function (passwordAttempt) {
        if (passwordAttempt === password) {
          return lastName;
        } else {
          return 'Invalid Password';
        }
      },

      reanonymize: function (passwordAttempt) {
        if (passwordAttempt === password) {
          this.displayName = Math.random();
          return true;
        } else {
          return 'Invalid Password';
        }
      },

      resetPassword: function (passwordAttempt, newPassword) {
        if (passwordAttempt === password) {
          password = newPassword;
          return true;
        } else {
          return 'Invalid Password';
        }
      },
    }
  },
}

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false