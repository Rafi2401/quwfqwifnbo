// Definisikan tipe untuk status pengguna
enum UserStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Suspended = "SUSPENDED",
}

// Interface untuk struktur data pengguna
interface User {
    id: number;
    name: string;
    email: string;
    status: UserStatus;
}

// Class untuk manajemen pengguna
class UserManager {
    private users: User[] = [];

    // Menambahkan pengguna baru
    addUser(user: User): void {
        this.users.push(user);
        console.log(`User added: ${user.name}`);
    }

    // Menghapus pengguna berdasarkan ID
    removeUser(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
        console.log(`User with ID ${id} has been removed.`);
    }

    // Mengubah status pengguna
    updateUserStatus(id: number, status: UserStatus): void {
        const user = this.users.find(user => user.id === id);
        if (user) {
            user.status = status;
            console.log(`User status updated: ${user.name} is now ${status}.`);
        } else {
            console.log(`User with ID ${id} not found.`);
        }
    }

    // Menampilkan daftar pengguna
    listUsers(): void {
        console.log("User List:");
        this.users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Status: ${user.status}`);
        });
    }
}

// Contoh penggunaan
const userManager = new UserManager();

// Menambahkan pengguna
userManager.addUser({ id: 1, name: "Rafi Galih", email: "rafikerja2401@gmail.com", status: UserStatus.Active });
userManager.addUser({ id: 2, name: "Alice", email: "alice@example.com", status: UserStatus.Inactive });
userManager.addUser({ id: 3, name: "Bob", email: "bob@example.com", status: UserStatus.Active });

// Menampilkan daftar pengguna
userManager.listUsers();

// Mengubah status pengguna
userManager.updateUserStatus(2, UserStatus.Active);

// Menghapus pengguna
userManager.removeUser(1);

// Menampilkan daftar pengguna setelah penghapusan
userManager.listUsers();
