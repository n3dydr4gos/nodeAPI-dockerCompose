# Node.js Fullstack App con Docker Compose

Questo progetto contiene due applicazioni Node.js separate:

- **Backend**: Espone un'API su `http://localhost:3001`
- **Frontend**: Utilizza l'API e mostra il risultato su `http://localhost:3000`

Entrambi i servizi girano in contenitori Docker distinti e comunicano tra loro tramite Docker Compose.

---

## Avvio rapido

Assicurati di avere [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) installati.

### 1. Avvia i container

```bash
docker-compose up --build
