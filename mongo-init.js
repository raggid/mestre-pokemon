db = db.getSiblingDB('pokemaster')
db.createUser(
    {
        user: "pokemaster",
        pwd: "pokepass",
        roles: [
            {
                role: "readWrite",
                db: "pokemaster"
            }
        ]
    }
);
db.createCollection('users');
db.users.insert({ "nickname": "admin", "password": "adminpass", "mail": "mail@mail.com" });