const form = document.getElementById('form-agenda');
const nomeContato = document.getElementById('nome-contato');
const telContato = document.getElementById('tel-contato');
const fotoContato = document.getElementById('foto-contato');
const totalContatos = document.getElementById('total-contatos');

const perfilDefault = '<img src="./Imagens/perfil-default.png" alt="imagem padrão para perfil">';

let nomes = []
let tel = []
let url = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTotalContatos();
});

// Resetando o número do telefone
function resetarNumeroTel(numeroTel) {
    if(numeroTel.length === 11) {
        return numeroTel.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (numeroTel.length === 10) {
        return numeroTel.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else {
        return numeroTel;
    }
}

// Adicionar linha na tabela
function adicionarLinha(){
    if(nomes.includes(nomeContato.value) || tel.includes(telContato.value)) {
        alert(`O nome ${nomeContato.value} ou telefone ${telContato.value} já foram inseridos na lista`)
    } else {
        const corpoTabela = document.querySelector('tbody');
        const numeroTelResetado = resetarNumeroTel(telContato.value)
        corpoTabela.innerHTML += `
            <tr>
                <td>${fotoContato.value ?
                    `<img src=${fotoContato.value} alt="Foto de perfil">` : perfilDefault}
                </td>
                <td>${nomeContato.value}</td>
                <td>${numeroTelResetado}</td>
            </tr>
        `
    nomes.push(nomeContato.value);
    tel.push(telContato.value);
    url.push(fotoContato.value);
    }

    nomeContato.value = '';
    telContato.value = '';
    fotoContato.value = '';
}

// somar total de contatos
function atualizarTotalContatos(){
    let somaTotalContatos = nomes.length;
    totalContatos.innerHTML = somaTotalContatos;
}

// Limpar Tabela
function limparTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';
    nomes.splice(0, nomes.length);
    tel.splice(0, tel.length);
    url.splice(0, tel.length);
    totalContatos.innerHTML = '';
}