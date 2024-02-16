// Exercise 1

// ● Create a function to calculate array of student data
//     ● The object has this following properties :
//         ○ Name → String
//         ○ Email → String
//         ○ Age → Date
//         ○ Score → Number
//         ● Parameters : array of student
//     ● Return values :
//     ○ Object with this following properties :
//             ■ Score
//                 ● Highest
//                 ● Lowest
//                 ● Average
//             ■ Age
//                 ● Highest
//                 ● Lowest
//                 ● Average


class Student {
    constructor () {
        this.studentData = [];
        this.calculateData = [];
    }
    addData (inNama,inEmail,inAge,inScore) {
        if (!this.studentData.some((item) => item.namaSiswa === inNama)) {
            this.studentData.push({namaSiswa : inNama , emailSiswa : inEmail , umurSiswa : inAge , scoreSiswa : inScore})
        }
    }
    calculate () {
        const tmpDataAge = [];
        const tmpDataScore = [];

        this.studentData.map((index) => {
            tmpDataAge.push(index.umurSiswa);
            tmpDataScore.push(index.scoreSiswa);
        });

        const minAge = tmpDataAge.indexOf(Math.min(...tmpDataAge));
        const averageAge = (tmpDataAge.reduce((a,b) => a+b)) / tmpDataAge.length;
        const highestAge = tmpDataAge.indexOf(Math.max(...tmpDataAge));

        const minScore = tmpDataScore.indexOf(Math.min(...tmpDataScore));
        const averageScore = (tmpDataScore.reduce((a,b) => a+b)) / tmpDataScore.length;
        const highestScore = tmpDataScore.indexOf(Math.max(...tmpDataScore));
        
        return `Score Highest : ${this.studentData[highestScore].namaSiswa} = ${tmpDataScore[highestScore]}
        Lowest : ${this.studentData[minScore].namaSiswa} = ${tmpDataScore[minScore]}
        Average : ${averageScore}

    Age Highest : ${this.studentData[highestAge].namaSiswa} = ${tmpDataAge[highestAge]}
        Lowest : ${this.studentData[minAge].namaSiswa} = ${tmpDataAge[minAge]}
        Average : ${averageAge}`
    }
    show () {
        return this.studentData;
    }
}

const programStudent = new Student();

programStudent.addData('Agus','gmail.com',21,70);
programStudent.addData('Roma','gmail.com',20,40);
programStudent.addData('Rizal','gmail.com',21,40);
programStudent.addData('Bagas','gmail.com',19,40);
programStudent.addData('Brian','gmail.com',18,40);

console.log(programStudent.calculate());

// Exercise 2

// ● Create a program to create transaction
//         ● Product Class
//             ○ Properties
//                 ■ Name
//                 ■ Price
//         ● Transaction Class
//             ○ Properties
//                 ■ Total
//                 ■ Product
//         ● All product data
//         ● Qty

//     ○ Add to cart method → Add product to transaction
//     ○ Show total method → Show total current transaction
//     ○ Checkout method → Finalize transaction, return transaction data

// class Product{
//     constructor (product) {
//         this.product = product;
//         this.product = { rokokSurya : {
//             price : 25000
//         },sabunLoe : {
//             price : 2000
//         },sunlightSun : {
//             price : 5000
//         },berasRaskin : {
//             price : 25000
//         } };
//     }
//     add (name,price) {
//         this.product[name] = {price : price}
//     }
//     show () {
//         return this.product;
//     }
// }

// class Transaction{
//     constructor (inst) {
//         this.product = inst.product;
//         this.productCart = {};
//     }
//     addToCart(productName,total) {
//         if (Object.hasOwn(this.product, productName)) {
//             this.productCart[productName] = {price : this.product[productName].price , total : total}
//             return `berhasil input "${productName}" dengan jumlah ${total}`
//         }
//         return 'error please input product from the product list'
//     }
//     showCart() {
//     let inCart = '';
//     let totalCart = 0;
//         for (const [key,value] of Object.entries(this.productCart)) {
//             console.log(`${key}: ${value.price}`);
//             inCart += `${key} jumlah product : ${value.total}, harga : ${value.price},total harga ${value.price * value.total} \n`
//             totalCart += value.total * value.price;   
//         }
//             console.log(inCart);
//             console.log(totalCart);
//         return `${inCart} \n total semua belanjaan = ${totalCart}`
//     }
    
// }

// const productFunc = new Product();
// const transactionFunc = new Transaction(productFunc);

// productFunc.add("flashdisk2TB",125000);

// console.log(productFunc);

// console.log(transactionFunc);

// console.log(transactionFunc.addToCart('sunlightSun',10));
// console.log(transactionFunc.addToCart('berasRaskin',2));

// console.log(transactionFunc);

// console.log(transactionFunc.showCart());



class Product {
    constructor () {
            this.product = [    {nama : 'sabun' , price : 2500 },
                                {nama : 'shampoo' , price : 1000 },
                                {nama : 'odol' , price : 5000 },
                                {nama : 'pentol' , price : 1000 }
                    ];
    }
    add (nameInput,price) {
        this.product.push({nama : nameInput, price : price});
    }
    show () {
        return this.product;
    }
}

class Transaction {
    constructor () {
        this.transactionDetail = [];
        this.totalPrice = 0;
    }
    addCart (nameInput,total) {
        if (productFunc.product.some(item => item.nama === nameInput)) {

            if (!this.checkIfAlreadyCheck(nameInput)) {
                let productData = productFunc.product.find(( {nama} ) => nama === nameInput);
                this.transactionDetail.push({nama : productData.nama , total : total , price : productData.price})
            }
            else {
                this.transactionDetail.map((index) => {
                    if (index.nama === nameInput) {
                        index.total += total;
                    }
                })
            }
        }

        else return console.log(`${nameInput} tidak ada di dalam database produk`);
    }

    show () {
        return this.transactionDetail;
    }

    checkIfAlreadyCheck (nama) {
        return (this.transactionDetail.some (item => item.nama === nama)) ? true : false;
    }

    getPrice (nama) {
        productFunc.product.find((item) => item.nama === nama )
    }

    showTotalCart () {
        let formatIDR = new Intl.NumberFormat('id-ID' , {
            style:'currency',
            currency: 'IDR',
        })
        if(this.transactionDetail.length > 0) {
            let result = "Total Keranjang. \n";
            this.transactionDetail.map((item) => {
                this.totalPrice += (item.price * item.total)
                result += `Produk "${item.nama}" dengan jumlah ${item.total} = ${formatIDR.format((item.total * item.price))}\n`;
            })
            return result += `Jumlah Keseluruhan adalah = ${formatIDR.format(this.totalPrice)}`
        } 
        else return `anda belum memasukkan apapun ke dalam cart !!!`;
    }

}

const productFunc = new Product();
const transactionFunc = new Transaction();


transactionFunc.addCart('sabun',4);
transactionFunc.addCart('pentol',10);
transactionFunc.addCart('odo',2);

productFunc.add('rokok' , 15000);

transactionFunc.addCart('rokok',1);

console.log(transactionFunc.showTotalCart())