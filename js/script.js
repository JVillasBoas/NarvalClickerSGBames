// Autores: Jéssica Januário e Artur Costa

// Variáveis 

var upgrade = 1;
var narvs = 0;
var narvs_total = 0;
var total_clicks = 0;

var preco_camarao = 20;
var preco_lula = 125;
var preco_choco = 1700;

var auto_click = null;
var auto_click_nivel = 0;

var auto_click_s = null;
var auto_click_s_nivel = 0;

var upgrades_nivel = 0;
var upgrade_camarao = 0;
var upgrade_lula = 0;
var upgrade_choco = 0;

var igual = 0;
var igual2 = 0;
var igual3 = 0;
var camarao_clicks = 0;
var choco_clicks = 0;
var conquistas = 0;

var posicao_vetor = ["narval"];
var posicao = 1;

// Funções

// Setas para mudar as skins.
function seta_direita() {
    if (posicao_vetor.length != 0)
    posicao += 1;
    roupas();
}

function seta_esquerda() {
    if (posicao_vetor.length != 0)
    posicao -= 1;
    roupas();
}

// Vetor que recebe as skins obtidas e de acordo com a seta (direita += 1 e esquerda -= 1) recebe uma posição que define a skin.
// OBS: toda vez que a skin é mudada, é preciso estabeler o botao_narval novamente, com o id da skin atual
function roupas() {
    if (posicao > posicao_vetor.length - 1) {
        posicao = 0;
    }
    if (posicao < 0) {
        posicao = posicao_vetor.length - 1;
    }
    if (posicao_vetor[posicao] == "narval") {
        document.getElementById("narval-id").innerHTML = '<img id="narval" src="../img/narval.png" draggable="false"/>';
        botao_narval = document.getElementById("narval");
        botao_narval.addEventListener("click", click); 
        botao_narval.addEventListener("click", clicks_total);
    } else if (posicao_vetor[posicao] == "narval-roxo") {
        document.getElementById("narval-id").innerHTML = '<img id="narval-roxo" src="../img/narval-roxo.png" draggable="false"/>';
        botao_narval = document.getElementById("narval-roxo");
        botao_narval.addEventListener("click", click);
        botao_narval.addEventListener("click", clicks_total);
    } else if (posicao_vetor[posicao] == "narval-3d") {
        document.getElementById("narval-id").innerHTML = '<img id="narval-3d" src="../img/narval-3d.png" draggable="false"/>';
        botao_narval = document.getElementById("narval-3d");
        botao_narval.addEventListener("click", click);
        botao_narval.addEventListener("click", clicks_total);
    } else if (posicao_vetor[posicao] == "narval-prof") {
        document.getElementById("narval-id").innerHTML = '<img id="narval-prof" src="../img/narval-prof.png" draggable="false"/>';
        botao_narval = document.getElementById("narval-prof");
        botao_narval.addEventListener("click", click);
        botao_narval.addEventListener("click", clicks_total);
    }
}

// Após completar cada conquista o usuário recebe uma skin.
function conquistas_completas() {
    if (conquistas == 4) {
        alert("[Todas as conquistas foram desbloqueadas]");
        alert("Muito obrigada por jogar até aqui! <3\nass: Devs Jéssica e Artur")
        alert("[Narval Roxo desbloqueado]");
        document.getElementById("narval-id").innerHTML = '<img id="narval-roxo" src="../img/narval-roxo.png" draggable="false"/>';
        conquistas == 1;
        posicao_vetor.push("narval-roxo");
        botao_narval = document.getElementById("narval-roxo");
        botao_narval.addEventListener("click", click);
        botao_narval.addEventListener("click", clicks_total);
    }
}

// A conquista que libera a Geleira é completada quando o total de narvs arrecadados ao longo do jogo é superior ou igual a 50000.
function conquista_geleira() {
    if (narvs_total >= 50000 && igual3 == 0) {
        document.getElementById("geleira").innerHTML = '<img id="geleira-id" class="conquistas" src="../img/geleira_conquista-removebg-preview.png" alt=""></img>';
        alert("[Conquista desbloqueada, Você fez 50000 Narvs arrecadados!] \nClique na conquista para ver uma curiosidade.");
        botao_geleira = document.getElementById("geleira-id");
        botao_geleira.addEventListener("click", geleira);
        conquistas += 1;
        igual3 = 1;
        conquistas_completas();
    }
}

