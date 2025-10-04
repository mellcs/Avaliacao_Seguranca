CREATE TABLE IF NOT EXISTS app.users (
  id   SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

GRANT USAGE, SELECT, UPDATE ON SEQUENCE app.users_id_seq TO app_user;

INSERT INTO app.users (name)
VALUES ('Ada Lovelace'), ('Alan Turing')
ON CONFLICT DO NOTHING;

