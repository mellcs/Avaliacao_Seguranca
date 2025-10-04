# Avaliação de Seguranca
Docker Compose com Node.js, PostgreSQL e React (com segurança)
-
Este repositório contém uma aplicação completa em arquitetura de microsserviços utilizando Docker Compose, composta por:

- API em Node.js/Express com CRUD de usuários  
- Banco de Dados PostgreSQL com scripts de inicialização  
- Frontend em React servido via Nginx  
- Configurações de segurança, redes isoladas, logs e healthchecks  
---
## Checklist

✓ Repositório com estrutura correta (pasta e nomes)

✓ .env.example presente e .env não comitado

✓ docker-compose.yml configurado com webnet e backnet

✓ Scripts db/init/* com chmod +x e SQL corretos

✓ API em Node.js funcionando e rodando como usuário não-root

✓ Web (Nginx) servindo build do React e fazendo proxy /api

✓ read_only + tmpfs aplicados onde pedido

✓ healthchecks configurados

✓ Logs rotacionados (logging.options) configurados

✓ Evidences/ com prints/logs: compose-ps, health, users, networks, network inspect

✓ README com instruções de execução e checklist preenchido

---
### Executando o projeto

**1. Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/atividade-quinta.git
cd atividade-quinta
```

**2. Criar o arquivo .env**
Use o modelo fornecido e edite com suas variáveis, como o usuário e a senha do banco.
```bash
cp .env.example .env
```

**3. Subindo os serviços**
É necessário instalar o Docker Desktop para rodar os comandos, e ir até a pasta do projeto para que tudo rode corretamente. 
```bash
docker compose up -d --build
```

**4. Verificar os serviços ativos**
```bash
docker compose ps
```

---
### Acessando a aplicação
**No navegador:**
http://localhost:8080

---
### Evidências
Estão localizadas na pasta evidences, em arquivo e print.
