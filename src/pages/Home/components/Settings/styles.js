import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: ${props => props.theme.background};
`;

export const Container = styled.View `
    width: 90%;
    align-self: center;
`;

export const Header = styled.View `
    height: 130px;
    padding-top: 20px;
  
`;

export const TitleView = styled.View `

`;

export const Back = styled.TouchableOpacity `
    margin-bottom: 10px;
`;

export const Title = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 26px;
    color: ${props => props.theme.title};
`;

export const AvatarView = styled.View `
    align-self: flex-end;
    padding-top: 25px;
    position: absolute;
    align-items: center;
`; 

export const EditButton = styled.TouchableOpacity `
    margin-top: 12px;
`;

export const EditText = styled.Text `
    color: #20D29B;
    font-family: Montserrat_500Medium;
    font-size: 14px;
    
`;

export const InputView = styled.View `
    margin-top: 80px;
`;

export const DarkModeView = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 93%;
    margin-top: 20px;
    align-self: center;
`;

export const DarkModeText = styled.Text `
    font-family: Montserrat_600SemiBold;
    font-size: 17px;
    color: ${props => props.theme.title};
`;

export const EditView = styled.View `
    width: 95%;
    height: 370;
    align-self: center;
    background-color: #FFF;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => props.theme.background};
`;

export const Content = styled.View `
    width: 90%;
    height: 90%;
    align-self: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
`;

export const Edit = styled.TouchableOpacity `
    height: 50;
    width: 200;
    background-color: #FF5555;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-bottom: -45px;
    margin-top: 25px;
    border-radius: 8px;
    
`;