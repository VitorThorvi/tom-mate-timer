import {HeaderContainer} from "./styles.ts";
import tomMateLogo from "../../assets/tom-mate-logo.svg";
import {Scroll, Timer} from "phosphor-react";
import {NavLink} from "react-router-dom";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={tomMateLogo} alt='Tom Mate Timer logo, a tomato'/>
        <nav>
          <NavLink to='/' title='Timer Home'>
            <Timer size={24}/>
          </NavLink>
          <NavLink to='/history' title='History'>
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  );
}
