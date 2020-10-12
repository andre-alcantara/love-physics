import { Platform } from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Constants from 'expo-constants';

const headerHeight = Platform.OS === 'android' ? 
    120 : 100

const marginTop = Platform.OS === 'android' ? 
    25 : 10 

const statusBarHeight = Constants.statusBarHeight;    

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    width: 100%;
    background-color: #9BDCEA;
`;

export const TextView = styled.View `
    width: 90%;
    margin-top: ${marginTop}px;
    align-self: center;
`;

export const Header = styled.View `
    height: ${headerHeight}px;
    width: 100%;
    margin-top: 10px;
    margin-top: 10px;
    align-self: center;
    background-color: #9BDCEA;
    align-items: center;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 25px;
`;

export const Scroll = styled.ScrollView `

`;
