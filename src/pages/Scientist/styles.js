import { Platform } from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const headerHeight = Platform.OS === 'android' ? 
    hp('18%') : hp('15.5%') 

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    width: 100%;
    background-color: #FFF;
`;

export const TextView = styled.View `
    width: 90%;
    align-self: center;
    margin-top: 6px;
`;

export const Header = styled.View `
    height: 70px;
    border-bottom-width: 1px;
    border-bottom-color: #E1DEDE;
    justify-content: center;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 28px;
`;

export const List = styled.ScrollView `
    height: 100%;
    width: 100%;
`;