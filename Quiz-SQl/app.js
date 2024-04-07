var option_mode = document.querySelectorAll("input[name='escolha']");
var option_form = document.querySelector(".initial");
var number= SelecionaID(30);
for (let i = 0; i < 3; i++) {
    option_mode[i].addEventListener("change", function () {
        // Escolhida a opção, esconde as possibilidades de escolha 
        if (option_mode) option_form.style.display = 'none';

        // Verifica se a opção escolhida foi aprender  
        if (option_mode[0].checked) {
        // Chama a função responsável por criar a div e os elementos  necessários 
            Aprender();
        }
        else if(option_mode[1].checked){
            // Chama função por criar a div do quiz pro usuario 
            Quiz();
        }
       
    })
}


function Aprender (){
    // Cria uma nova div e coloca uma classe 
    var option_aprender = document.createElement("div");
    option_aprender.classList.add("opt_aprender");
    option_aprender.innerHTML = `
        <h2>SELECT</h2>
        <p>Utilizado para recuperar dados de uma ou mais tabelas</p>
        <h3>Exemplo</h3>
        <p>SELECT coluna1, coluna2 FROM tabela;</p>
        <p class='exp'>No modo acima selecionamos apenas duas colunas, mas também podemos selecionar todas as colunas com o *</p>
        <p>SELECT * FROM tabela;</p>
        <h2>FROM</h2>
        <p>Especifica a tabela da qual os dados serão recuperados no comando SELECT.</p>
        <h3>Exemplo</h3>
        <p>SELECT * FROM tabela;</p>
        <h2>WHERE</h2>
        <p>Filtra os resultados com base em uma condição especificada.</p>
        <h3>Exemplo</h3>
        <p>SELECT coluna FROM tabela WHERE condição;</p>
        <h2>INSERT INTO</h2>
        <p>Utilizado para adicionar novas linhas de dados a uma tabela.</p>
        <h3>Exemplo</h3>
        <p>INSERT INTO tabela (coluna1, coluna2) VALUES (valor1, valor2);</p>
        <h2>UPDATE</h2>
        <p>Modifica os dados existentes em uma tabela.</p>
        <h3>Exemplo</h3>
        <p>UPDATE tabela SET coluna = novo_valor WHERE condição;</p>
        <h2>DELETE</h2>
        <p>Remove linhas de uma tabela com base em uma condição.</p>
        <h3>Exemplo</h3>
        <p>DELETE FROM tabela WHERE condição;</p>
        <h2>CREATE TABLE</h2>
        <p>Cria uma nova tabela com as colunas especificadas.</p>
        <h3>Exemplo</h3>
        <p>CREATE TABLE tabela (coluna1 tipo1, coluna2 tipo2);</p>
        <h2>ALTER TABLE</h2>
        <p>Modifica a estrutura de uma tabela existente (adiciona, remove ou modifica colunas).</p>
        <h3>Exemplo</h3>
        <p>ALTER TABLE tabela ADD coluna tipo;</p>
        <h2>DROP TABLE</h2>
        <p>Remove uma tabela e todos os seus dados permanentemente.</p>
        <h3>Exemplo</h3>
        <p>DROP TABLE tabela;</p>
        <h2>JOIN</h2>
        <p>Combina linhas de duas ou mais tabelas com base em uma condição relacionada.</p>
        <h3>Exemplo</h3>
        <p>SELECT * FROM tabela1 INNER JOIN tabela2 ON tabela1.coluna = tabela2.coluna;</p>
        <h2>ORDER BY</h2>
        <p>Ordena os resultados com base em uma ou mais colunas.</p>
        <h3>Exemplo</h3>
        <p>SELECT coluna FROM tabela ORDER BY coluna DESC;</p>
        <h2>DISTINCT</h2>
        <p>Retorna valores distintos em uma coluna.</p>
        <h3>Exemplo</h3>
        <p>SELECT DISTINCT coluna FROM tabela;</p>
        <h2>HAVING</h2>
        <p>Funciona como o WHERE, mas é usado com GROUP BY para filtrar resultados de grupos.</p>
        <h3>Exemplo</h3>
        <p>SELECT coluna, COUNT(*) FROM tabela GROUP BY coluna HAVING COUNT(*) > 1;</p>
        <h2>AS</h2>
        <p>Renomeia colunas ou tabelas temporariamente.</p>
        <h3>Exemplo</h3>
        <p>SELECT coluna1 AS novo_nome FROM tabela;</p>
        <h2>LIKE</h2>
        <p>Utilizado para realizar buscas com base em padrões em uma coluna.</p>
        <h3>Exemplo</h3>
        <p>SELECT coluna FROM tabela WHERE coluna LIKE 'prefixo%';</p>
        <h2> IN</h2>
        <p>Utilizado para comparar valores com uma lista de valores ou de uma subconsulta, retornando verdadeiro se o valor especificado estiver lá <p>
        <h3> Exemplo </h3>
        <p>
        SELECT column1, column2, ...
        FROM table_name
        WHERE column_name IN (value1, value2, ...); 
        </p>
        <h2> COALESCE</h2>
        <p> Serve para substituir valores que anteriormente eram null para algum outro valor de sua escolha </p>
        <h3>Exemplo</h3>
        <p>SELECT nome, qtd, COALESCE(preco, 0) as preco FROM frutas</p>
        <h2>EXISTS</h2>
        <p> É usado para  verificar a existência de registros em uma subconsulta </p>
        <h3>Exemplo</h3>
        <p>
        SELECT column1, column2, ...
        FROM table_name
        WHERE EXISTS (subquery);
        </p>

        <h2>INNER JOIN </h2>
        <p>A junção interna retorna apensas os registros que têm correspondência em ambas as tabelas envolvidas, sendo similar a uma intrerção de dois ou mais conjuntos </p>
        <h3> Exemplo</h3>
        <p>
        SELECT *
        FROM Tabela1
        INNER JOIN Tabela2 ON Tabela1.ID = Tabela2.ID;
        </p>
        <h2>LEFT JOIN </h2>
        <p> Diferente do Inner Join, o Left Join retorna todos os registros da tabela a esquerda </p>
        <h3>Exemplo</h3>
        <p>
        SELECT *
        FROM Tabela1
        LEFT JOIN Tabela2 ON Tabela1.ID = Tabela2.ID;
        </p>
        <h2>RIGHT JOIN</h2>
        <p>Retorna todos os registros da tabela a direita </p>
        <h3>Exemplo</h3>
        <p>
        SELECT *
        FROM Tabela1
        RIGHT JOIN Tabela2 ON Tabela1.ID = Tabela2.ID;
        </p>
        <h2>CROSS JOIN</h2>
        <p>O Cross Join funciona como o plano cartesiano da Algebra relacional, isto é, traz todas as possibilidades, por exemplo  A com A , B com A e A com B</p>
        <h3>Exemplo</h3>
        <p>SELECT f.*, c.* FROM frutas f
        CROSS JOIN compras c</p>
    `;

    document.querySelector(".Container").appendChild(option_aprender);
}

