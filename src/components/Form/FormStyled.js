import styled from 'styled-components';

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 10px;

label{
    display: flex;
    flex-direction: column;
}

input {
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
}

button {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: aquamarine;
    &:hover{
        background-color: lightgreen;
    }
    transition: background-color 0.5s;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
}`