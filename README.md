# 🧪 Workshop — Testes Unitários em React + Vite com Jest + React Testing Library

Este projeto foi criado para fins **didáticos**, como parte de um **workshop prático** sobre testes unitários em React, utilizando **Vite**, **Jest** e **React Testing Library**.

---

## 🎯 Objetivo do Workshop

- Entender o que são **testes unitários**.
- Aprender a configurar o **Jest** e o **React Testing Library** em um projeto React com **Vite**.
- Escrever e executar testes em **componentes reais**.
- Visualizar **cobertura de testes** e boas práticas.

---

## 🏗️ Tecnologias utilizadas

- ⚛️ **React 18 + Vite**
- 🧪 **Jest** — Framework de testes
- 🧰 **React Testing Library** — Testes baseados no comportamento do usuário
- 🧠 **Babel** — Transpilação para Jest entender JSX

---

## 🚀 Como rodar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/react-tests-workshop.git
cd react-tests-workshop
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o projeto React (modo desenvolvimento)

```bash
npm run dev
```

### Acesse no navegador:

👉 [http://localhost:5173](http://localhost:5173)

## 🧪 Executando os testes

- Todos os testes estão localizados na pasta src/**tests**/

```bash
npm run test
```

## 🔁 Rodar testes em modo observação

- Ideal para o workshop: os testes são reexecutados automaticamente ao salvar arquivos.

```bash
npm run test:watch
```

## 📊 Gerar relatório de cobertura

- Um relatório em HTML será criado em ./coverage/index.html.
- Abra esse arquivo no navegador para visualizar a cobertura detalhada.

```bash
npm run test:coverage
```
