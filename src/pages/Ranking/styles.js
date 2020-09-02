import { Platform } from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const Wrapper = styled.SafeAreaView `
    flex: 1;
    width: 100%;
    background-color: #FFF;
`;


export const TextView = styled.View `
    width: 90%;
    align-self: center;
`;

export const Header = styled.View `
    height: 240px;
    width: 100%;
    align-self: center;
    background-color: #FFF;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #E1DEDE;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 28px;
    margin-top: -4px;

`;

