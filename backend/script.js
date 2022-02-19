async function hashPassword(password) {
    const salt = await genSalt(10);
    const hash = await _hash(password, salt)
    console.log(hash)
}

hashPassword('1234');