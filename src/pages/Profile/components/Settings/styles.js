import styled from 'styled-components';
import { Input } from 'react-native-elements';

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
    margin-top: 10px;
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
