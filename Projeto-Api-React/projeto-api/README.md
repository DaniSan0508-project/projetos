# Projeto Api-Node.js

O projeto consistem em uma api que retorna uma unica rota get com o seguinta array:

[
{
"key": "firstName",
"label": "First Name",
"type": "text",
"required": true
},
{
"key": "phoneNumber",
"label": "Phone Number",
"type": "tel",
"required": true
},
{
"key": "birthDate",
"label": "Birth Date",
"type": "date",
"required": false
},
{
"key": "sendButton",
"label": "Submit Form",
"type": "submit"
}
]

### Ferramentas Utilizadas:

- node.js

## Como executar:

Abra o terminal e copie o código:

```bash
git@github.com:DaniSan0508-project/projetos.git
```

Após executar, entrar na pasta projeto-api e digitar:

```bash
npm install
```

Entrar na pasta projeto-api/src e digitar:

```bash
node server.js
```
