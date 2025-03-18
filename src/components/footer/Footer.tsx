import './footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <p>Inscreva-se na nossa newsletter</p>
        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">Inscrever</button>
        </form>
        <label className="terms">
            <input type="checkbox" />
            Aceito os termos e condições
        </label>
      </div>

      <div className="conteudo-principal">
        <div className="logo">
          <img src="/logo.png" alt="Logo da Converse" />
          <p>Seu texto sobre a marca...</p>
          <div className="redes-sociais">
            <a href="#">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="links">
          <div className="institucional">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre Nos</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>

          <div className="ajuda">
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="termos">
            <h3>Termos</h3>
            <ul>
              <li><a href="#">Termos e Condicoes</a></li>
              <li><a href="#">Politica de Privacidade</a></li>
              <li><a href="#">Troca e Devolucao</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© [2025] Converse. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;