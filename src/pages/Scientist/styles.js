import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Wrapper = styled.View `
    flex: 1;
    width: 100%;
    background-color: #FFF;
`;

export const TextView = styled.View `
    width: 90%;
    align-self: center;
    margin-top: 20px;
`;

export const Header = styled.View `
    height: ${hp('18%')}px;
    width: 100%;
    align-self: center;
    background-color: #FFF;
    justify-content: center;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 28px;
    margin-top: ${hp('2.5%')}px;

`;