import styled from "styled-components"

export const LeftWrapper = styled.div`
    flex: 1;
    color: ${props => props.theme.color.primaryColor};
    display: flex;
    align-items: center;

    .logo {
        margin-left: 20px;
        cursor: pointer;
    }
    
`
