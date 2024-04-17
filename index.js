const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Cadastrar Departamento
    const departamento = await prisma.departamento.create({
      data: {
        id: 'depto-1',
        nome: 'TI',
      },
    });

    console.log('Departamento criado:', departamento);

    // Cadastrar Funcionário
    const funcionario = await prisma.funcionario.create({
      data: {
        matricula: '123',
        nome: 'João',
        salario: 3000.00,
        endereco: 'Rua XYZ, 123',
        departamento: {
          connect: { id: departamento.id }
        },
        idDepartamento: departamento.id
      },
    });

    console.log('Funcionário criado:', funcionario);

    // Listar Funcionários
    const funcionarios = await prisma.funcionario.findMany();
    console.log('Funcionários:', funcionarios);

    // Editar Funcionário
    const funcionarioEditado = await prisma.funcionario.update({
      where: { matricula: '123' },
      data: { salario: 3500.00 },
    });

    console.log('Funcionário editado:', funcionarioEditado);

    // Remover Funcionário
    const funcionarioRemovido = await prisma.funcionario.delete({
      where: { matricula: '123' },
    });

    console.log('Funcionário removido:', funcionarioRemovido);

    // Listar Departamentos
    const departamentos = await prisma.departamento.findMany();
    console.log('Departamentos:', departamentos);
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();