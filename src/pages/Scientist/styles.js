import { Platform } from 'react-native';
import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const headerHeight = Platform.OS === 'android' ? 
    80 : 60 

const marginTop = Platform.OS === 'android' ? 
    10 : 0    

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    
    background-color: #FFF;
    align-items: center;
`;

export const Container = styled.View `
    
`

export const TextView = styled.View `
    width: 88%;
    margin-top: 10px;
    align-self: center;
`;

export const Header = styled.View `
    height: ${headerHeight}px;
    border-bottom-width: 1px;
    border-bottom-color: #d3d1d1;
`;

export const Title = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 28px;
    margin-top: ${marginTop}px;
`;

export const ListView = styled.ScrollView `
    
`;