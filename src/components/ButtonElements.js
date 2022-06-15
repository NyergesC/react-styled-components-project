import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background:${({primary}) => (primary ? '#A2A2F6' : '#8282cf')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#8282cf' )};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px' )};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-contenct:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:${({primary}) => (primary ? '#8282cf' : '#8282cf')};
    }

`