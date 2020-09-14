import styled from 'styled-components';

const headerHeight = Platform.OS === 'android' ? 
    90 : 70

const marginTop = Platform.OS === 'android' ? 
    16 : 0    

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: #FFF;
`;

export const Header = styled.View `
    height: ${headerHeight}px;
    border-bottom-width: 1px;
    border-bottom-color: #E1DEDE;
    justify-content: center;
    flex-direction: row;
`;

export const TextView = styled.View `
    width: 90%;
    align-self: center;
    justify-content: center;
    margin-top: ${marginTop}px;
`;

export const Title = styled.Text `
    font-family: Montserrat_800ExtraBold;
    font-size: 28px;
`;

export const Icon = styled.TouchableOpacity `
    align-self: flex-end;
    position: absolute;
`;

