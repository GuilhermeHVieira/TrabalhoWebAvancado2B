# Trabalho do 2 Bimestre

##  Back-End

1. **Clone o repositorio.**

    git clone (URL do repositório)
    cd pasta-do-backend

2. **Instale as dependências.**

    npm init -y
    npm install typescript ts
    npx tsc
    npm install express
    npm install --save-dev @types/express
    npx tsc --init
    npm install prisma --save-dev
    npx prisma init --datasource-provider sqlite

3. **Crie um arquivo .env** 

    DATABASE_URL=file:./dev.db
    GROQ_API_KEY=(sua chave groq)
   
4. **Configure o prisma e instale mais dependências:**

    npx prisma generate
    npm install --save groq-sdk bcrypt
    npm install --save-dev @types/bcrypt

5. **Inicie o servidor**
    npm run dev
    
##  Front-End

1. **Clone o repositório do front-end**

    git clone (URL do repositório)
    cd pasta-do-frontend

2. **Substitua arquivos existentes**

    Mantenha as pastas app, assets e components, substituindo os demais arquivos.

3. **Instale as dependências**

    npm install
    npm install expo-router
    npm run web


