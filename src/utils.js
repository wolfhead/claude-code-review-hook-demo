// Utility functions

function formatDate(date) {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

module.exports = {
    formatDate,
    capitalize,
    debounce
};
