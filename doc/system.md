**Sistema**

***./config*** configurações do sistema.

***Exports***

- **database**: 
  - **host**: caminho do banco de dados
  - **port**: porta do banco de dados
  - **dbName**: nome do banco de dados
  - **dbUser**: usuário do banco de dados
  - **dbPass**: senha do banco de dados
- **secret**: chave para criptografia JWT
- **err**: `function(e, d)` - d: retorna um objeto para resposta ao usuário. p: `e` código do erro, `d` dados complementares (código de erro precisa ser 0 para utilização de dados complementares). r: `{ err: <code>, data: <info>}`

**./database.js** conexão com o banco de dados

***Exports***

- **connect**: `function(evt)` - d: inicia uma conexão com o banco de dados. p: `evt` função para ser executa após conexão com banco de dados, recebe os parametros `(con, db)` - -*p*: `con` conexão com SGDB, `db` conexão com banco de dados  

**./routes.js** rotas do aplicativo

**Exports**

- **apiRoutes**: `function(app)` - d:  adiciona as rotas dos APIs ao app. p: `app` app express

**./lib/User.ts** gerenciamento de usuários

**Exports** - Class Users

```typescript
import { Users } from '@lib/Users';
var Users = new Users();
```

- **validateFields**: **`function(info): object`** - d: valida os dados do usuário. p: `info` objeto com as informações do usuário a ser validada (itens são opcionais): *(verificar validador do usuário)* 

  - nome completo - `{ fullname: '' }`
  - nome de exibição - `{ nickname: '' }`
  - cpf - `{ cpf: '' }`
  - email - `{ email: '' }`
  - senha - `{ password: '' }`
  - cargo - `{ role: '' }`
  - matricula - `{ registry: '' }`
  - nascimento - `{ birth: '' }`
  - telefone - `{ phone: { landline: '', mobile: '' } }`
  - gênero: `{ gender: '' }`
  - moradia: `{ living: { state: '', city: '', district: '', street: '', number: '', zip: '' } }`

  r:  retorna `info` com informações validadas, ou objeto com error code.

  ```typescript
  let info = {
      fullname: 'Foo Bar',
      nickname: 'foo',
      cpf: '12345678900',
      //....
      phone: {
          landline: '3137791234',
          mobile: '31991234321'
      },
      //....
  };
  let validate = this.validateFields(info);
  if (validate.err) {
      // Fazer algo se alguma informação estiver errada
      console.log(validate); // Mostrar qual informação está errada no console
  }
  ```

  

**./validators/user.validator.ts** validador de informações do usuário

**Exports**

***USO:***

```typescript
import validator = require('@lib/validators/user.validator');
validator.<campo>(<valor: string>, (res, err) => {
    if (err) {
        // Fazer algo se erro
    } 
    // ...
});
```



- **fullname**:  nome completo. (>10 e <60, apenas texto). 
- **cpf**:  cpf do usuário. 
- **email**: email do usuário. (>10 e <60). 
- **nickname**:  nome de exibição. (>5 e <15, apenas texto). 
- **birth**: data de nascimento. (yyyy-mm-dd). 
- **phone**: telefone do usuário. (telefone). 
- **role**: cargo do usuário. (>5 e <30, apenas texto e numero). 
- **admission**: data de admissão. (yyyy-mm-dd). 
- **password**: senha do usuário. (string). 
- **registry**: matrícula. (>3 e <12,  string). 
- **gender**: gênero do usuário. (M ou F). 
- **state**:  Estado. (XX - dois caracteres). 
- **city**:  Cidade. (>3 e <20, apenas texto). 
- **district**: Bairro. (>3 e <30, apenas texto). 
- **street**: Rua. (>3 e <40, apenas texto). 
- **address**: Numero residencia. (<11, string). 
- **zipCode**: CEP. (CEP XXXXX-XXX ou XXXXXXXX). 

 **APIs**