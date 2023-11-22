
import MenuLink from "components/MenuLink"
import styles from "./Menu.module.css"


export default function Menu(){
   

    return (
        <header>
            <nav className={styles.navegacao}>

             <MenuLink to="/">
                 Inicio
             </MenuLink>

              <MenuLink to="/sobremim">
                Sobre Mim
              </MenuLink>
              
            </nav>
        </header>
    )
    // utiliza-se Link enves da tag <a></a> porque por padrão 
    // a tag "a" ela recarrega a pagina e o react não admite isso
    // entao o react-dom tem uma tag especial que ajuda a não recarregar a pagina
    // single page applicartion -> spa 
}