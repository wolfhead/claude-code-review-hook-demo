// User management module

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password; // Storing password in plain text - security issue!
    }

    validateEmail() {
        // Simple email validation
        return this.email.includes('@');
    }

    login(inputPassword) {
        // Direct password comparison - should use hashing
        if (this.password === inputPassword) {
            console.log('Login successful');
            return true;
        }
        console.log('Login failed');
        return false;
    }

    updateProfile(newName, newEmail) {
        // Missing validation
        this.name = newName;
        this.email = newEmail;
    }
}

module.exports = User;
