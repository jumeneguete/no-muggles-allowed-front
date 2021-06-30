import styled from "styled-components"
import { HiOutlineXCircle } from 'react-icons/hi'

const Name = styled.td`
    color: #d98d30 !important;
    font-weight: 700 !important;
`
const Price = styled.td`
    color: #184059 !important;
    font-weight: 700 !important;
`
const Img = styled.td`
    width: 150px;
    padding: 10px 0 !important;
`
const OutlineX = styled(HiOutlineXCircle)`
    width: 24px;
    height: 24px;
    color: #a9a9a9;
`
const Table = styled.table`
    width: 100%;
    border: 1px solid #e5e4e2;
    border-collapse: collapse;

    tr {
        border: 1px solid #d3d3d3;
    }
    td {
        text-align: center;
        padding: 20px 0;
        vertical-align: middle;
        font-size: 18px;
        font-weight: 400;
        color: #696969;
        img{
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
        input {
            width: 50px;
            height: 40px;
            font-size: 18px;
            color: #696969;
        }
    }
    tbody {
        width: 100%;
    }
`
const Title = styled.tr`
    width: 100%;
    background: #fbfbfb;
`

export {Name, Price, Img, OutlineX, Table, Title}