import { Platform } from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Constants from 'expo-constants';

const headerHeight = Platform.OS === 'android' ?
    250 : 230

const statusBarHeight = Constants.statusBarHeight;    

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    width: 100%;
    background-color: #FFF;
`;

export const TextView = styled.View `
    width: 90%;
    align-self: center;
    margin-top: -6px;
`;

export const Header = styled.View `
    height: 220px;
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
    margin-bottom: 12px;
`;

export const Scroll = styled.ScrollView `

`;
