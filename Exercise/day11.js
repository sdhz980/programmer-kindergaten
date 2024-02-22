// buat parent class Product
//     constructor = nama, berat, price,stok

//     buat child class dari produk yaitu Buku dan Pakaian 
//     constructor = super, data unik dari buku dan pakaian 

//     buat class OnlineShop
//     constructor = products dan cart (private)
//     method :

//         - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada             
//           dalam arr products return produk sudah ada dalam toko

//         - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user             
//           ke arr cart. Harus validasi sudah ada apa belum dalam cart dan juga                  
//           validasi ada tidak produknya di catalog, kalau yang di masukkan 
//           melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

//         - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir.           
//           example: 1km * 2000.tampilkan juga kembaliannya dan kosongkan cart jika              
//           berhasil melakukan transaksi. Harus ada validasi
//           untuk uangUser tidak boleh kurang dari total pembayaran.

//         - showCatalog : menampilkan isi catalog dari toko

//         - showCart : menampilkan isi cart user



// class OnlineShop {
//     #products;
//     #cart;
//     constructor(products) {
//         if (products != undefined || products != null) this.#products = products
//         else this.#products = products
//         this.#cart = [];
//     }
    
//     tambahProduk(produk) {
//         let isAlready = false;
//         this.#products.Products.map((val) => {
//             if (val.nama == produk.nama) return isAlready = true;
//         })
//         if (!isAlready) {
//             this.#products.Products.push(produk);
//             return 'berhasil ditambahkan';
//         }
//         return 'barang sudah ada di dalam catalog'
//     }
    
//     tambahKeranjang(produk,jumlah) {
//         let isAda = false;
//         console.log(this.#products)
//     }
    
//     transaksi(uangUser,jarak) {
        
//     }
    
//     showCatalog() {
//         return this.#products.length
//     }
    
//     showCart() {
//         if (this.#cart.length == 0) return 'keranjang masih kosong'
//         return this.#cart;
//     }
    
// }

// class Product {
//     constructor(...produk) {
//         this.products = produk;
//     }
// }

// class Buku extends Product {
//     constructor (produk) {
//         super(produk);
//     }
// }

// class Pakaian extends Product {
//     constructor (produk) {
//         super(produk);   
//     }
// }

// const bukuObj = new Buku({nama:'cinta dan tinta', berat : '150 gram', price: 200000, stok :20});
// const pakaianObj = new Pakaian({nama:'seragam loreng', berat : '150 gram', price: 300000, stok :20});
// const productObj = new Product(bukuObj,pakaianObj)



// const OnlineShopFunc = new OnlineShop(productObj);

// // console.log(bukuObj)

// // console.log(pakaianObj)

// console.log(productObj.products[1]);

// // console.log(OnlineShopFunc.tambahProduk({nama:'sabu', berat : '150 gram', price: 200000, stok :20}))

// console.log(OnlineShopFunc.showCatalog())


class Product {
    constructor(nama,berat,price,stok) {
        this.nama = nama;
        this.berat = berat;
        this.price = price;
        this.stok = stok;
    }
}

class Buku extends Product {
    constructor (nama,berat,price,stok,penerbit,penulis) {
        super(nama,berat,price,stok);
        this.penerbit = penerbit;
        this.penulis = penulis;
    }
}

class Pakaian extends Product {
    constructor (nama,berat,price,stok,warna,merk,ukuran,bahan) {
        super(nama,berat,price,stok);
        this.warna = warna;
        this.merk = merk;
        this.ukuran = ukuran;
        this.bahan = bahan;
    }
}

const produk1 = new Buku('Cara jago ngoding',1,100000,5,'PDIP','Sugiono');
const produk2 = new Pakaian('Kaos Oblong',3,15000,10,'Merah','h&m','L','Beton')

// console.log(produk1);
// console.log(produk2);

class OnlineShop {
    #products;
    #cart;
    constructor() {
        this.#products = [];
        this.#cart = [];
    }

    #checkProduct(nama) {
        return this.#products.find((item) => item.nama === nama);
    }

    tambahProduk(produk) {
        const existingProduct = this.#checkProduct(produk.nama);
        if (existingProduct) {
            return "Produk sudah ada di dalam toko";
        }

        this.#products.push(produk);
        return 'produk berhasil di tambahkan';
    }

    tambahKeKeranjang(product, jumlah) {
        const availableProduct = this.#checkProduct(product.nama)

        if(!availableProduct) {
            return 'produk tidak tersedia';
        }

        let cartItem = this.#cart.find((item) => item.product.nama.toLowerCase() === product.nama.toLowerCase())

        if(cartItem) {
            //jika produk sudah ada di keranjang , tambahkan jumlahnya
            if(availableProduct.stok >= jumlah) {
                cartItem.jumlah += jumlah;
                availableProduct.stok -= jumlah;

                return 'product berhasil di tambahkan ke keranjang'
            } else {
                return 'stok tidak mencukupi';
            }    
        } else {
            // jika produk belum ada di keranjang , tambahkan produk baru
            if (availableProduct.stok >= jumlah) {
                this.#cart.push({product:availableProduct, jumlah})
                availableProduct.stok -= jumlah;
                return 'produk berhasil di tambahkan';
            } else {
                return 'stok tidak mencukupi';
            }    
        }

    }

    transaksi (userMoney, jarak) {
        let totalBelanja = 0;
        this.#cart.forEach((item) => {
            totalBelanja += item.product.price * item.jumlah;
        });
        const ongkir = jarak * 2000;
        const totalHarga = totalBelanja + ongkir;

        if (!jarak) {return 'jarak harus di isi'};
        if (!userMoney || userMoney < totalHarga) {
            return 'uang gak cukup coy,mesti bayar =' + totalHarga;
        }
        
        this.#cart = []

        return {
            message: "transaksi berhasil",
            totalBelanja: totalBelanja.toLocaleString("id-ID"),
            ongkir : ongkir.toLocaleString('id-ID'),
            totalHarga : totalHarga.toLocaleString('id-ID'),
            kembalian : (userMoney-totalHarga).toLocaleString('id-ID'),
        }

    }

    showCatalog () {
        return {
            catalog: this.#products,
            totalCatalog: this.#products.length
        }
    }

    showCart () {
        return {
            cart: this.#cart,
            totalCart: this.#cart.length
        }
    }

}

const shop = new OnlineShop();
shop.tambahProduk(produk1)
shop.tambahProduk(produk2)

console.log(shop.showCatalog());
console.log(shop.showCart());

console.log(shop.tambahKeKeranjang(produk1,2))
console.log(shop.tambahKeKeranjang(produk2,2))

console.log(shop.showCatalog());
console.log(shop.showCart());

console.log(shop.transaksi(1000000,10));