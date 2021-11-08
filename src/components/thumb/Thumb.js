import React from 'react'
import { URI } from '../../common';
import { ThumbItemHot } from './ThumbItemHot';
import './thumb.css'
import { ThumbItemNormal } from './ThumbItemNormal';
import {$} from "jquery"

class Thumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ITEMS: []
        }

    }
    componentDidMount() {
        fetch(URI.nesw)
            .then(data => data.json())
            .then(data => {
                const { hot } = this.props
                if (hot) {
                    this.setState({
                        ITEMS: data.filter(item => item.hot)
                    })
                } else {
                    this.setState({
                        ITEMS: data.filter(item => !item.hot)
                    })
                }

            }).then(()=>{
                //ADD SLICK SLIDER
                window.$('.news-slider').slick({
                    slidesPerRow: 4,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
          
                  });
            })
    }

    render() {
        const { clsMain, clsChild } = this.props.cls
        const { hot } = this.props
        const { ITEMS } = this.state

        if (hot) {

            return (
                <div className={clsMain}>

                    {
                        ITEMS.map(item => <ThumbItemHot key={item.id} item={item} cls={clsChild} />)
                    }

                </div>

            )
        }
        return (
            <div className={clsMain}>

                {
                    ITEMS.map(item => <ThumbItemNormal key={item.id} item={item} cls={clsChild} />)
                }

            </div>
        )
    }

}
export default Thumb