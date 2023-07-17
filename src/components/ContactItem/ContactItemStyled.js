import styled from "styled-components";

export const ContactDivStyled = styled.div`
display: flex;
gap: 15px;

p{
    margin: 0;
    padding: 0;
    font-size: 20px;
}

button{
    margin: 0;
    /* padding: 0; */
    border-radius: 5px;
    font-size: 14px;
    background-color: lightgreen;
    cursor: pointer;
    &:hover{
        background-color: red;
    }
    transition: background-color 0.5s;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
}`