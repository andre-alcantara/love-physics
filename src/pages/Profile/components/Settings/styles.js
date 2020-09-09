import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView `
    flex: 1;
    background-color: #FFF;
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