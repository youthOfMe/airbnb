import styled from "styled-components";


export const FooterWrapper = styled.div`
    /* flex布局后子级宽度不是100% */
    display: flex;
    margin-top: 10px;

    .info {
        display: flex;
        align-items: center;
        cursor: pointer;

        font-size: 17px;
        font-weight: 700;
        color: ${props => props.color};

        &:hover {
            text-decoration: underline;
        }

        .text {
            margin-right: 6px;
        }
    }
`