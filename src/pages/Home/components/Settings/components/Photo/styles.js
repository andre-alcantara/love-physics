import styled from 'styled-components';

export const ProfileView = styled.View `
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 40px;
`;

export const Current = styled.Text `
    margin-bottom: 5px;
    font-family: Montserrat_600SemiBold;
    font-size: 13px;
    color: #5EBACE;
`;

export const ProfilePhoto = styled.View `
    width: 120;
    height: 120;
    background-color: #FF5;
    margin-right: 15px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`; 

export const Profile = styled.View `
   
`; 

export const ChoosePhoto = styled.TouchableOpacity `
    background-color: #FFF;
    border-width: 1px;
    border-color: #FF5555;
    width: 150px;
    height: 50px;
    align-self: center;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const ChooseText = styled.Text `
    font-family: Montserrat_600SemiBold;
    color: #FF5555;
`; 
