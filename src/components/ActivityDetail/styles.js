import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView `
    flex: 1;
`;

export const Exit = styled.View `
    margin-top: 12px;
    width: 90%;
    align-self: center;
`;

export const ExitButton = styled.TouchableOpacity `
    width: 30px;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
`;

export const Header = styled.View `
    width: 90%;
    align-self: center;
    flex-direction: row;
    
`;

export const Title = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 28px;
    text-align: center;
    color: #FFF;  
`;

export const TitleView = styled.View `
    margin-left: 8%;
    align-self: center;
`;