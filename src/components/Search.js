import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';
import {SearchStyle, StyledInput, Suggestions, NotFound, ProductSearched} from "../styles/homeStyles"

export default function Search() {
    const { user } = useContext(UserContext);
    const [search, setSearch] = useState("");
    const [productFound, SetProductFound] = useState([]);


    useEffect(() => {
        if (search.length > 1) {
            const result = axios.get(`http://localhost:4000/products?product=${search}`);
            result.then(response => {
                SetProductFound(response.data);
            })

        }
    }, [search])

    return (

        <ClickAwayListener onClickAway={() => setSearch("")}>
            <SearchStyle>
                <StyledInput
                    minLength={2}
                    debounceTimeout={300}
                    onChange={(e) => setSearch(e.target.value)} value={search}
                    searching={search !== "" ? true : false}
                    placeholder="Search for magical itens..." />
                <Suggestions searching={search !== "" ? true : false}>
                    {productFound.length === 0 ? <NotFound>No magical product found</NotFound> :
                    productFound.map(p => (
                        <Link to={`/product/${p.id}`}>
                        <ProductSearched key={p.id}>
                            <img src={p.productImage} alt={p.productName} />
                            <p>{p.productName} </p>
                            <span> R$ {(p.price/100).toFixed(2).replace(".",",")}</span>
                        </ProductSearched>
                    </Link>
                    ))}
                </Suggestions>

            </SearchStyle>
        </ClickAwayListener>
    );
}