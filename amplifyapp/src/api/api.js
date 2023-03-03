const { API_URL } = require("../constants");

module.exports.login = async (email, password) => {
    const response = await fetch(API_URL + "/auth", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
        return await response.json()
    } else {
        throw Error("Login not successful...")
    }
}

module.exports.getEmployeeById = async (id) => {
    const response = await fetch(API_URL + "/employees/" + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });
    if (response.ok) {
        return await response.json()
    } else {
        throw Error("User could not be retrieved...")
    }
}