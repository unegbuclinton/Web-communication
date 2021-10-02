import styled from "styled-components";
import CardSection from "./Components/CardSection";
import ChartSection from "./Components/ChartSection";
import FaqSection from "./Components/FaqSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MessageSection from "./Components/MessageSection";
import PaymentSection from "./Components/PaymentSection";
import { OuterLayout } from "./Styles/Layout";


function App() {
  return (
    <div className="App">
     
     <Header />
    <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
          <MessageSection />
          <PaymentSection />
          <FaqSection />
        </MainStyled>
     </OuterLayout> 
      <Footer />


    </div>
  );
}

const MainStyled = styled.main`


`;

export default App;
