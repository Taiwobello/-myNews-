import styled from "styled-components";

export const StyledMenuContainer = styled.div`
    background-color: #e43338;
    height: 100%;
    width: 100%;
    color: white;
    margin-top: 4rem;
    z-index: -1;
    display: block;
    padding: 2rem 3rem;
    visibility: ${(props) => props.toggleMenu ? "visible" : "hidden"};
    position: fixed;
    top: 0;
    right: 0;
    width: 600px;
    padding-top: 5rem;
`

export const MenuTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;

`

export const MenuText = styled.h1`
    font-size: 2.5rem;
`

export const MenuTextContainer = styled.div`
    margin-bottom: 2.5rem;
    border-bottom: 3px solid #960005;
    padding-bottom: 1.5rem;
`