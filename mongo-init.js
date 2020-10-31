db.createUser(
    {
        user: "user",
        pwd: "passwords",
        roles: [
            {
                role: "readWrite",
                db: "base"
            }
        ]
    }
);

db.auth('user', 'passwords');
db = db.getSiblingDB('base');

db.jwt.createIndex( { "expire_at": 1 }, { expireAfterSeconds: 0 } );

db.user.insert({
    "username" : "admin",
    "email" : "admin@myservice.com",
    "picture" : "https://lh3.googleusercontent.com/a-/AOh14GhfNyYpAYjSjt_MuUHgo7kqkk2GsaX98vevjC3zSw=s96-c",
    "given_name" : "Admin",
    "family_name" : "Admin",
    "disabled" : false,
    "hashed_password" : "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
    "date_insert" : ISODate("2020-10-29T03:59:54.356Z"),
    "date_update" : null
});