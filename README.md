# 🎬 MovieApp

**MovieApp** é um aplicativo de filmes desenvolvido em React Native que permite aos usuários explorar uma lista de filmes a partir de uma API externa, cadastrar os filmes que gostariam de assistir, e visualizar uma lista de filmes salvos. O app utiliza Firebase para autenticação e armazenamento de dados dos filmes cadastrados.

## 📲 Funcionalidades

- **Explorar Filmes**: Consulte uma lista de filmes a partir de uma API de filmes.
- **Cadastrar Filmes**: Adicione filmes à lista de interesse para assisti-los no futuro.
- **Listagem de Filmes Cadastrados**: Veja todos os filmes que foram cadastrados pelo usuário.
- **Autenticação com Firebase**: O app utiliza o Firebase Authentication para criar e gerenciar contas de usuário.
- **Banco de Dados Firebase**: Armazenamento de dados no Firebase Realtime Database para salvar as informações dos filmes cadastrados.

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento de aplicativos móveis.
- **Firebase Authentication** - Gerenciamento de autenticação de usuários.
- **Firebase Realtime Database** - Armazenamento em tempo real para informações dos filmes.
- **Expo** - Plataforma para execução de aplicativos React Native.
- **Axios** - Biblioteca para fazer requisições HTTP para a API de filmes.

## 🚀 Começando

### Pré-requisitos

- **Node.js** e **npm** (ou **yarn**)
- **Expo CLI** instalado globalmente
- Conta no Firebase e um projeto configurado
- Credenciais de uma API de filmes ('https://sujeitoprogramador.com/r-api/?api=filmes')

  ### Instalação

1. Clone o repositório:

   ```bash
   git clone (https://github.com/spinhead007/AplicativoFilmes)
   cd AplicativoFilmes

 2.  Instale as dependências:

bash
Copiar código
npm install


3.  Configure o Firebase:

Crie um projeto no Firebase Console.
Ative o Firebase Authentication (usando email/senha).

4.  Configure o Firebase Realtime Database.
Baixe o arquivo de configuração google-services.json (para Android) e GoogleService-Info.plist (para iOS) e adicione-os ao seu projeto.


5.  Crie um arquivo firebase.js na raiz do projeto para inicializar o Firebase:

javascript
Copiar código

```// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    databaseURL: "SEU_DATABASE_URL",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };```


