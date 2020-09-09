import styled from 'styled-components';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.View `
    height: 70px;
    border-bottom-width: 1px;
    border-bottom-color: #E1DEDE;
    justify-content: center;
    flex-direction: row;
`;

export const TextView = styled.View `
    width: 90%;
    align-self: center;
    justify-content: center;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 28px;
`;

export const Icon = styled.TouchableOpacity `
    align-self: flex-end;
    position: absolute;
`;

