// Exercise

// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise

// class FoodOredering {

//     start (order) {
//         let currentOrder = 0;
//         while (currentOrder < order.length) {
//                 let randomSec = (Math.floor(Math.random() * 10.9) + 1) * 1000;
//                 this.queue(currentOrder + 1,order[currentOrder],randomSec);
//                 currentOrder ++;
//             }
//     }

//     queue (currentNo,current,sec) {
//         setTimeout(() => {
//             console.log(`orderan ke ${currentNo} = ${current} selesai dalam ${sec/1000} detik`)
//         },sec)
//     }

// }

// class FoodOredering {

//     randomNumber() { return (Math.floor(Math.random() * 10.9) + 1) * 1000 }

//     promiseOrder(order,no,time) {
//         let result = '';
//         const orderPromise = new Promise(() => {
//             setTimeout(() => {
//                 result = `orderan ke ${no} = ${order} selesai`;
//                 console.log(result);
//             },time)
//         })
//         return result;
//     }

//     startOrder(orderList) {
//         console.log('queue' + orderList);
//         let currentOrder = 0;
//         while (currentOrder < orderList.length) {
//             currentOrder ++;
//             this.promiseOrder(orderList[currentOrder-1],currentOrder,this.randomNumber())
//         }
//     }

// }

// const orderList = ['Sego Rawon','Pangsit','Bakso']

// const food = new FoodOredering();
// food.startOrder(orderList);

// class Queue {
  
//     randomNumber() {
//     return (Math.floor(Math.random() * 10.9) + 1) * 1000;
//   }

//   promiseOrder(no, time) {
//     let result = "";
//     const orderPromise = new Promise(() => {
//       setTimeout(() => {
//         result = `[Log] Queue ${no} Done in ${time/1000} minutes`;
//         console.log(result);
//       }, time);
//     });
//     return result;
//   }

//   startQueue(log) {
//     let current = 0;
//     while (current < log) {
//         this.promiseOrder(current+1 , this.randomNumber())
//         current ++;
//     }
//   }

// }

// const quewe = new Queue();
// quewe.startQueue(4);