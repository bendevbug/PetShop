import { Container } from "./styles";
import logoImg from "../../assets/logo.svg"
import loginImg from "../../assets/login.svg"
import { Link } from "react-router-dom";



export function Header() {

    return(
        <Container>
            <div className="header-principal">
                <img src={logoImg} alt="logo"/>

                    <input type="text" placeholder="o que seu pet precisa?"></input>

                    <div>
                        <Link to="/login">LOGIN</Link>
                        <img src={loginImg} alt="login"/>
                    </div>

                    
            </div>
          
        </Container>
    );
}