import { Platform } from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const headerHeight = Platform.OS === 'android' ? 
    120 : 100 

const marginTop = Platform.OS === 'android' ? 
    25 : 10    

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: #9BDCEA;
`;

export const Content = styled.View `
    position:absolute;
    margin-top: -25px;
    width: 90%;
    height: 60px;
    align-self: center;
    justify-content: center;
`;

export const SearchBar = styled.TextInput.attrs({
    placeholderTextColor: '#A9A9A9'
}) `
    width: 100%;
    height: 60px;
    background-color: #FFF;
    align-self: center;
    border-radius: 10px;
    flex-direction: row;
    padding-left: 17px;
    font-size: 13px;
    font-family: Montserrat_500Medium;
`;


export const TextView = styled.View `
    width: 90%;
    margin-top: ${marginTop}px;
    align-self: center;
`;

export const Header = styled.View `
    height: ${headerHeight}px;
    margin-top: 10px;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 25px;
`;

export const ListView = styled.View `
    
    padding-top: 50px;
    height: 100%;
    width: 100%;
    background-color: #FFF;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;

export const Icon = styled.View `
    position: absolute;
    align-self: flex-end;
    padding-right: 17px;
`;