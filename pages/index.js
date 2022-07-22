import styles from '../styles/Home.module.css'
import Layout from './components/Layout';

export default function Home() {

  let users = [{name:"Lucas", cpf:"123.456.789-12", email:"lucas@gmail.com", password:"123456789"}];
  
  function handleCadastro() {
    document.getElementsByTagName('div')[3].style.display="block";
    getUsers()
  }

  function handleClose() {
    document.getElementsByTagName('div')[3].style.display="none";
    document.getElementsByTagName('input')[0].value="";
    document.getElementsByTagName('input')[1].value="";
    document.getElementsByTagName('input')[2].value="";
    document.getElementsByTagName('input')[3].value="";
  }

  function handleCriar() {
    let userName = document.getElementsByTagName('input')[0].value;
    let userCpf = document.getElementsByTagName('input')[1].value;
    let userEmail = document.getElementsByTagName('input')[2].value;
    let userPassword = document.getElementsByTagName('input')[3].value;

    let userNameExist = users.filter(e => e.name == userName);

    if (userName == "") {
      alert("Defina um nome de usuário válido");
      return;
    };

    if (userNameExist.length >= 1) {
      alert("Nome de usuário indisponível");
    } else {
      users.push({name: userName, cpf: userCpf, email: userEmail,password: userPassword});
      handleClose()
    }
    document.getElementsByTagName('input')[0].value = "";
    setUsers()
  }

  function handleEntrar() {
    let userName = document.getElementsByTagName('input')[0].value;

    let userNameExist = users.filter(e => e.name == userName);

    if ((users.filter(e => e.name == userName).length) == 1) {
      if (userNameExist[0].cpf != document.getElementsByTagName('input')[1].value) {
        alert('CPF incorreto')
      } else if (userNameExist[0].email != document.getElementsByTagName('input')[2].value) {
        alert('E-mail incorreto')
      } else if (userNameExist[0].password != document.getElementsByTagName('input')[3].value) {
        alert('Senha incorreta')
      } else {
        alert("Conta acessada");
        handleClose()
      }
    }    
  }

  function setUsers() {
    localStorage.setItem("users", JSON.stringify(users));
  }

  function getUsers() {
    let storedUsers = JSON.parse(localStorage.getItem("users"))
    if (storedUsers) {users = storedUsers};
  }
  
  return (
    <>
      <Layout>
        <div className={styles.contentcontainer}>
          <h2>SOBRE O SITE</h2>
            <article className={styles.contentcontainercrimes}>
            <p>
              Crimes Ambientais podem ser mais comuns do que imaginamos.
              Causar danos diretos ou indiretos à unidades de conservação, 
              provocar incêndios em mata ou floresta, impedir ou dificultar
              a regeneração natural de florestas, praticar abuso ou maus-tratos
              à animais silvestres ou domésticos e executar pesquisa, lavra ou
              extração de recursos minerais sem autorização são apenas alguns
              exemplos de crimes ambientais segundo a lei nº 9.605/98. 
            </p>
          </article>
          <article className={styles.contentcontainerabout}>
            <p>
              Dada a relevância dos temas ambientais na sociedade atual, este
              site foi criado com o intuito de facilitar as denúncias contra
              esse tipo de crime. Cadastre-se para poder registrar suas denúncias
              e visualize aquelas feitas por outros usuários na página de denúncias.
            </p>
            <button type="button" onClick={handleCadastro}>CADASTRAR-SE</button>
          </article>
        </div>
        <div className={styles.login}>
          <form className={styles.logincontent} autoComplete="off">
            <div className={styles.logincontenttext}>
              <h3>COLOQUE SUAS INFORMAÇÕES</h3>
              <p>
                Cadastrado você poderá ajudar a combater a ocorrência de crimes 
                ambientais denunciando-os
              </p>
            </div>
            <label htmlFor="name">
              Nome:<input type="text" id="login-name" name="name" required/>
            </label>
            <label htmlFor="cpf">
              CPF:<input type="text" id="login-cpf" name="cpf" required/>
            </label>
            <label htmlFor="email">
              E-mail:<input type="e-mail" id="login-mail" name="email" required/>
            </label>
            <label htmlFor='password'>
              Senha:<input type="password" id="login-password" name="password" required/>
            </label>
            <button onClick={handleCriar} type="button">CRIAR</button>
            <button onClick={handleEntrar} type="button">ENTRAR</button>
            <button onClick={handleClose} type="button">CANCELAR</button>
          </form>
        </div>
      </Layout>
    </>
  )
}
