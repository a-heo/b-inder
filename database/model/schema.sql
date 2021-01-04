
CREATE DATABASE binder;

\c binder;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (10) UNIQUE,
    pw VARCHAR (15),
    CONSTRAINT user_pw_notnull CHECK (
    NOT (
        ( username is NULL or username = '' )
        AND
        ( pw is NULL or pw = '' )
        )
   )
);

CREATE TABLE userbooks (
    id SERIAL PRIMARY KEY,
    userid INTEGER NOT NULL,
    isbn VARCHAR,
    title VARCHAR,
    author VARCHAR,
    published VARCHAR,
    description VARCHAR,
    image VARCHAR,
    liked BOOLEAN,
    readbook BOOLEAN,
    unread BOOLEAN,
        CONSTRAINT user_fk
        FOREIGN KEY (userid)
        REFERENCES users(id)
);
