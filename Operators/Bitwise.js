let readPermission = 1; // Binary: 001
let writePermission = 2; // Binary: 010
let userPermission = 3; // Binary: 011 (read + write)
let hasWritePermission = userPermission & writePermission; // Binary: 011 & 010 = 010 (true)
console.log(hasWritePermission); // Output: 2 (which means true)