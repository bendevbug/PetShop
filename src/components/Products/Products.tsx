import { Container, Content } from "./styles";
import foodOneImg from "../../assets/food1.png"
import foodTwoImg from "../../assets/food2.png"
import foodThreeImg from "../../assets/food3.png"
import { useEffect, useState } from "react";
import { api } from "../../services/api";


interface ProductProps {
        image: string,
        price: string,
        title: string,
        id: number,
}

export function Products(props: ProductProps) {

    const [product, setProduct] = useState<ProductProps>( { image: '', price: '', title: '', id: 0 } );


    // useEffect(() => {
    //     async function getProducts() {
    //         // const response = await api.get("localhost:3333/product");
    //         api.get('/product')
    //     .then((response) => console.log(response.data[0].image))
    //     }

    //     getProducts();
    //     // api.get('/product')
    //     // .then((response) => console.log(response.data[0].image))

    // }, [])

    // function getProduct() {
    //     api.get('/product')
    //     .then(reponse => {
    //         console.log(JSON.stringify(reponse.data[0].id))
    //     })
    // }

    // getProduct()

    useEffect(() => {
        fetch('http://localhost:3333/product')
        .then(response => response.json())
        .then(data => {
            setProduct({
                    image: data.image,
                    price: data.price,
                    title: data.title,
                    id: data.id
            })
        })
    }, [])
    
    return(

        <Container>
             <Content>
             <div>
                <img src={product.image}/>
                <h3>Ração pedigree para cães adultos - sabor: frango, ovo e arroz</h3>
                <h3><strong>R$55,73</strong></h3>

            </div>
            <div>
                <img src={foodTwoImg}/>
                <h3>Ração pedigree para cães filhotes - sabor: carne e leite</h3>
                <h3><strong>R$57,50</strong></h3>

            </div>
            <div>
                <img src={foodThreeImg}/>
                <h3>Ração pedigree para cães pequenos - sabor: frango assado, arroz e vegetais</h3>
                <h3><strong>R$52,00</strong></h3>


            </div>

            <div>
                <img src={foodOneImg}/>
                <h3>Ração pedigree para cães adultos - sabor: frango, ovo e arroz</h3>
                <h3><strong>R$55,73</strong></h3>

            </div>
            <div>
                <img src={foodTwoImg}/>
                <h3>Ração pedigree para cães filhotes - sabor: carne e leite</h3>
                <h3><strong>R$57,50</strong></h3>

            </div>
            <div>
                <img src={foodThreeImg}/>
                <h3>Ração pedigree para cães pequenos - sabor: frango assado, arroz e vegetais</h3>
                <h3><strong>R$52,00</strong></h3>


            </div>
            </Content>
            
        </Container>
    );
}