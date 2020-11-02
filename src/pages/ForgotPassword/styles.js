import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    width: 100%;
    
    background-color: #FFF;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    margin-top: 40px;
    align-self: flex-start;
    font-size: 20px;
    width: 90%;
    align-self: center;
`;

export const SubTitle = styled.Text `
    font-family: Montserrat_500Medium;
    margin-top: 12px;
    align-self: flex-start;
    font-size: 14px;
    color: #808080;
    width: 90%;
    align-self: center;
`;

export const Input = styled.TextInput `
    width: 90%;
    align-self: center;
    padding-left: 10px;
    font-family: Montserrat_500Medium;
    height: 50px;
    border-width: 0.3px;
    border-radius: 8px;
    margin-top: 16px;
`;

export const SendButton = styled.TouchableOpacity `
    margin-top: 20px;
    align-self: center;
    height: 50px;
    width: 90%;
    background-color: #FF5555;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const SendText = styled.Text `
    color: #FFF;
    font-family: 'Montserrat_700Bold';
    font-size: 15px;
`;