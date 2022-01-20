import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function PictureList(){
    return(
        <ImageList sx={{width:1000, height: 585}}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title = {item.title}
                        subtitle = {<span>Price {item.price}</span>}
                        position = "below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://www.alma-solarshop.com/4244-pdt_220/i-m-solar-solar-panel-380w-mono.jpg',
        title: 'I AM SOLAR SOLAR PANEL 380W MONO',
        price: '169.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4371-pdt_220/i-m-solar-solar-panel-375w-mono-black.jpg',
        title: 'I AM SOLAR SOLAR PANEL 375W MONO',
        price: '175.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4185-pdt_220/i-m-solar-panel-370w-mono-glass-glass.jpg',
        title: 'I AM SOLAR PANEL 370W MONO GLASS-GLASS TRANSPARENT',
        price: '199.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4313-pdt_220/lg-solar-panel-neon-h-370w.jpg',
        title: 'LG SOLAR PANEL NEON H 370W',
        price: '199.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4182-pdt_220/i-m-solar-bifacial-panel-440w-glass-glass-transparent.jpg',
        title: 'I AM SOLAR BIFACIAL PANEL 440W GLASS-GLASS TRANSPARENT',
        price: '219.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4252-pdt_220/lg-solar-panel-neon-h-385-w.jpg',
        title: 'LG SOLAR PANEL NEON H 385 W',
        price: '279.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4253-pdt_220/lg-solar-panel-neon-h-380w-black.jpg',
        title: 'LG SOLAR PANEL NEON H 380W BLACK',
        price: '285.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/3147-pdt_220/panasonic-solar-panels-vbhn340sj53-340w.jpg',
        title: 'PANASONIC SOLAR PANELS VBHN340SJ53 340W',
        price: '299.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4191-pdt_220/sunpower-solar-panel-maxeon-max3-375w.jpg',
        title: 'SUNPOWER SOLAR PANEL MAXEON MAX3-375W',
        price: '339.00€',
    },

    {
        img: 'https://www.alma-solarshop.com/4276-pdt_220/lg-solar-panel-neon-r-400w.jpg',
        title: 'LG SOLAR PANEL NEON R® 400W',
        price: '345.00€',
    },

]