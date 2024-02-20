class BankQueue {
    #queue;
    constructor (queue) {
        this.#queue = [];
    }

    #isEmpty () {
        return this.#queue.length === 0 ;
    }

    enqueue (customer = 1) {
        this.#queue.push(customer);
        const Message = `Berhasil memasukkan antrian anda`;
        console.log(Message);
        return (Message)
    }

    dequeue () {
        if (this.#isEmpty()) return 'Mohon maaf anda tidak bisa menghapus antrian karena antrian saat ini memang sedang kosong,coba untuk masukkan'
        
        this.#queue.shift();
        const Message = `Berhasil menghapus antrian anda`;
        console.log(Message);
        return (Message)
    }

    size () {
        const Message = `Jumlah antrian saat ini adalah ${this.#queue.length}`
        console.log(Message);
        return Message;
    }

}

const bankTitil = new BankQueue();

console.log(bankTitil);

console.log(bankTitil.dequeue());

console.log(bankTitil.enqueue());
console.log(bankTitil.enqueue());

console.log(bankTitil.dequeue());
console.log(bankTitil.size());
