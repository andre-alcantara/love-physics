import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ScientistCard = styled.View `
    width: 90%;
    height: 180px;
    background-color: ${props => props.theme.bottomTab};
    align-self: center;
    margin-bottom: 15px;
    margin-top: 16px;
    border-radius: 20px;
`;

export const ScientistText = styled.Text `
    color: ${props => props.theme.title};
    font-family: Montserrat_600SemiBold;
    font-size: 25px;
    position: absolute;
    margin-left: 130px;
    margin-top: 20px;
`;

export const ScientistDesc = styled.Text `
    font-family: Montserrat_500Medium;
    color: ${props => props.theme.secondaryText};
    font-size: 14px;
    width: ${wp('55%')};
    margin-left: 130px;
    margin-top: 68px;
    position: absolute;
`;