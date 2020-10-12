import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ScientistCard = styled.View `
    width: 90%;
    height: 180px;
    background-color: #FFF;
    align-self: center;
    margin-bottom: 15px;
    margin-top: 16px;
    border-radius: 20px;
`;

export const ScientistText = styled.Text `
    color: #000;
    font-family: Montserrat_600SemiBold;
    font-size: 25px;
    position: absolute;
    margin-left: 130px;
    margin-top: 20px;
`;

export const ScientistDesc = styled.Text `
    font-family: Montserrat_500Medium;
    color: #808080;
    font-size: 14px;
    width: ${wp('55%')};
    margin-left: 130px;
    margin-top: 68px;
    position: absolute;
`;