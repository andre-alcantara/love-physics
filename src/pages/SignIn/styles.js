import styled from 'styled-components';
import { Dimensions } from 'react-native';

const d = Dimensions.get("window");

export const Background = styled.ImageBackground `
    flex: 1;
    align-items: center;
    width: ${d.width}px;
    height: ${d.height}px;
    position: absolute;
`; 

export const Wrapper = styled.View `
    margin-top: 40px;
    align-items: center;]
    width: 90%;
`;

export const Title = styled.Text `
    align-self: center;

`;

export const Description = styled.Text `

`;

export const Label = styled.Text `
    align-self: flex-start;
    margin-left: 3%;
    font
`;

export const ForgotButton = styled.TouchableOpacity `

`;

export const ForgotText = styled.Text `

`;

export const SignInButton = styled.TouchableOpacity `

`;

export const SignInText = styled.Text `

`;

export const SignUpView = styled.View `

`;

export const SignUpDescription = styled.Text `

`;

export const SignUpButton = styled.TouchableOpacity `

`;

export const SignUpText = styled.Text `

`;

    