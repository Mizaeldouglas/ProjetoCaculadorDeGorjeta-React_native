import { Text,View } from 'react-native';
import { useState,useEffect } from 'react';
import styled from 'styled-components/native';




const App = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip]   = useState(0);
  const [pct, setPct] = useState(10);
  

  const calc = () => {
    let nBill = parseFloat(bill)

    if(nBill){
      setTip( ( pct/100 ) * nBill )
  }
    
  }

  useEffect(() => {
	  calc()
  }, [pct]);

  return(
    <Page>
     <Header>Calculadora de Gorjeta</Header> 
    <Input
        placeholder  = "Quanto deu a conta?"
        keyboardType = 'numeric'
        value        = {bill}
        onChangeText = {n=>setBill(n)}
     />
     <PctArea>
        <PctItem title = "5%" onPress={ ()=>setPct(5) } />
        <PctItem title = "10%" onPress={ ()=>setPct(10) } />
        <PctItem title = "15%" onPress={ ()=>setPct(15) } />
        <PctItem title = "20%" onPress={ ()=>setPct(20) } />
     </PctArea>
     <CalcButton 
        title   = {`Calcular ${pct}%`}
        onPress = { calc }
     />
     {tip >0 && 
          <ResultArea>

          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ { parseFloat(bill).toFixed(2) }</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ { tip.toFixed(2) } ({pct}%)</ResultItem>

          <ResultItemTitle>Valor da Total</ResultItemTitle>
          <ResultItem>R$ { (parseFloat(bill) + tip).toFixed(2) }</ResultItem>
          
          
          </ResultArea>
      }

    </Page>
  );
};
export default App;

/**



 ............................AREA DA ESTILIZAÇÃO............................


 */

const Page = styled.SafeAreaView`
  flex       : 1;
  align-items: center;
  margin-top : 45px;
  
`;
const Header = styled.Text` 
font-size    : 25px;
margin-bottom: 10px;
`;
const Input = styled.TextInput`
  width           : 90%;
  height          : 40px;
  font-size       : 18px;
  background-color: #eee;
  border-radius   : 10px;
  padding         : 10px;
`;
const CalcButton = styled.Button`
  margin-top: 30px;
`;
const ResultArea = styled.View`
  margin-top      : 30px;
  background-color: #eeee;
  padding         : 20px;
  justify-content : center;
  align-items     : center;
`;
const ResultItem = styled.Text`
  font-size    : 15px;
  margin-bottom: 30px;
`;
const ResultItemTitle = styled.Text`
  font-size  : 18px;
  font-weight: bold;
`;
const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;
const PctItem = styled.Button`
  margin-right: 20px;
`;
