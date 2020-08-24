import styled from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Activities = styled.ScrollView `
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
`;

export const CuriosityCard = styled.View `
    width: 160px;
    height: 160px;
    background-color: #FFF;
    align-self: center;
    margin-bottom: 15px;
    margin-top: 10px;
    border-radius: 20px;
    margin-left: 15px;
    justify-content: center;
    align-items: center;
`;

export const CuriosityText = styled.Text `
    text-align: center;
    font-family: Montserrat_600SemiBold;
    font-size: 14px;
    width: 120px;
`;