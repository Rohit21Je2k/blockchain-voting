import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavBarDesktop.css";

export default function NavBarDesktop(props) {
  const { store, setStore } = props;
  const { account } = store;
  const route = useLocation().pathname.split("/")[1];

  const [menuNum, setMenuNum] = useState(1);

  useEffect(() => {
    switch (route) {
      case "":
        setMenuNum(1);
        break;
      case "connect":
        setMenuNum(2);
        break;
      case "wallet":
        setMenuNum(3);
        break;
      case "voting":
        setMenuNum(4);
        break;
      case "results":
        setMenuNum(5);
        break;
      default:
        setMenuNum(1);
    }
  }, [route]);

  const handleClick = (num) => {
    return () => {
      setMenuNum(num);
    };
  };

  const handleLogout = () => {
    setStore((prevStore) => {
      prevStore.account = null;
      return { ...prevStore };
    });
  };
  return (
    <div className="navbar-desktop">
      <Link
        to="/"
        onClick={handleClick(1)}
        className={`navbar-desktop__link ${menuNum === 1 ? "selected" : null}`}
      >
        Home
      </Link>
      {!account && (
        <Link
          to="/connect"
          onClick={handleClick(2)}
          className={`navbar-desktop__link ${
            menuNum === 2 ? "selected" : null
          }`}
        >
          Connect Your Wallet
        </Link>
      )}
      {account && (
        <>
          <Link
            to="/wallet"
            onClick={handleClick(3)}
            className={`navbar-desktop__link ${
              menuNum === 3 ? "selected" : null
            }`}
          >
            My Wallet
          </Link>
          <Link
            to="/voting"
            onClick={handleClick(4)}
            className={`navbar-desktop__link ${
              menuNum === 4 ? "selected" : null
            }`}
          >
            Voting
          </Link>
          {account == "0xa47c89c5dc1f8f102cb594c6e9cc8f7d987584cd" && (
            <Link
              to="/results"
              onClick={handleClick(5)}
              className={`navbar-desktop__link ${
                menuNum === 5 ? "selected" : null
              }`}
            >
              Results
            </Link>
          )}
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        </>
      )}
    </div>
  );
}
