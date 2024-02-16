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

class Product{
    constructor (product) {
        this.product = product;
        this.product = { rokokSurya : {
            price : 25000
        },sabunLoe : {
            price : 2000
        },sunlightSun : {
            price : 5000
        },berasRaskin : {
            price : 25000
        } };
    }
    add (name,price) {
        this.product[name] = {price : price}
    }
    show () {
        return this.product;
    }
}

class Transaction{
    constructor (inst) {
        this.product = inst.product;
        this.productCart = {};
    }
    addToCart(productName,total) {
        if (Object.hasOwn(this.product, productName)) {
            this.productCart[productName] = {price : this.product[productName].price , total : total}
            return `berhasil input "${productName}" dengan jumlah ${total}`
        }
        return 'error please input product from the product list'
    }
    showCart() {
    let inCart = '';
    let totalCart = 0;
        for (const [key,value] of Object.entries(this.productCart)) {
            console.log(`${key}: ${value.price}`);
            inCart += `${key} jumlah product : ${value.total}, harga : ${value.price},total harga ${value.price * value.total} \n`
            totalCart += value.total * value.price;   
        }
            console.log(inCart);
            console.log(totalCart);
        return `${inCart} \n total semua belanjaan = ${totalCart}`
    }
    
}

const productFunc = new Product();
const transactionFunc = new Transaction(productFunc);

productFunc.add("flashdisk2TB",125000);

console.log(productFunc.show());

console.log(transactionFunc.addToCart('sunlightSun',10));
console.log(transactionFunc.addToCart('berasRaskin',2));

console.log(transactionFunc.showCart());