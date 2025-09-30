# Avaliacao_Seguranca
Docker Compose com Node.js, PostgreSQL e React (com segurança)
---
**Checklist**

✓ Repositório com estrutura correta (pasta e nomes)

 ✓ .env.example presente e .env não comitado

☐ docker-compose.yml configurado com webnet e backnet

☐ Scripts db/init/* com chmod +x e SQL corretos

☐ API em Node.js funcionando e rodando como usuário não-root

☐ Web (Nginx) servindo build do React e fazendo proxy /api

☐ read_only + tmpfs aplicados onde pedido

☐ healthchecks configurados

☐ Logs rotacionados (logging.options) configurados

☐ Evidences/ com prints/logs: compose-ps, health, users, networks, network inspect

☐ README com instruções de execução e checklist preenchido
