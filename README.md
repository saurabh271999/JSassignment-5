String Problems in JavaScript 🚀
📌 Steps to Solve
Understand input, output & edge cases.
Choose an approach:
Brute Force (basic loops)
Optimal (built-in methods like split(), join(), replace())
Data Structures (Set, Map)
Implement & Test for efficiency.
🔥 Common String Operations
✅ Reverse a String

js
Copy
Edit
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString("hello")); // "olleh"
✅ Check Palindrome

js
Copy
Edit
const isPalindrome = str => str === str.split('').reverse().join('');
console.log(isPalindrome("racecar")); // true
✅ Count Character Occurrences

js
Copy
Edit
const charCount = (str, char) => str.split(char).length - 1;
console.log(charCount("hello world", "o")); // 2
✅ Remove Duplicates

js
Copy
Edit
const removeDuplicates = str => [...new Set(str)].join('');
console.log(removeDuplicates("aabbccdde")); // "abcde"
✅ First Non-Repeating Character

js
Copy
Edit
const firstUniqueChar = str => [...str].find(c => str.indexOf(c) === str.lastIndexOf(c)) || null;
console.log(firstUniqueChar("aabbccde")); // "d"
🔹 Best Practices
✔ Use built-in methods for efficiency.
✔ Handle edge cases (empty strings, spaces, special characters).
✔ Prefer Set & Map for unique values & counting.
