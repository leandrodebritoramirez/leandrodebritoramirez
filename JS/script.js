// função para codificar texto.
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let pesquisador = document.getElementById("pesquisador");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto codificado com exito.";
        paragrafo.textContent = "";
        pesquisador.src = "Assets/ideia.jpg";
    } else {
        pesquisador.src = "/Assets/pesquisador.jpg";
        tituloMensagem.textContent = "Nenhuma mensagem encotrada";
        paragrafo.textContent = "Digite um texto que você deseja encriptar ou desencriptar";
        swal("Mas que Barbaridade TCHÊ!!!","Tu tens que digitar o texto.","warning");
        }
    }     
// função para copiar texto do "texArea", para área de transferência. 
    function copiar() {
        let textArea = document.querySelector('.texto');
        textArea.select();
        document.execCommand('copy');
    }
// função para limpar texto do "textArea."
    function limpar() {
        let limpar = document.querySelector('.texto');
        limpar.value = '';
        pesquisador.src = "Assets/pesquisador.jpg";
    }
// função para decodificar texto.
    function desencriptar() {
        let texto = document.getElementById("texto").value;
        let tituloMensagem = document.getElementById("titulo-mensagem");
        let paragrafo = document.getElementById("paragrafo");
        let pesquisador = document.getElementById("pesquisador");

        let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
        if(texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensagem.textContent = "Texto decodificado com exito.";
            paragrafo.textContent = "";
            pesquisador.src = "Assets/ideia.jpg";            
        }else {
            pesquisador.src = "Assets/pesquisador.jpg";
            tituloMensagem.textContent = "Nenhuma mensagem encotrada";
            paragrafo.textContent = "Digite um texto que você deseja encriptar ou desencriptar";
            swal("Mas que Barbaridade TCHÊ!!!","Tu tens que digitar o texto.","warning");
            }
    }
