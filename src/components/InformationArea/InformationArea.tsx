import { Container } from "./styles";
import moneyImg from '../../assets/money.svg';
import dogImg from '../../assets/dog.svg';
import carImg from '../../assets/car.svg';

export function InformationArea() {
    return (
        <Container>
            <div>
                <img src={moneyImg} alt="dinheiro"/>
                <span>Compra segura</span>
            </div>
            <div>
                <img src={dogImg} alt="cachorro"/>
                <span>Melhor qualidade para seu pet</span>
            </div>
            <div>
                <img src={carImg} alt="caminhão"/>
                <span>Entrega rápida</span>
            </div>
        </Container>
    );
}