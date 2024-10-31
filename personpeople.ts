// 1. Definisikan tipe data User
type User = {
  id: number;
  name: string;
  email: string;
};

// 2. Fungsi untuk membuat user baru
function createUser(id: number, name: string, email: string): User {
  return { id, name, email };
}

// 3. Contoh penggunaan fungsi
const newUser: User = createUser(1, "Rafi Galih", "rafikerja2401@gmail.com");
console.log(newUser);

class Person {
  name: string;
  age: number;

  // Constructor untuk inisialisasi objek
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Fungsi untuk menampilkan salam
  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Membuat instance baru dari class Person
const person1 = new Person("Rafi", 20);
person1.greet(); // Output: Hello, my name is Rafi and I am 20 years old.

interface Product {
  id: number;
  name: string;
  price: number;
  showDetails(): void;
}

// Menggunakan interface pada objek
const product: Product = {
  id: 1,
  name: "Laptop",
  price: 5000,
  showDetails() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  },
};

product.showDetails(); // Output: Product: Laptop, Price: $5000

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Suspended = "SUSPENDED",
}

function checkStatus(status: Status): void {
  if (status === Status.Active) {
    console.log("The account is active.");
  } else {
    console.log("The account is not active.");
  }
}

checkStatus(Status.Active); // Output: The account is active.
