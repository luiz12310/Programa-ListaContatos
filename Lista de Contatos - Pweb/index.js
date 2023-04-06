const Console = require('console-read-write');

const opcoes = ["Listar", "Cadastrar" ,"Editar" ,"Excluir" ,"Sair"];
const opcaoSair = ["Ficar", "Sair"];
const numeros = [];
const nomes = [];

let numero = 0;
let i = 0;

async function main()
{
    while(i == 0)
    {
        for(let indice = 0; indice < opcoes.length; indice++)
        {
            Console.write( (indice+1).toString() + ' - ' + opcoes[indice] );
        };
        
        Console.write('-------------------------------------------------------------');

        Console.write("Digite sua opção: ");
        numero = await (Console.read())
        numero = numero.toString().toLowerCase();    

        if(numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5 || numero == "listar" || numero == "cadastrar" || numero == "editar" || numero == "excluir" || numero == "sair")
        {
            if(numero == 1 || numero.toString().toLocaleLowerCase() == "listar")
            {
                if(numeros == "")
                {
                    Console.write('Ainda não há contatos');
                    Console.write('-------------------------------------------------------------');
                    numero = 0;
                }
                else
                {
                    Console.write('Sua lista');
                    Console.write('-------------------------------------------------------------');

                    for(let indice = 0; indice < nomes.length; indice++)
                    {
                        Console.write((indice+1) + 'º Contato - ' + nomes[indice] + ' - ' + numeros[indice]);
                    };

                    numero = 0;
                    Console.write('-------------------------------------------------------------');
                };
            };

            if(numero == 2 || numero.toString().toLocaleLowerCase() == "cadastrar")
            {
                Console.write('Digite um nome para o contato: ');
                let NomeContato = await Console.read();

                while(NomeContato == "" || NomeContato == null)
                {
                    Console.write('O contato precisa ter um nome');
                }

                Console.write('Digite um número para o contato: ');
                let NumeroContato = await Console.read();

                while(NumeroContato == "" || NumeroContato == null)
                {
                    Console.write('O número do contato não pode estar em branco');
                }

                numero = 0;

                nomes.push(NomeContato);
                numeros.push(NumeroContato);
                Console.write('Número cadastrado com sucesso');
                Console.write('-------------------------------------------------------------');
            };

            if(numero == 3 || numero.toString().toLocaleLowerCase() == "editar")
            {
                Console.write('-------------------------------------------------------------');
                Console.write('Sua lista');

                for(let indice = 0; indice < nomes.length; indice++)
                {
                    Console.write((indice+1) + ' Contato - ' + nomes[indice] + ' - ' + numeros[indice]);
                };

                Console.write('-------------------------------------------------------------');
                
                if(numeros == "" && nomes == "")
                {
                    Console.write('Ainda não há contatos');
                    Console.write('-------------------------------------------------------------');
                }
                else
                {
                    Console.write('Qual contato você deseja editar?');
                    let NomeEdicao = await Console.read();                    
        
                    for(let i = 0; i < nomes.length; i++)
                    {
                        while(NomeEdicao < i || NomeEdicao > i || isNaN(NomeEdicao))
                        {
                            Console.write("Coloque um número entre esse período (entre 1 e " + nomes.length + ")" );
                            NomeEdicao = Number(await Console.read());
                        }

                        if(NomeEdicao == nomes[i])
                        {
                            Console.write('Digite um novo nome para o contato: ');
                            nomes[i] = await Console.read();

                            Console.write('Digite um novo número para o contato: ');
                            numeros[i] = await Console.read();
                                
                            Console.write('Número editado com sucesso');
                            Console.write('-------------------------------------------------------------');
                        };
                    };
                };
            };

            if(numero == 4 || numero.toString().toLocaleLowerCase() == "excluir")
            {
                Console.write('-------------------------------------------------------------');
                Console.write('Sua lista');

                for(let indice = 0; indice < nomes.length; indice++)
                {
                    Console.write((indice+1) + ' Contato - ' + nomes[indice] + ' - ' + numeros[indice]);
                };

                Console.write('-------------------------------------------------------------');

                if(numeros == "")
                {
                    Console.write('Ainda não há contatos');
                    Console.write('-------------------------------------------------------------');
                }
                else
                {
                    Console.write('Qual posição da agenda de contatos você deseja excluir?');
                    Posicao = await Console.read();
                    
                    for(let i = 0; i < nomes.length; i++)
                    {
                        while(Posicao < i || Posicao > i || isNaN(Posicao))
                        {
                            Console.write("Coloque um número entre esse período (entre 1 e " + nomes.length + ")" );
                            Posicao = Number(await Console.read());
                        }

                        nomes.splice(Posicao, 1);
                        numeros.splice(Posicao, 1);
                        Console.write('Contato removido com sucesso');
                        Console.write('-------------------------------------------------------------');
                    };                               
                };
            };

            if(numero == 5 || numero.toString().toLocaleLowerCase() == "sair")
            {
                Console.write('-------------------------------------------------------------');
                Console.write('Você tem certeza que quer sair?');
                Console.write('-------------------------------------------------------------');

                for(let indice = 0; indice < opcaoSair.length; indice++)
                {
                    Console.write( (indice+1).toString() + ' - ' + opcaoSair[indice] );
                };

                let sair = await Console.read();

                while(sair != 1 && sair != 2)
                {
                    Console.write("digite '1' para ficar ou '2' para sair");
                    sair = await Console.read();
                };

                if(sair == 2)
                {
                    Console.write('-------------------------------------------------------------');
                    Console.write('Fechando contatos');
                    Console.write('-------------------------------------------------------------');
                    i++;                    
                };
            };
        }
        else
        {
            Console.write("digite '1', '2', '3', '4' ou '5'");
            Console.write('-------------------------------------------------------------');
        };
    };
};

main();