import axios from 'axios';

// enum Role {
//   Admin = 'admin',
//   Guest = 'guest',
//   User = 'user'
// }

// function handleGreetMessage(role: Role, name: string): string {
//   switch (role) {
//     case Role.Admin:
//       return `Hello Admin, ${name}`
//     case Role.Guest:
//       return `Hello Guest, ${name}`
//     case Role.User:
//       return `Hello ${name}`
//   }
// }

// handleGreetMessage(Role.Admin, 'Dmytro');

//! =========================================

// Задача 1. Узагальнена функція wrapInArray
// Умова

// Є функція:

// function wrapInArray(value) {
//   return [value];
// }

// Зараз вона не типізована.

// Завдання

// Зроби функцію узагальненою

// function wrapInArray<T>(value: T): T[] {
//   return [value];
// }

// wrapInArray<number>(1);

//! =========================================

// Задача 2. Узагальнена функція getLastElement
// Умова

// Створи функцію getLastElement, яка:

// приймає масив будь-якого типу

// повертає останній елемент масиву

// Зроби функцію узагальненою.

// function getLastElement<T>(array: T[]): T {
//   return array[array.length - 1];
// }

// getLastElement<string | number>(['1', 2, '3']);

//! =========================================

// Задача 3. Узагальнена функція pair
// Умова

// Створи функцію pair, яка:

// приймає два значення, які можуть бути різного типу

// повертає їх як 1) масив /  2)кортеж

// Зроби функцію узагальненою

// //!variant 1

// function pair1<T, Y>(value1: T, value2: Y): (T | Y)[] {
//   return [value2, value1];
// }

// pair1<number, string>(123, 'str');

// //!variant 2

// function pair2<T, Y>(value1: T, value2: Y): [T, Y] {
//   return [value1, value2];
// }

//! =========================================

// Задача 5. Узагальнена функція firstOrDefault
// Умова

// Створи функцію firstOrDefault, яка:

// приймає масив будь-якого типу

// повертає перший елемент масиву або null, якщо масив порожній

// зроби функцію узагальненою

// function firstOrDefault<T>(array: T[]): (T | null) {
//   // if (array.length === 0) {
//   //   return null;
//   // }
//   // return array[0];

//   //! variant 2

//   return array[0] ?? null;
// }

// console.log(firstOrDefault<number>([123, 212]));
// console.log(firstOrDefault<number>([]));

//! =========================================

// // interface TodoResponse {
// //   status: number;
// //   message: string;
// //   data: User[];
// // }

// // const oneTodoResp = {
// //   status: 200,
// //   message: 'success',
// //   data: { name: 'Alex' },
// // };

// // interface OneTodoResponse {
// //   status: number;
// //   message: string;
// //   data: User;
// // }

// const todoResp: Response<User[]> = {
//   status: 200,
//   message: 'success',
//   data: [{ name: 'Alex' }, { name: 'Vlad' }],
// };

interface User {
  name: string;
}

// interface Response<T> {
//   status: number;
//   message: string;
//   data: T
// }

//! =========================================
// Задача 7. Узагальнена функція delay з Promise
// Умова

// Створи функцію delay, яка:

// приймає значення будь-якого типу

// приймає час у мілісекундах

// повертає Promise, який після затримки повертає передане значення

// зроби функцію узагальненою

// function delay<T>(value: T, delayMs: number): Promise<T> {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value);
//     }, delayMs);
//   });
// }

// delay<string>('hello', 1000).then(result => console.log(result));


//! =========================================

// Задача 8. Узагальнена функція fetchData з Axios
// Умова

// Створи функцію fetchData, яка:

// приймає URL

// робить GET-запит через axios

// повертає масив об’єктів певного типу, який визначається узагальненням


// async function fetchData<T>(url: string): Promise<T[]> {
//   const response = await axios.get<T[]>(url);

//   return response.data;
// }

// fetchData<User>('example@com').then((data) => console.log(data))

//! =========================================
// Задача 9. Узагальнена функція zip
// Умова
// Створи функцію zip, яка:
// приймає два масиви різного типу
// повертає масив кортежів
// якщо масиви різної довжини, ігнорує зайві елементи
// зроби функцію узагальненою

// Приклад використання:

// const numbers = [1, 2, 3];
// const strings = ["a", "b"];
// const zipped = zip(numbers, strings); // [[1,"a"], [2,"b"]]


// function zip<T, U>(array1: T[], array2: U[]): [T, U][] {
//   const minLength = Math.min(array1.length, array2.length);
//   const result: [T, U][] = [];
//   for (let i = 0; i < minLength; i++) {
//     result.push([array1[i], array2[i]]);
//   }
//   return result;
// }

// console.log(zip<number, string>([1, 2, 3], ["a", "b"]));

//! =========================================

//! Задача 10. Узагальнені функції saveToStorage і loadFromStorage
// Умова
// Створи дві функції:
// 1) saveToStorage
// приймає ключ
// приймає значення будь-якого типу
// зберігає його у localStorage у форматі JSON
// 2) loadFromStorage
// приймає ключ
// повертає значення
// Зроби обидві функції узагальненими.

function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage<string>('STR', 'str1');

function loadFromStorage<T>(key: string): (T | null) {
  const data = localStorage.getItem(key);

  // if (!data) {
  //   return null
  // }
  // return JSON.parse(data) as T;

  return data !== null ? JSON.parse(data) as T : null;
}

const result = loadFromStorage<string>('STR');
console.log(result);