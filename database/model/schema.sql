CREATE DATABASE IF NOT EXISTS b-inder;

\c b-inder

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user VARCHAR(15) NOT NULL,
    pw VARCHAR(15) NOT NULL CHECK,
    UNIQUE (user)
)

CREATE TABLE IF NOT EXISTS userbooks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
        CONSTRAINT user_fk
        FOREIGN KEY (user_id)
        REFERENCES users(id),
    isbn VARCHAR,
    liked BOOLEAN,
    disliked BOOLEAN,
    read BOOLEAN,
    unread BOOLEAN,
)

