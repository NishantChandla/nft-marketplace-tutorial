import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { collectNFT } from "../../actions";
import Token from "../sections/Token_card";

const Home = ({Tezos}) => {
	const selector = useSelector(state => state.tokenData);
    const dispatch = useDispatch();
    const history = useHistory();

    const tokens = selector.map((obj, idx) => 
        <Token 
            key={idx} 
            item={obj} 
            onCollect={()=>dispatch(collectNFT({Tezos, amount: obj.amount, id: obj.token_id}))}
            onClick={()=>obj.collectable && history.push(`/show/${obj.token_id}`)}
        />
    );

	return <div className="ui link three column grid cards">{tokens}</div>;
};

export default Home;
