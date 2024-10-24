 
let isLoggedIn = true;
let isAdmin = false;
let canAccessAdminPanel = isLoggedIn || isAdmin; // true if both conditions are true
console.log(canAccessAdminPanel); // Output: false