#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<EOSQL
-- Cria usuário se não existir
DO
\$do\$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE rolname = '${APP_DB_USER}'
   ) THEN
      CREATE ROLE ${APP_DB_USER} LOGIN PASSWORD '${APP_DB_PASSWORD}';
   END IF;
END
\$do\$;

-- Cria schema app e dá permissões
CREATE SCHEMA IF NOT EXISTS app AUTHORIZATION ${APP_DB_USER};
GRANT ALL ON SCHEMA app TO ${APP_DB_USER};
ALTER DEFAULT PRIVILEGES IN SCHEMA app
   GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO ${APP_DB_USER};
EOSQL