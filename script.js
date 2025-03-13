// Q1. Find the Product.
// Write a program that takes an array as input from the user and find out the product of the elements.
// Note: You have to complete Find_Prod. No need to take any input.

var arr_1 = [5,1,2,3,4,5]
var product = 1
for(let i=0; i<arr_1.length; i++){
  product = product * arr_1[i]
}
console.log('question-1 output \n',product)


// Q2. Find the Sum.
// Write a program which takes an array as input from the user and find out the sum of the array elements.
// Note: You have to complete Find_Sum. No need to take any input.

var arr_2 = [5,1,2,3,4,5]
var sum = 1
for(let i=0; i<arr_1.length; i++){
  sum = sum + arr_1[i]
}
console.log('Question_2 output\n',sum)


// Q3. Count Occurrences
// You are given an array A containing N integer elements and an integer K, and your task is to return the count of
// occurrences of K in array A.

var arr_3 = [2,2,2,3,3,4]
var k = 2
var countk = 0
for(let i=0; i<arr_3.length; i++){
    if(k === arr_3[i]){
        countk ++

    }
}
console.log(`question-3 output \n${countk}`)

// Q4. Even Odd
// You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)),
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
// Note: You have to complete findEvenOdd function. No need to take any input.


var arr_4 = [12,13,14,15,16,17,18]
let res = []
let evenSum = 0
let oddSum = 0

for(let i=0; i<arr_4.length; i++){
    if(arr_4[i]%2==0){
        evenSum += arr_4[i]
        
    }
    else{
        oddSum += arr_4[i]
        
    }
}
res.push(evenSum, oddSum)
console.log('Question-4 output \n',res)

// Q5. Find whether the number is present or not
// Write a program which takes an array as input from the user and a number. Check whether the number is present or not.
// Note: You have to complete Find_Num. No need to take any input.

var arr_5 = [1,2,3,4,5]
var num = 4

if(arr_5.includes(4)){
    console.log('Question-5 output\n','yes')
}
else{
    console.log('Question-5 output\n','no')
}

// Q6. Higher Age
// You are given an array A containing the age of persons in your locality, and your task is to find and return an array
// containing the age of persons that are over 1818 (18(18 included)).
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge
// function. No need to take any input.

var arr_6 = [6, 11, 23, 3, 45, 72, 68]

let res_arr6 =  arr_6.filter((item) => item > 18)
console.log('Question-6 output \n' ,res_arr6)

// Q7. Increment the Array Elements
// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
// You have to complete Inc_Arr. No need to take any input.

var arr_7 = [10,20,30,40,50]

var res_arr7 = arr_7.map((item) => item+1)
console.log('Question-7 output \n', res_arr7)

// Q8. Pass or Fail
// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the
// students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232.
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
// Note: You have to complete isAllPass function. No need to take any input.

function checkpass_fail(num){
    for(let marks of num){
        if(marks<32){
            return 'NO'
        }
    }
    return 'YES'
}
console.log('Question-8 output\n')
let marksfail = [7, 13 ,89 ,45, 98, 67, 45, 54]
console.log(checkpass_fail(marksfail))
let markspass = [89 ,45, 98, 67, 45, 54]
console.log(checkpass_fail(markspass))

// Q9. Unique Color Shirt
// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to
// wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt
// of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy
// wants you to find M.
// Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N.


function uniqueColorShirts(arr) {
    return [...new Set(arr)];
}


console.log(uniqueColorShirts([1, 2, 3, 2, 3, 4, 5])); 



// Q10. Min and Max
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to
// iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the
// minimum and maximum numbers among those elements.

let arr_10 = [66, 33, 11, 44, 66, 22, 77]
let min = arr_10[0]
let max = arr_10[0]

for(let i=0; i<arr_10.length; i++){
    if(arr_10[i]<min) min = arr_10[i]
    if(arr_10[i]>max) max = arr_10[i]
}
console.log('Questin-10 output')
console.log('min:', min)
console.log('max:', max)


