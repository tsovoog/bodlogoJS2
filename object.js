// const sum = (items) => items.reduce((acc, item) => acc + item.price, 0);
// const items = [
//   { name: "item 1", price: 30 },
//   { name: "item 2", price: 20 },
//   { name: "item 3", price: 50 },
// ];
// const hariu = sum(items);
// console.log(hariu);

// const arr = (books) => books.map((element) => element.author);
// const books = [
//   { tittle: "book1", author: "author1" },
//   { tittle: "book2", author: "author2" },
//   { tittle: "book3", author: "author3" },
// ];
// const hariu = arr(books);
// console.log(hariu);

// const arr = (names) => names.find((element) => element.name === "bob");
// const names = [
//   { id: 1, name: "anar" },
//   { id: 1, name: "bob" },
//   { id: 1, name: "tsene" },
// ];
// const hariu = arr(names);
// console.log(hariu);

// bodlogo4
// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Tsovoo", lastName: "Ganbold" },
//   { firstName: "Emily", lastName: "Smith" },
// ];
// const fullNames = people.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// console.log(fullNames);

// bodlogo5
const tasks = [
  { id: 1, description: "Do laundry", completed: false },
  { id: 2, description: "Do laundry", completed: false },
  { id: 3, description: "Do laundry", completed: false },
];


// bodlogo10

// const arr = (sales) => {
//   let result = [];

//   sales.forEach((item) => {
//     let found = result.find((element) => element.product === item.product);

//     if (found) {
//       found.quantity += item.quantity;
//     } else {
//       result.push({ product: item.product, quantity: item.quantity });
//     }
//   });

//   return result;
// };

// const sales = [
//   { product: "Apple", quantity: 10 },
//   { product: "Banana", quantity: 5 },
//   { product: "Apple", quantity: 7 },
//   { product: "Banana", quantity: 3 },
// ];

// const answer = arr(sales);

// answer.forEach((item) => {
//   console.log(`Fruit: ${item.product}, Quantity: ${item.quantity}`);
// });

// const arr = (sales) => {
//     sales.forEach((element)=> {
//         let found = element.find((item) => )
//     });

// };
// const sales = [
//   { product: "Apple", quantity: 10 },
//   { product: "Banana", quantity: 5 },
//   { product: "Apple", quantity: 7 },
//   { product: "Banana", quantity: 3 },
// ];
// const answer = arr(sales);
// console.log(answer);
