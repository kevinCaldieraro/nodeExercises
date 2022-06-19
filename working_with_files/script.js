let fs = require('fs');

// COMO CRIAR UM ARQUIVO
/**************************************************************
fs.writeFile('teste.txt', 'como criar um arquivo', error => {
  if (error) throw error;

  console.log('Arquivo criado!');
});
***************************************************************/

// COMO CONCATENAR MAIS CONTEÚDO A UM ARQUIVO
/**************************************************************
fs.appendFile(
  'teste.txt',
  ' - esse é um texto inserido com a função appendFile',
  error => {
    if (error) throw error;

    console.log('Conteúdo atualizado!');
  }
);
***************************************************************/

// COMO RENOMEAR UM ARQUIVO
/**************************************************************
fs.rename('teste.txt', 'newName.txt', error => {
  if (error) throw error;

  console.log('Nome atualizado!');
});
***************************************************************/

// COMO DELETAR UM ARQUIVO
/**************************************************************
fs.unlink('teste.txt', error => {
  if (error) throw error;

  console.log('Arquivo deletado!');
});
***************************************************************/

// COMO LER UM ARQUIVO
/**************************************************************
fs.readFile('teste.txt', 'utf8', (error, data) => {
  if (error) throw error;

  console.log(data);
});
***************************************************************/

// Transformando o conteúdo em uppercase -----------------------
let args = process.argv.slice(2);
let fileName = args[0];

fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) throw error;

  fs.writeFile(fileName + '_Uppercase', data.toUpperCase(), error => {
    if (error) throw error;
    console.log('Arquivo transformado para uppercase!');
  });
});
