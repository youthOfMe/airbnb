import styled from "styled-components";



export const FilterWrapper = styled.div`
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    cursor: pointer;

    .filter {
        display: flex;

        .item {
            margin: 0 4px 0 8px;
            padding: 6px 12px;
            border: 1px solid #dce0e0;
            border-radius: 4px;
            color: #484848;

            &.active {
                background: #008489;
                border: 1px solid #008489;
                color: #ffffff;
            }
        }
    }
`