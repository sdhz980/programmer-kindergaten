// Object
// Object literal
// const user1 = {};

// Object constructor
// const user2 = new Object();

// Property and Method =========================================
// const user = {
//     name: 'David',
//     greeting() { // -> function yang ada di dalam object di sebut method
//         console.log('Hello');
//     },
// };
// user.greeting(); -> invoke function atau method di dalam object

// Add & Delete Property ========================================
// const user = {
//     nama: 'megachan', // {property/key}: {value}
//     partai: 'banteng',
//     age: 100,
// };
// console.log(user);
// user.age = 25; // menambahkan property atau apabila property sudah ada 
//                 // akan menggantikan value yang ada di property tersebut
// console.log(user);
// delete user.partai; // cara untuk mendelete property di sebuah object
//                 // delete.{object}.{property/key};
// console.log(user);

// Accessing Value ==============================================
// dot & []

// const user = {
//     name: 'puanchan',
//     partai: 'badak',
// };

// console.log(user.name);    // Accessing with Dot
// console.log(user['name']); // Accessing with Bracket Square

// Optional Chaining ============================================
// const user = {};

//const user = {
//  adress: {
//        street : ''
// }
// };

// console.log(user.address); // Menampilkan undefined jika property kosong / tidak tersedia
// console.log(user.address.street); // Menampilkan error jika object di dalam property kosong / tidak tersedia
// console.log(user.address?.street); // Menampilkan undefined tapi menghindari error apabila object di dalam property kosong / tidak tersedia

// Accessing Key ================================================

// const user = {
//     nama : 'bowokun',
//     partai : 'partaiqu',
// };
// Mengakses key saja di dalam sebuah object
// console.log(Object.keys(user));   
// Mengakses values saja di dalam sebuah object
// console.log(Object.values(user)); 

// For In (Looping dalam sebuah Object) =========================

// const user = {
//     nama : 'bowokun',
//     hobby : 'partaiqu',
//     umur : 18,
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// Destructuring Assignment =====================================

// const user = {
// nama : 'bowokun',
// hobby : 'partaiqu',
// umur : 18,
// };

// const { nama } = user;   // Mendeklarasikan atau memodifikasi 
                            // isi variable dari sebuah key object
// // const { nama: names } = user; // Sama saja hanya akan mengganti nama variable

// console.log(user.nama); // Access Manual
// console.log(nama);   // Access dari hasil destructuring

