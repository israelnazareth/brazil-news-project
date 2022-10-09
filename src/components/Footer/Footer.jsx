import { GrGithub, GrLinkedin, GrLinkTop } from 'react-icons/gr'
import { BsWhatsapp } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials-contact">
          <a href="https://www.linkedin.com/in/israelnazareth/" target="blank" title="LinkedIn">
            <GrLinkedin />
          </a>
          <a href="https://github.com/israelnazareth" target="blank" title="GitHub">
            <GrGithub />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5521972754631" target="blank" title="WhatsApp">
            <BsWhatsapp />
          </a>
        </div>
        <div className="copyright">
          <div>&copy; 2022 | Desenvolvido por Israel Nazareth</div>
          <div>Todos os direitos reservados</div>
        </div>
        <span className="button-to-top" onClick={() => topFunction()}>
          <GrLinkTop title='Voltar ao topo'/>
        </span>
      </div>
    </footer>
  )
}

export default Footer;
