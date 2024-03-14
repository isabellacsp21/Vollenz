const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

 /*async function db() {
  try {
    const test = await prisma.cadastro.create({
      data: {
        nome: 'Isabella Camila Souza de Paula',
        datanasc: new Date('2007-03-07'),
      },
    });
    console.log(test);
  } catch (error) {
    console.error('Erro ao criar registro:', error);
  }
}

db();*/

 /*async function db() {
  try {
    const test = await prisma.dados.create({
      data: {
        tipo_Sangue: 'AB+',
        Especificacao: 'Osteoporse',
        Estado: 'Evolução constante',
        Altura: 1.70,
      },
    });
    console.log(test);
  } catch (error) {
    console.error('Erro ao criar registro:', error);
  }
}

db();*/

/*async function db() {
  try {
    const test = await prisma.pesos.create({
      data: {
        valor: '50',
        data_gravacao: new Date(),
      },
    });
    console.log(test);
  } catch (error) {
    console.error('Erro ao criar registro:', error);
  }
}

db();*/

/*async function db() {
  try {
    const test = await prisma.login.create({
      data: {
        cpf: '12809204918'
      },
    });
    console.log(test);
  } catch (error) {
    console.error('Erro ao criar registro:', error);
  }
}

db();*/



/*async function main() {
  try {
    const allCadastros = await prisma.cadastro.findMany({
      include: {
        
      },
    });

    console.log('Todos os cadastros:', allCadastros);
  } catch (error) {
    console.error('Erro ao buscar todos os cadastros:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); */


  /*const express = require('express')
  const app = express()
  const port = 3000
  
app.use(express.json());

  app.get('/cadastro', (req, res) => {
     prisma.cadastro.findMany().then((dados)=>{
        res.send(dados);
     }).catch((erro)=>{
        console.log(erro);
        res.send("deu erro");
     });
  })
  
app.post('/cadastro', (req, res)=> {
    const dados = req.body;
    console.log(dados);

    prisma.cadastro.create({
      data: {
        nome: dados.nome,
        datanasc: new Date(dados.datanasc)}
      }).then((dados)=>{
        res.send(dados);
     }).catch((erro)=>{
        console.log(erro);
        res.send("deu erro");
     });

})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })*/

  const express = require('express')
  const app = express()
  const port = 3000

app.use(express.json());

  app.get('/login', (req, res) => {
     prisma.login.findMany().then((dados)=>{
        res.send(dados);
     }).catch((erro)=>{
        console.log(erro);
        res.send("deu erro");
     });
  })
  
app.post('/login', (req, res)=> {
    const dados = req.body;
    console.log(dados);

    prisma.login.create({
      data: {
        cpf: dados.cpf}
      }).then((dados)=>{
        res.send(dados);
     }).catch((erro)=>{
        console.log(erro);
        res.send("deu erro");
     });

})
  
app.get('/cadastro', (req, res) => {
  prisma.cadastro.findMany().then((dados)=>{
     res.send(dados);
  }).catch((erro)=>{
     console.log(erro);
     res.send("deu erro");
  });
})

app.post('/cadastro', (req, res)=> {
  const dados = req.body;
  console.log(dados);

  prisma.cadastro.create({
    data: {
      nome: dados.nome,
        datanasc: new Date(dados.datanasc)}
    }).then((dados)=>{
      res.send(dados);
   }).catch((erro)=>{
      console.log(erro);
      res.send("deu erro");
   });

})
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  