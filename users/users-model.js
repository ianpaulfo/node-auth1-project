const db = require("../db-config");

module.exports = {
    add,
    find,
    findby,
    findByID,
};

function find() {
    return db("users").select("id","username");
}

function findby(filter) {
    return db("users").where(filter);
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");

    return findByID(id);
}



function findByID(id) {
    return db("users")
    .where({ id })
    .first();
}