// Função chamada na função anterior para permitir que quando a imagem da conquista for clicada a curiosidade seja revelada. 
function geleira() {
    alert("O habitat dos narvais no inverno é o Polo Norte e no verão migram mais para o sul, no Canadá.");
}

// A conquista que libera o dente é completada quando os Narvs do momento é superior ou igual a 10000.
function conquista_dente() {
    if (narvs >= 10000 && igual == 0) {
        document.getElementById("dente").innerHTML = '<img id="dente-id" class="conquistas" src="../img/dente_conquista-removebg-preview.png" alt=""></img>';
        alert("[Conquista desbloqueada, Você fez 10000 Narvs!] \nClique na conquista para ver uma curiosidade.");
        botao_dente = document.getElementById("dente-id");
        botao_dente.addEventListener("click", dente);
        conquistas += 1;
        igual = 1;
        conquistas_completas();
    }
}


function dente() {
    alert("O chifre dos Narvais na verdade é um dente, que possui as seguintes utilidades: \n #Perfurar Lençois de gelo; \n #Ecolocalizador; \n  #Indicar os Status no grupo; \n #Identificar mudanças na temperatura e salinidade da água.");
}


// A conquista que libera o cálice é completada quando a quantidade de clicks que o usuário deu no narval é igual a 1000.
function conquista_calice() {
    if (total_clicks == 1000) {
        document.getElementById("calice").innerHTML = '<img id="calice-id" class="conquistas" src="../img/calice_conquista-removebg-preview.png" alt=""></img>';
        alert("[Conquista desbloqueada, Voce fez 1000 clicks!] \nClique na conquista para ver uma curiosidade.");
        botao_calice = document.getElementById("calice-id");
        botao_calice.addEventListener("click", calice);
        conquistas += 1;
        conquistas_completas();
    }
}


function calice() {
    alert("Décadas atrás, a rainha Elizabeth I ordenou a produção de um cálice composto por joias e o chifre de um narval pois acreditavam que seu chifre tinha a capacidade de neutralizar qualquer ação venenosa.");
}

// A conquista que libera a estrela é completada quando o usuário faz upgrade (em qualquer um dos upgrades) 60 vezes.
function conquista_estrela() {
    if (upgrades_nivel == 60 && igual2 == 0) {
        document.getElementById("estrela").innerHTML = '<img id="estrela-id" class="conquistas" src="../img/estrela_conquista-removebg-preview.png" alt=""></img>';
        alert("[Conquista desbloqueada, Você fez 60 upgrades!] \nClique na conquista para ver uma curiosidade.");
        botao_estrela = document.getElementById("estrela-id");
        botao_estrela.addEventListener("click", estrela);
        conquistas += 1;
        igual2 = 1;
        conquistas_completas();
    }
}


function estrela() {
    alert("A característica do chifre nos narvais é considerada masculina pelos cientistas, mas cerca de 15% das femêas possuem chifres também. Há registro de uma fêmea com dois chifres, algo raro até mesmo em machos.");
}

// Funções para os eastereggs 
function click_camarao_easteregg() {
    camarao_clicks += 1;
    easteregg_camarao();
}

function easteregg_camarao() {
    if (camarao_clicks == 17) {
        alert("[Olha só, você descobriu um easteregg!]")
        alert("[Narval 3D desbloqueado]")
        document.getElementById("narval-id").innerHTML = '<img id="narval-3d" src="../img/narval-3d.png" draggable="false"/>';
        botao_narval = document.getElementById("narval-3d");
        botao_narval.addEventListener("click", click);
        botao_narval.addEventListener("click", clicks_total);
        posicao_vetor.push("narval-3d");
    }
}

function click_choco_easteregg() {
    choco_clicks += 1;
    easteregg_choco();
}

function easteregg_choco() {
    if (choco_clicks == 10) {
        alert("[Olha só, você descobriu um easteregg]")
        alert("Muito obrigado(a) professora Raquel por todas as aulas incríveis e por todo esse carinho que você tem com a matéria de programação, sentiremos muita falta!\nass: Alunos 1C E 1C1")
        alert("[Narval Professora desbloqueado]")
        document.getElementById("narval-id").innerHTML = '<img id="narval-prof" src="../img/narval-prof.png" draggable="false"/>';
        posicao_vetor.push("narval-prof");
    }
}

