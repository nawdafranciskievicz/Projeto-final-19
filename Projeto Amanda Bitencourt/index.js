// Definições básicas
let continuar = true;
let dados = [];

// Função para cadastro
function cadastrar() {
  console.log("Função de cadastro");

  let nomeAbrigo = prompt("Qual o nome do abrigo?");
  let endereco = prompt("Qual seu endereço?");
  let telefone = prompt("Qual seu telefone?");
  let lotacao = prompt("Qual é sua capacidade de lotação so abrigo?");
  let cidade = prompt("Qual é sua cidade do abrigo?");

  let novoAbrigo = {
    nomeAbrigo,
    endereco,
    telefone,
    lotacao,
    cidade,
  };

  dados.push(novoAbrigo);
}

function listar() {
  console.log("Função de lista");

  console.log(
    "Código | Nome do Abrigo | Endereço | Telefone | lotação | cidade \n*"
  );
  console.log("---------------------------------------------------- n*");
  for (let i = 0; i < dados.length; i++) {
    dados[i].codigo = i;

    console.log(
      `${dados[i].codigo} | ${dados[i].nomeAbrigo} | ${dados[i].endereco} | ${dados[i].telefone} | ${dados[i].lotacao} | ${dados[i].cidade} \n`
    );
  }
}

//Cria uma função para buscar
function buscar() {
  console.log("Função de busca");

  let cidadeProcurada = prompt("Qual é a sua cidade?");

  for (let i = 0; i < dados.lenghth; i++) {
    if (cidadeProcurada === dados[i].cidade) {
      console.log(
        "Código | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n"
      );
      console.log(`Você está procurando ${cidadeProcurada}`);
      console.log("--------------------------------------------------- \n");
      console.log("Listagem de abrigos: \n");
      console.log("--------------------------------------------------- \n");
      console.log(
        "Código | Nome do Abrigo | Endereço | Telefone | Capacidade | Cidade \n"
      );
      console.log("--------------------------------------------------- \n");
      console.log(
        `${dados[i].codigo} | ${dados[i].nomeAbrigo} | ${dados[i].local} | ${dados[i].telefone}
				| ${dados[i].lotacao} | ${dados[i].cidade} \n`
      );
    }
  }
}
// Função para deletar
function deletar() {
  console.log("Função deletar");

  let nomeDoAbrigoParaDeletar = Number(
    prompt("Escreva o nome do abrigo que quer deletar")
  );

  for (let i = 0; i < dados.length; i++) {
    if (nomeDoAbrigoParaDeletar === dados[i].nomeAbrigo) {
      dados.splice(dados[i].nomeAbrigo, 1);
    }
  }
}
// Função para editar
function editar() {
  console.log("Função editar");

  let nomeDoAbrigoParaEditar = prompt(
    "Escreva o nome do abrigo que quer editar"
  );

  for (let i = 0; i < dados.length; i++) {
    if (nomeDoAbrigoParaEditar === dados[i].nomeAbrigo) {
      let nomeAbrigo = prompt("Nome do Abrigo:");
      let endereco = prompt("Endereço do Abrigo:");
      let telefone = Number(prompt("Número de telefone do Abrigo:"));
      let lotacao = Number(prompt("Capacidade de lotação do Abrigo:"));
      let cidade = prompt("Cidade:");
      let abrigoEditado = { nomeAbrigo, endereco, telefone, lotacao, cidade };

     
    }

    dados[i].push(abrigoEditado);
  }
}

// Função para sair
function sair() {
  continuar = false;
  console.log("Tchau! Para reiniciar, atualize a aba do navegador.");
}

// Loop para perguntar ao usuário
while (continuar) {
  // Formatar pergunta
  let pergunta = "ABRIGOS TEMPORÁRIOS\n";
  pergunta += "-------------------------\n";
  pergunta += "Escolha uma opção:\n";
  pergunta += "1. Cadastrar abrigo\n";
  pergunta += "2. Listar abrigos\n";
  pergunta += "3. Procurar abrigo\n";
  pergunta += "4. Sair\n";
  pergunta += "5. editar\n";

  // Guardar resposta
  let resposta = Number(prompt(pergunta));

  // Identificar resposta e chamar função
  switch (resposta) {
    case 1:
      cadastrar();
      break;
    case 2:
      listar();
      break;
    case 3:
      buscar();
      break;
    case 4:
      sair();
      break;
    case 5:
      editar();
      break;
  }
}