// Função para criar uma ordem aleatoria de apresentação do Quiz 
function SelecionaID(qtdNum){
    var numerosAleatorios=[];
    while (numerosAleatorios.length != qtdNum){
        let NewNumber= Math.floor(Math.random()*qtdNum)+1
        // Verifica se o número já existe no vetor 
        if (!numerosAleatorios.includes(NewNumber)) 
            numerosAleatorios.push(NewNumber)
    }
    return numerosAleatorios;
}
function AlocaPerguntas(perguntas, option_quiz, number) {
    var control= 0;
    var btn = document.createElement("button");
    btn.id = "btnQuiz";
    btn.innerHTML = "&gt;";
    var titulo = document.createElement("h2");
    var option1 = document.createElement("input");
    option1.type = 'radio';
    option1.id = 'option1';
    option1.name='opcoes';
    var option2 = document.createElement("input");
    option2.type = 'radio';
    option2.id = 'option2';
    option2.name='opcoes';
    var option3 = document.createElement("input");
    option3.type = 'radio';
    option3.id = 'option3';
    option3.name='opcoes';
    var option4 = document.createElement("input");
    option4.type = 'radio';
    option4.id = 'option4';
    option4.name='opcoes';
    var label1 = document.createElement("label");
    label1.htmlFor = 'option1';
    label1.classList.add("option_perguntas");
    var label2 = document.createElement("label");
    label2.htmlFor = 'option2';
    label2.classList.add("option_perguntas");
    var label3 = document.createElement("label");
    label3.htmlFor = 'option3';
    label3.classList.add("option_perguntas");
    var label4 = document.createElement("label");
    label4.htmlFor = 'option4';
    label4.classList.add("option_perguntas");

    for (let i = 0; i < 30; i++) {
        if (perguntas[i].id === number[0]) {
            titulo.innerHTML = perguntas[i].perguntas;
            
            option1.value = perguntas[i].option1;
            option2.value = perguntas[i].option2;
            option3.value = perguntas[i].option3;
            option4.value = perguntas[i].option4;

            label1.innerHTML = perguntas[i].option1;
            label2.innerHTML = perguntas[i].option2;
            label3.innerHTML = perguntas[i].option3;
            label4.innerHTML = perguntas[i].option4;

            option_quiz.appendChild(titulo);
            option_quiz.appendChild(option1);
            option_quiz.appendChild(label1);
            option_quiz.appendChild(option2);
            option_quiz.appendChild(label2);
            option_quiz.appendChild(option3);
            option_quiz.appendChild(label3);
            option_quiz.appendChild(option4);
            option_quiz.appendChild(label4);
        }
    }
    option_quiz.appendChild(btn);
    btn.addEventListener("click", function () {
        
       for (let j= 0; j < 30; j++){
       if ( control < number.length &&perguntas[j].id === number[control]) {
            titulo.innerHTML = perguntas[j].perguntas;
            option1.value = perguntas[j].option1;
            option2.value = perguntas[j].option2;
            option3.value = perguntas[j].option3;
            option4.value = perguntas[j].option4;

            label1.innerHTML = perguntas[j].option1;
            label2.innerHTML = perguntas[j].option2;
            label3.innerHTML = perguntas[j].option3;
            label4.innerHTML = perguntas[j].option4;
            label1.style.backgroundColor='DDDDD'
            label2.style.backgroundColor='DDDDD'
            label3.style.backgroundColor='DDDDD'
            label4.style.backgroundColor='DDDDD'

           option_quiz.appendChild(titulo);
           option_quiz.appendChild(option1);
           option_quiz.appendChild(label1);
           option_quiz.appendChild(option2);
           option_quiz.appendChild(label2);
           option_quiz.appendChild(option3);
           option_quiz.appendChild(label3);
           option_quiz.appendChild(option4);
           option_quiz.appendChild(label4);
           option_quiz.appendChild(btn);
           
          
           
       }
   }
   control++;
   });
    option_quiz.addEventListener("change", function(event) {
        if((event.target.type==='radio')&&(event.target.name==='opcoes'))
   
        var currentcontrol= number[control]
        var verify = [
        { id: 1, resposta: "SELECT * FROM clientes;" },
        { id: 2, resposta: "Inserir novas linhas em uma tabela" },
        { id: 3, resposta: "Filtra os resultados com base em uma condição específica." },
        { id: 4, resposta: "Ordena os resultados em ordem alfabética." },
        { id: 5, resposta: "UPDATE" },
        { id: 6, resposta: " Agrupa os resultados com base em uma condição específica" },
        { id: 7, resposta: "Uma coluna que armazena valores únicos para cada registro" },
        { id: 8, resposta: "INNER JOIN retorna apenas as linhas com correspondência, enquanto LEFT JOIN retorna todas as linhas." },
        { id: 9, resposta: "ORDER BY column_name DESC" },
        { id: 10, resposta: "ALTER TABLE ADD COLUMN" },
        { id: 11, resposta: "DROP TABLE" },
        { id: 12, resposta: " Selecionar valores dentro de um intervalo específico." },
        { id: 13, resposta: "ROLLBACK" },
        { id: 14, resposta: "SELECT TOP 10" },
        { id: 15, resposta: "Conta o número total de registros em uma tabela" },
        { id: 16, resposta: "INNER JOIN retorna apenas as linhas com correspondência, enquanto CROSS JOIN retorna todas as combinações possíveis" },
        { id: 17, resposta: "-- Comentário" },
        { id: 18, resposta: "Confirma as alterações feitas em uma transação" },
        { id: 19, resposta: "Realizar comparações de padrões em strings." },
        { id: 20, resposta: "SELECT FROM clientes INNER JOIN pedidos;" },
        { id: 21, resposta: "ORDER BY column_name ASC" },
        { id: 22, resposta: "Uma coluna que estabelece uma relação entre duas tabelas." },
        { id: 23, resposta: "Realizar uma junção entre todas as linhas de duas tabelas." },
        { id: 24, resposta: "Remove automaticamente todas as linhas relacionadas quando a linha principal é excluída." },
        { id: 25, resposta: "Retorna valores diferentes da tabela" },
        { id: 26, resposta: "SELECT * FROM tabela1 RIGHT JOIN tabela2 ON tabela1.id = tabela2.id;" },
        { id: 27, resposta: "Verifica se uma subconsulta retorna algum resultado." },
        { id: 28, resposta: "SELECT * FROM tabela WHERE coluna IN (valor1, valor2, valor3);" },
        { id: 29, resposta: "SELECT coluna AS novo_nome FROM tabela;" },
        { id: 30, resposta: "EXISTS verifica a existência de registros em uma subconsulta, enquanto IN verifica a existência de valores em uma lista." },
        { id: 31, resposta: "SELECT * FROM tabela AS alias;" },
    ];
       for (let i = 0; i<verify.length;i++) {
            if((verify[i].id=== currentcontrol) && (verify[i].resposta=== event.target.value)){
                //alert("acertou Mizeravi")
                if(option1.checked)
                    label1.style.backgroundColor="green"
               else if(option2.checked)
                    label2.style.backgroundColor="green"
               else if(option3.checked)
                    label3.style.backgroundColor="green" 
                else
                    label4.style.backgroundColor="green"
            }
            else if ((verify[i].id=== currentcontrol) && (verify[i].resposta!= event.target.value)){
                if(option1.checked)
                        label1.style.backgroundColor="red"
                else if(option2.checked)
                        label2.style.backgroundColor="red"
                else if(option3.checked)
                        label3.style.backgroundColor="red" 
                else if (option4.checked)
                        label4.style.backgroundColor="red"
                    
                 /* if(label1.innerHTML === event.target.value) label1.style.backgroundColor="green"
                   else if(label2.innerHTML === event.target.value) label2.style.backgroundColor="green"
                   else if(label3.innerHTML === event.target.value) label3.style.backgroundColor="green"
                   else if(label4.innerHTML === event.target.value) label4.style.backgroundColor="green"*/
                
            }
            
               
            
       }
     
});
    

}


