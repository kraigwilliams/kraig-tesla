import React, {useState} from 'react'
import styled from 'styled-components'
 import MenuIcon from '@material-ui/icons/Menu';
 import CloseIcon from '@material-ui/icons/Close';
 

function Header() {

    const[burgerStatus, setBurgerStatus]= useState(false)
    return (
        <Container>
            <a href='/'>
                <img src='/images/logo.svg' alt=''/>
                </a>
        <Menu>
            <p><a href='#'>Model S</a></p>
            <p><a href='#'>Model 3</a></p>
            <p><a href='#'>Model X</a></p>
            <p><a href='#'>Model Y</a></p>
            <p><a href='#'>Solar Roof</a></p>
            <p><a href='#'>Solar Panels</a></p>
            </Menu>
<MenuRight>
    <a href='#'>Shop</a>
    <a href='#'>Tesla Account</a>

    </MenuRight>
    <CustomMenu onClick={()=>setBurgerStatus(true)}/>

    <BurgerNav show={burgerStatus}>
        
        <CloseWrapper onClick={()=>setBurgerStatus(false)} >
            <CloseIcon/>
            </CloseWrapper>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'> Cybertruck</a></li>
        <li><a href='#'> Roadster</a></li>
        </BurgerNav>
        
        </Container>
    )
}

export default Header


const Container = styled.div`
z-index:1;
min-height:60px;
position:fixed;
display:flex;
align-items:center;
flex:1;
 justify-content:space-between; 
padding:0 20px;
 top:0;
right:0;
left:0;



`;

const Menu= styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:1;

a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}

@media(max-width:768px){
    display:none;
}

`;

const MenuRight=styled.div`
display:flex;
align-items:center;


a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    flex-wrap:nowrap;
}
`;

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:2;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;

transform: ${props=> props.show? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s; 

li{
    {padding: 15px 0};
    border-bottom: 1px solid rgba(0,0,0,0.2)
}

a{
    font-weight:600;
}


`;

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`;