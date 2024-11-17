export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
};

export const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/(?=.*[a-z])/.test(password)) return "Password must include lowercase letter";
    if (!/(?=.*[A-Z])/.test(password)) return "Password must include uppercase letter";
    if (!/(?=.*\d)/.test(password)) return "Password must include number";
    return "";
};

export const validateName = (name, field) => {
    if (!name) return `${field} is required`;
    if (name.length < 2) return `${field} must be at least 2 characters`;
    if (!/^[a-zA-Z\s]*$/.test(name)) return `${field} can only contain letters`;
    return "";
};