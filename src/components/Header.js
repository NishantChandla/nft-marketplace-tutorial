import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  connectWallet,
  disconnectWallet,
  incrementData,
  decrementData,
} from "../actions";
import { Link } from "react-router-dom";

const Header = ({ Tezos, wallet, setTezos }) => {
  const selector = useSelector((state) => {
    return state.walletConfig.user;
  });
  const dispatch = useDispatch();

  const onClick = (event) => {
    event.preventDefault();
    if (selector.userAddress === "") {
      dispatch(connectWallet({ Tezos, wallet }));
    } else {
      dispatch(disconnectWallet({ wallet, setTezos }));
    }
  };

  return (
    <div className="ui menu black" style={{ marginTop: "5px" }}>
      <a href="/#" className="ui header item">
        NFTs
      </a>
      <Link className="item" to="/">
        Home
      </Link>

      {selector.userAddress !== "" ? (
        <Link className="item" to="/create">
          Create NFT
        </Link>
      ) : null}

      <div className="right menu">
        {selector.userAddress === "" ? (
          <a href="/#" className="item" onClick={onClick}>
            Connect Wallet
          </a>
        ) : (
          <a href="/#" className="item" onClick={onClick}>
            Disconnect Wallet
          </a>
        )}
      </div>
    </div>
  );

};

export default Header;