// Cliques normal
function click() {
    narvs += upgrade;
    narvs_total += upgrade;
    conquista_geleira();
    conquista_dente();
    tela();
}

// Cliques por segundo
function click_s() {
    narvs += 1;
    narvs_total += 1;
    conquista_geleira();
    conquista_dente();
    tela();
}

// Todos os cliques normais
function clicks_total() {
    total_clicks += 1;
    conquista_calice();
    tela();
}

// Upgrades - verifica se é possível comprar e melhora o upgrade

// Upgrade do camarão, aumenta 1 no click
function upgrades()
{
    if (narvs >= preco_camarao) 
    {
        narvs -= preco_camarao;
        upgrade += 1;
        upgrade_camarao += 1;
        preco_camarao = Math.ceil(preco_camarao*1.15);
        tela();
    }
    conquista_estrela();
}

// Upgrade da lula, adiciona 15 Narvs, um de cada vez durante 1s, a cada nivel que você aumenta
function click_segundos() {
    if (narvs >= preco_lula)
    {
        narvs -= preco_lula;
        auto_click_s_nivel += 15;
        clearInterval(auto_click_s);
        auto_click_s = setInterval(click_s, 1000/auto_click_s_nivel);
        upgrade_lula += 1;
        preco_lula = Math.ceil(preco_lula*1.15);
        tela();
    }
    conquista_estrela();
}

// Upgrade do choco, adiciona 5 Auto cliques (ou seja, o quanto você estiver recebendo de Narvs por clique) por segundo a cada nivel que você aumenta
function upgrade_clicker() {
    if (narvs >= preco_choco)
    {
        narvs -= preco_choco;
        auto_click_nivel += 5;
        clearInterval(auto_click);
        auto_click = setInterval(click, 1000/auto_click_nivel);
        upgrade_choco += 1;
        preco_choco = Math.ceil(preco_choco*1.15);
        tela();
    }
    conquista_estrela();
}

// Chama todas as informações da interface
function tela()
{
    document.getElementById("pontuacao").innerHTML = narvs;
    document.querySelector(".preco-camarao").innerHTML = preco_camarao;
    document.querySelector('.preco-lula').innerHTML = preco_lula;
    document.querySelector('.preco-choco').innerHTML = preco_choco;
    document.getElementById("narvs-por-click").innerHTML = upgrade;
    document.getElementById("narvs-por-segundo").innerHTML = auto_click_s_nivel;
    document.getElementById("narvs-por-autoclick").innerHTML = auto_click_nivel;
    document.getElementById("total-de-clicks").innerHTML = total_clicks;
    document.getElementById("total-narvs").innerHTML = narvs_total;
    document.querySelector('.nivel-camarao').innerHTML = upgrade_camarao;
    document.querySelector('.nivel-lula').innerHTML = upgrade_lula;
    document.querySelector('.nivel-choco').innerHTML = upgrade_choco;
    upgrades_nivel = upgrade_camarao + upgrade_choco + upgrade_lula;
    document.getElementById("total-upgrade").innerHTML = upgrades_nivel;
}

// Chamando funções com o click

var botao_narval = document.getElementById("narval");
botao_narval.addEventListener("click", click);
botao_narval.addEventListener("click", clicks_total);

var botao_upgrade = document.querySelector(".botao-camarao");
botao_upgrade.addEventListener("click", upgrades);

var botao_autoclick = document.querySelector(".botao-lula");
botao_autoclick.addEventListener("click", click_segundos);

var botao_autoclick_s = document.querySelector(".botao-choco");
botao_autoclick_s.addEventListener("click", upgrade_clicker);

var botao_camarao = document.querySelector(".camarao-id");
botao_camarao.addEventListener("click", click_camarao_easteregg);

var botao_choco = document.querySelector(".choco-id");
botao_choco.addEventListener("click", click_choco_easteregg);

var botao_seta_direita = document.getElementById("seta-direita");
botao_seta_direita.addEventListener("click", seta_direita);

var botao_seta_esquerda = document.getElementById("seta-esquerda");
botao_seta_esquerda.addEventListener("click", seta_esquerda);