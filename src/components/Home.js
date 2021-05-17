import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <HeaderContainer>
            
            <Section 
            title='Model S'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-s.jpg'
            leftBtnText='custom order'
            rightBtnText='Existing inventory'
            />
             <Section
              title='Model Y '
              description='Order Online for Touchless Delivery'
              backgroundImg='model-y.jpg'
              leftBtnText='custom order'
              rightBtnText='Existing inventory'
             
             />
            <Section
              title='Model 3'
              description='Order Online for Touchless Delivery'
              backgroundImg='model-3.jpg'
              leftBtnText='custom order'
              rightBtnText='Existing inventory'
             
             />

<Section
              title='Model X '
              description='Order Online for Touchless Delivery'
              backgroundImg='model-x.jpg'
              leftBtnText='custom order'
              rightBtnText='Existing inventory'
             
             />
            
            <Section
              title='Lowest Cost Solar Panels in America'
              description='Money-back guarantee'
              backgroundImg='solar-panel.jpg'
              leftBtnText='Order now'
              rightBtnText='Learn more'
             
             />
             <Section
              title='Solar for New Roofs'
              description='Solar Roof Less Than a New Roof Plus Solar Panels'
              backgroundImg='solar-roof.jpg'
              leftBtnText='Order now'
              rightBtnText='Learn more'
             
             />
            <Section
              title='Accessories'
             description=''
              backgroundImg='accessories.jpg'
            leftBtnText='Order now'
            
             
             />
        </HeaderContainer>
    )
}

export default Home


const HeaderContainer= styled.div`

height:100vh;

`;


