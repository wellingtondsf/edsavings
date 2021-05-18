import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="ed savings" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>


    </Container>
  );
};
