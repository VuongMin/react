import React, { Component } from 'react'
import { SliderItem } from '../slider/SliderItem';
import { URI } from '../../common'
import '../slider/Slider.css'
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ITEMS: [] }
    }
    componentDidMount() {
        fetch(URI.slider)
            .then(res => res.json())
            .then(res => {
                this.setState({ ITEMS: res })
            })
        //SLIDE AUTO RUN 
        const eLast = document.querySelector(`.carouzel-item:last-child`)
        setInterval(() => {
            let eActive = document.querySelector(`.carouzel-item.active`)
           if(eActive!==null){
            if (eActive == eLast) {
                eActive = document.querySelector(`.carouzel-item:first-child`)
                eActive.classList.add('active')
                eLast.classList.remove('active')
            }
            else {
                let eNext = eActive.nextElementSibling;
                if (eNext == null) {
                    eNext = document.querySelector(`.carouzel-item:first-child`)
                }
                eActive.classList.remove('active')
                eNext.classList.add('active')
            }
           }

        }, 5000);
    }

    render() {
        const { ITEMS } = this.state
        return (
            <div className="carouzel">
                {ITEMS.map((item, idx) => {

                    return <SliderItem
                        key={item.id}
                        item={item}
                        cls={idx === 0 ? "carouzel-item active" : "carouzel-item "} />
                })}
            </div>

        )
    }

}
export default Slider