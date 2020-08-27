import { Platform } from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const headerHeight = Platform.OS === 'android' ? 
    hp('36.6%') : hp('36.6%') 

export const Wrapper = styled.View `
    flex: 1;
    width: 100%;
    background-color: #FFF;
`;


export const TextView = styled.View `
    width: 90%;
    align-self: center;
    margin-top: 10px;
`;

export const Header = styled.View `
    height: ${headerHeight}px;
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
    margin-top: ${hp('2.5%')}px;

`;