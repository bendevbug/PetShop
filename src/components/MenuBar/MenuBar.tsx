import { Container } from "./styles";
import bannerDog from "../../assets/banner-dog.png"

export function MenuBar() { 

    return (
        <Container>
            <ul>
                <li><a href="#">INÍCIO</a></li>
                <li><a href="#">PETS</a></li>
                <li><a href="#">ACESSÓRIOS</a></li>
                <li><a href="#">ALIMENTAÇÃO</a></li>
            </ul>
            <div>
                <img src={bannerDog} alt="Cachorro preto"/>
            </div>
        </Container>
        
    );
}