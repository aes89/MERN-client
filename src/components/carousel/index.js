import React, { useState } from "react";

import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import SearchRecipeButton from "../searchButton";
import fridge from "../styles/imgs/fridge.png";
import list from "../styles/imgs/list.png";
import pantry from "../styles/imgs/pantry.png";
import kitchen from "../styles/imgs/kitchen.png";
import pref from "../styles/imgs/preference.png";

import { Slide } from 'material-auto-rotating-carousel'


const { red, blue, green, lightGreen } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;




const Carousel = () => {
const [state, setState] = useState({ open: false });

return (

        <div style={{ position: 'relative', width: '100%', height: 30 }}>
        <Button onClick={() => setState({ open: true })}>Open carousel</Button>
        <AutoRotatingCarousel
            label='Get started'
            open={state.open}
            onClose={() => setState({ open: false })}
            onStart={() => setState({ open: false })}
            style={{ position: 'absolute' }}
        >
            <Slide
            media={<img src={fridge} style={{width: '30%'}} />}
            mediaBackgroundStyle={{ backgroundColor: lightGreen[400] }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Add Ingredients to your Fridge'
            subtitle='Cheese, bread, chicken, soy sauce.. any ingredients in your fridge!'
            />
            <Slide
            media={<img src={pantry} style={{width: '30%'}} />}
            mediaBackgroundStyle={{ backgroundColor: lightGreen[400] }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Add staples to your Pantry'
            subtitle='Save your usual pantry staples!'
            />
            <Slide
            media={<img src={pref} style={{width: '30%'}} />}
            mediaBackgroundStyle={{ backgroundColor: lightGreen[400] }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Select any diet preferences.'
            subtitle='Gluten free, dairy free? You can decide! '
            />
            <Slide
            media={<img src={kitchen} style={{width: '30%'}}/>}
            mediaBackgroundStyle={{ backgroundColor: lightGreen[400] }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Then click search and browse recipes!'
            subtitle='We will show you recipes that include the ingredients from your fridge!'
            />
            <Slide
            media={<img src={list} style={{width: '30%'}}/>}
            mediaBackgroundStyle={{ backgroundColor: lightGreen[400] }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Save them for later!'
            subtitle='Add recipes to your saved collection so you can use them again!'
            />
        </AutoRotatingCarousel>
        </div>
    )

};



export default Carousel;
