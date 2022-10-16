import { Header } from "../../components/Header/Header";
import { InformationArea } from "../../components/InformationArea/InformationArea";
import { MenuBar } from "../../components/MenuBar/MenuBar";
import { Products } from "../../components/Products/Products";
import { Container } from "../../global";

export function Home() {

    return (
      <>
          <Container />
          <Header />
          <MenuBar />
          <InformationArea />
          <Products />
      </>
    );
    
}