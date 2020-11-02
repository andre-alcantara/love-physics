import styled from 'styled-components';

export const Button = styled.TouchableOpacity `
    width: 90%;
    height: 60px;
    align-self: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 10px;
    background-color: ${props => props.theme.bottomTab};
`;

export const TextView = styled.View `

    
`;

export const ImageView = styled.View `
    position: absolute;
    margin-left: 20px;
`;

export const Name = styled.Text `
    font-family: Montserrat_700Bold;
    font-size: 18px;
    align-self: center;
    color: ${props => props.theme.title};
`;

export const Life = styled.Text `
    font-family: Montserrat_600SemiBold;
    
`;