function Quiz (){
var option_quiz= document.createElement("div");
option_quiz.classList.add("option_quiz");
var perguntas = 
[
{
    id: 1,
    perguntas: "Como você seleciona todas as colunas de uma tabela chamada 'clientes'?",
    option1: "SELECT * FROM clientes;",
    option2: "SELECT columns FROM clientes;",
    option3: "SELECT all FROM clientes;",
    option4: "SELECT nome, endereco, telefone FROM clientes;"
},

{   
    id: 2, 
    perguntas: "Qual é a função do Comando 'INSERT'" , 
    option1: "Atualizar dados existentes.", 
    option2:"Inserir novas linhas em uma tabela", 
    option3:"Excluir dados de uma tabela", 
    option4:"Selecionar ddados de uma tabela"
},

{   
    id: 3, 
    perguntas: "O que significa a cláusula WHERE em uma instrução SQL?" , 
    option1: "Define as colunas a serem selecionadas", 
    option2:"Filtra os resultados com base em uma condição específica.", 
    option3:"Ordena os resultados em ordem alfabética.", 
    option4:"Agrupa os resultados por uma coluna específica."
},
{
    id: 4, 
    perguntas: "Qual é a função do comando 'ORDER BY'?" , 
    option1: "Define as colunas a serem selecionadas", 
    option2:"Filtra os resultados com base em uma condição específica.", 
    option3:"Ordena os resultados em ordem alfabética.", 
    option4:"Agrupa os resultados por uma coluna específica."
    
},
{
    id: 5, 
    perguntas: "Qual comando é usado para atualizar dados em uma tabela?" , 
    option1: "MODIFY", 
    option2:"UPDATE", 
    option3:"CHANGE", 
    option4:"ALTER"
},
{
    id: 6, 
    perguntas: "O que faz a cláusula GROUP BY em SQL?" , 
    option1: " Agrupa os resultados com base em uma condição específica", 
    option2:"Ordena os resultados em ordem decrescente.", 
    option3:"Filtra os resultados com base em uma condição específica.", 
    option4:"Seleciona colunas específicas para exibição."
},
{
    id: 7, 
    perguntas: "O que é uma chave primária em uma tabela SQL?" , 
    option1: "Uma coluna que armazena valores únicos para cada registro", 
    option2:"Uma coluna que permite valores nulos.", 
    option3:"Uma coluna que armazena valores duplicados.", 
    option4:"Uma coluna que armazena valores de data e hora"
},
{
    id: 8, 
    perguntas: "Qual é a diferença entre INNER JOIN e LEFT JOIN?" , 
    option1: "INNER JOIN retorna apenas as linhas sem correspondência, enquanto LEFT JOIN retorna todas as linhas.", 
    option2:`INNER JOIN retorna apenas as linhas com correspondência, enquanto LEFT JOIN retorna todas as linhas.`, 
    option3:"INNER JOIN e LEFT JOIN são sinônimos", 
    option4:"LEFT JOIN retorna apenas as linhas sem correspondência, enquanto INNER JOIN retorna todas as linhas."
},

{
    id: 9, 
    perguntas: "Como você ordena os resultados em ordem decrescente usando a cláusula ORDER BY?" , 
    option1: "ORDER BY DESC", 
    option2:"ORDER DESC", 
    option3:"DESC ORDER BY", 
    option4:"ORDER BY column_name DESC"
},

{
    id: 10,
    perguntas: "Como você adiciona uma nova coluna a uma tabela existente em SQL?" ,
    option1: " ADD COLUMN",
    option2:"ALTER TABLE ADD COLUMN",
    option3:"INSERT COLUMN",
    option4:" MODIFY COLUMN"
},

{
    id: 11,
    perguntas: "Qual comando é usado para excluir uma tabela em SQL?" ,
    option1: "REMOVE TABLE",
    option2:"DROP TABLE",
    option3:"DELETE TABLE",
    option4:"ERASE TABLE"
},

{
    id: 12,
    perguntas: "Qual é a finalidade da cláusula BETWEEN em uma consulta SQL?" ,
    option1: "Filtrar resultados com base em uma condição específica.",
    option2:"Selecionar apenas valores únicos.",
    option3:" Selecionar valores dentro de um intervalo específico.",
    option4:"Agrupar resultados com base em uma condição específica."
},

{
    id: 13,
    perguntas: "Qual comando é usado para desfazer as alterações não confirmadas em uma transação?" ,
    option1: "ROLLBACK",
    option2:"UNDO",
    option3:"CANCEL",
    option4:"REVERT"
},

{
    id: 14,
    perguntas: "Como você seleciona os primeiros 10 registros de uma tabela em SQL?" ,
    option1: "SELECT TOP 10",
    option2:"SELECT LIMIT 10",
    option3:" SELECT FIRST 10",
    option4:"SELECT *FROM tabela LIMIT 10"
},

{
    id: 15,
    perguntas: "O que faz a função COUNT() em SQL?" ,
    option1: "Conta o número total de registros em uma tabela",
    option2:"Calcula a média de uma coluna.",
    option3:"Retorna a soma dos valores em uma coluna",
    option4:"Filtra os resultados com base em uma condição específica"
},

{
    id: 16,
    perguntas: "Qual é a diferença entre INNER JOIN e CROSS JOIN?" ,
    option1: "INNER JOIN retorna apenas as linhas com correspondência, enquanto CROSS JOIN retorna todas as combinações possíveis",
    option2:"INNER JOIN e CROSS JOIN são sinônimos",
    option3:"INNER JOIN retorna apenas as linhas sem correspondência, enquanto CROSS JOIN retorna todas as linhas.",
    option4:"INNER JOIN retorna apenas as linhas sem correspondência, enquanto CROSS JOIN retorna apenas as linhas com correspondência."
},

{
    id: 17,
    perguntas: "Como você adiciona um comentário em uma instrução SQL?" ,
    option1: "/* Comentário */",
    option2:"-- Comentário",
    option3:"// Comentário",
    option4:"COMENTÁRIO: Comentário"
},
{
    id: 18,
    perguntas: "Qual é a função do comando COMMIT em SQL?" ,
    option1: "Desfaz as alterações não confirmadas em uma transação.",
    option2:"Confirma as alterações feitas em uma transação",
    option3:"Remove uma tabela do banco de dados.",
    option4:"Exclui todas as linhas de uma tabela"
},

{
    id: 19,
    perguntas: "Qual é a função da cláusula LIKE em SQL?" ,
    option1:"Selecionar apenas valores distintos de uma coluna",
    option2:"Filtrar resultados com base em uma condição específica.",
    option3:"Agrupar resultados com base em uma condição específica",
    option4:"Realizar comparações de padrões em strings."
},

{
    id: 20,
    perguntas: "Como você realiza uma junção interna (INNER JOIN) entre duas tabelas chamadas 'clientes' e 'pedidos ?'" ,
    option1: "JOIN clientes, pedidos ON clientes.id = pedidos.cliente_id;",
    option2:"INNER JOIN clientes ON pedidos.cliente_id = clientes.id;",
    option3:"SELECT FROM clientes INNER JOIN pedidos;",
    option4:" INNER JOIN pedidos, clientes ON clientes.id = pedidos.cliente_id;"
},

{
    id: 21,
    perguntas: "Como você ordena os resultados em ordem crescente usando a cláusula ORDER BY?" ,
    option1: "ORDER ASC",
    option2:" ORDER BY column_name",
    option3:"ASC ORDER BY",
    option4:"ORDER BY column_name ASC"
},

{
    id: 22,
    perguntas: "O que é uma chave estrangeira (foreign key) em SQL?" ,
    option1: "Uma coluna que armazena valores duplicados.",
    option2:"Uma coluna que armazena valores únicos para cada registro.",
    option3:"Uma coluna que estabelece uma relação entre duas tabelas.",
    option4:" Uma coluna que armazena apenas valores numéricos."
},

{
    id: 23,
    perguntas: " O que é o comando INNER JOIN em SQL utilizado para fazer?" ,
    option1: "Filtrar resultados com base em uma condição específica.",
    option2:"Realizar uma junção entre todas as linhas de duas tabelas.",
    option3:"Selecionar apenas valores distintos de uma coluna",
    option4:"Executar uma subconsulta em uma tabela."
},

{
    id: 24,
    perguntas: "O que é a cláusula CASCADE em uma restrição de chave estrangeira (FOREIGN KEY)?" ,
    option1: "Atualiza automaticamente os valores da chave estrangeira quando os valores da chave primária são alterados.",
    option2:"Remove automaticamente todas as linhas relacionadas quando a linha principal é excluída.",
    option3:"Adiciona automaticamente novas linhas à tabela relacionada.",
    option4:"Ignora automaticamente as restrições de chave estrangeira."
},
{
    id: 25,
    perguntas: "Para que serve o comando DISTINCT " ,
    option1: "Retorna valores diferentes da tabela",
    option2:"Retorna valores iguais da tabela",
    option3:"Retorna os maiores valores da tabela",
    option4:"Retorna os menores valores da tabela"
},

{
    id: 26,
    perguntas: "Como você utiliza o comando RIGHT JOIN em SQL para unir duas tabelas?" ,
    option1: "SELECT * FROM tabela1 LEFT JOIN tabela2 ON tabela1.id = tabela2.id;",
    option2:"SELECT * FROM tabela1 RIGHT JOIN tabela2 ON tabela1.id = tabela2.id;",
    option3:"SELECT * FROM tabela1 JOIN tabela2 ON tabela1.id = tabela2.id;",
    option4:" SELECT * FROM tabela1 RIGHT OUTER JOIN tabela2 ON tabela1.id = tabela2.id;"
},

{
    id: 27,
    perguntas: "O que significa a cláusula EXISTS em uma consulta SQL?" ,
    option1: " Retorna valores nulos quando não há correspondência",
    option2:" Verifica se a tabela está vazia.",
    option3:"Verifica se uma subconsulta retorna algum resultado.",
    option4:"Retorna verdadeiro se todos os valores existirem na tabela."
},

{
    id: 28,
    perguntas: "Como você utiliza a cláusula IN em SQL para filtrar resultados?" ,
    option1: "SELECT * FROM tabela WHERE coluna IN (valor1, valor2, valor3);",
    option2:"SELECT * FROM tabela IN (coluna, valor1, valor2, valor3);",
    option3:" SELECT * FROM tabela IF IN coluna (valor1, valor2, valor3);",
    option4:"SELECT * FROM tabela AND coluna IN (valor1, valor2, valor3);"
},
{
    id: 29,
    perguntas: "Como você utiliza a cláusula AS em SQL para renomear uma coluna em uma consulta?",
    option1: "SELECT coluna AS novo_nome FROM tabela;",
    option2: "SELECT coluna RENAME novo_nome FROM tabela;",
    option3: "SELECT coluna TO novo_nome FROM tabela;",
    option4: "SELECT coluna NAME AS novo_nome FROM tabela;"
},

{
    id: 30,
    perguntas: "Qual é a diferença entre EXISTS e IN em SQL?",
    option1: "EXISTS verifica a existência de registros em uma subconsulta, enquanto IN verifica a existência de valores em uma lista.",
    option2: "EXISTS e IN são sinônimos.",
    option3: "EXISTS verifica a existência de valores em uma lista, enquanto IN verifica a existência de registros em uma subconsulta.",
    option4: "EXISTS verifica a existência de valores em uma coluna específica, enquanto IN verifica a existência de registros em uma tabela."
},

{
    id: 31,
    perguntas: "Como você utiliza a cláusula AS em SQL para dar um alias a uma tabela em uma consulta?",
    option1: "SELECT * FROM tabela AS alias;",
    option2: "SELECT * AS alias FROM tabela;",
    option3: "SELECT tabela AS alias FROM *;",
    option4: "SELECT tabela FROM * AS alias;"
},

];

 AlocaPerguntas(perguntas, option_quiz, number)
document.querySelector(".Container").appendChild(option_quiz);
 
} 
 /*function Desafio(){
 var Questions= [
    {
        question: 'Dado que o  código 1 diz  que a pesssoa é funcionario, busque na tabela de pessoas todas as pessoas que não sejam funcionárias', url:''
    },
    {
        question: 'Obtenha o nome e a data de nascimento de todos os registros ordenados pelo nome:', url:''
    },
    {
        question: 'Conte o número total de registros na tabela:', url:''
    },
    {
        question: 'Obtenha os registros onde o campo "endereco" é nulo:', url:''
    },
    {
        question: 'Atualize o endereço para "Cidade Nova" para todos os registros onde o endereço é nulo:', url:''
    },
    {
        question: 'SELECT nome, telefone FROM tabela_nome WHERE telefone IS NOT NULL;', url:''
    },
    {
        question: 'Encontre o título do livro, o nome do autor e a quantidade em estoque para todos os livros com mais de 10 cópias em estoque:', url:''
    },
    {
        question: 'Obtenha o nome do autor e o título do livro para todos os livros, juntamente com o número de cópias vendidas', url:''
    }    

 ]
 AlocaQuestionsDesafio(Questions);
}
*/
/*
function AlocaQuestionsDesafio(Questions){

 var questoes= document.createElement("p");
 var links=document.createElement('a');
 var buttonDesafio= document.createElement('button')
 buttonDesafio.textContent="Next question"
 buttonDesafio.classList.add('btn');
 for (var i = 0 ; i < Questions.length ; i++){
    questoes.innerHTML=Questions[i].question;
    links.innerHTML=Questions[i].url;
 }
 var DesafioDiv= document.createElement('div')
 DesafioDiv.classList.add("DesafioDiv")
 var button = document.createElement('button');
 button.classList.add('download')
 var link_down = document.createElement('a')
 link_down.classList.add('link_down')
 link_down.textContent='Download BD'
 link_down.href='/Sql.zip'
 button.appendChild(link_down)
 DesafioDiv.appendChild(questoes);
 DesafioDiv.appendChild(links);
 DesafioDiv.appendChild(button)
 DesafioDiv.appendChild(buttonDesafio)
 document.querySelector(".Container").appendChild(DesafioDiv);
 var i=1
 buttonDesafio.addEventListener('click', function(){
    while(i< Questions.length){
        questoes.innerHTML=Questions[i].question;
        links.innerHTML=Questions[i].url;
        i++;
        if(i==Questions.length) i=0;
        break;
    }
 })
}
*/