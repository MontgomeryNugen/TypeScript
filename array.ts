let numbers: number[] = [1,2,3,4,5];
console.log(numbers);

numbers.push(6,7,8,9);

console.log(numbers);

numbers[numbers.length] = 100;

console.log(numbers);

numbers.pop();

console.log(numbers);

numbers.splice(3, 1);

console.log(numbers);
