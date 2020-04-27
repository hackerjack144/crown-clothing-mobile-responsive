import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {signOutStart}  from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionContainer, OptionLink} from  './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
 
  <HeaderContainer>

    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>

    <OptionContainer>

      <LogoContainer to='/shop'>
        SHOPPING
      </LogoContainer>

      <LogoContainer to='/contact'>
        CONTACT
      </LogoContainer>

      {
        currentUser ? (
          <OptionLink as='div' onClick={signOutStart}> {/* as='div' we have used while using OptionLink css */}
            SIGN OUT 
          </OptionLink>
        ) :(
          <OptionLink to='/signin'>
            SIGN IN 
          </OptionLink>
        )
      }
      <CartIcon />

    </OptionContainer>
    {hidden ? null : <CartDropdown />}
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch =>({
  signOutStart: () => dispatch(signOutStart())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
