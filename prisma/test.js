const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function db() {
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

db();

// Remova ou ajuste a parte abaixo dependendo do que você precisa
async function main() {
  try {
    const allCadastros = await prisma.cadastro.findMany({
      include: {
        // Inclua as relações se necessário
      },
    });

    console.log('Todos os cadastros:', allCadastros);
  } catch (error) {
    console.error('Erro ao buscar todos os cadastros:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); // Descomente ou ajuste conforme necessário
