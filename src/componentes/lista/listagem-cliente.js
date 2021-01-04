import {deletaCliente, listarClientes} from '../../api/cliente.js';
import "../../assets/css/clientes.css";

const removeCliente = (id) => {
  if(confirm("Deseja deletar o cliente ?")){
    debugger;
    deletaCliente(id)
    window.location.reload()
  }
}
const criarBotaoExcuir = (id) =>{
  const botao = document.createElement('button');
  botao.classList.add('btn', 'btn-danger');
  botao.innerHTML= 'Excuir'
  botao.addEventListener('click',()=>{
    removeCliente(id)
  })
  return botao
}

const criarCorpoTabela = (tabela) => {
  const corpoTabela = document.createElement('tbody');

  const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    
    < type="button" class="btn btn-info" onClick="navegacao('/edita?id=${id}'); return false;">Editar</>
`
    linha.innerHTML = conteudoLinha;
    linha.appendChild(criarBotaoExcuir(id))
    return linha
  };

  listarClientes().then( exibe => {
    exibe.forEach(indice => {
      corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
   })

   tabela.appendChild(corpoTabela);

}

const inicializaTabela = () =>{
  
  
  const cabecalho = `
  <thead class= "thead-dark"> 
    <tr> 
      <th scope="col">CPF</th>
      <th scope="col">Nome</th>
      <th scope="col"></th>
      <th scope="col"><a class="btn btn-primary" onClick="navegacao('/cadastro'); return false;">Novo Cliente</a></th>
    </tr>
  </thead>
  `
  const tabela = document.createElement("table");
  tabela.innerHTML = cabecalho;
  tabela.classList.add("table");

  criarCorpoTabela(tabela);

  return tabela
}



export default inicializaTabela








  
 

 


  
  
 

