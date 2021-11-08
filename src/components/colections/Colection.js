import React from 'react'
import { URI } from '../../common'
import { ColectionFullwidth } from './ColectionFullwidth';
import { ColectionItem } from './ColectionItem';
import './Colections.css'
class Colection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ITEMS: [], ITEMS_FULLWIDTH: [] }
    }
    componentDidMount() {
        fetch(URI.poster)
            .then(data => data.json())
            .then(data => {
                const result1 = data.filter(item => item.bannertype === 1)
                const result2 = data.filter(item => item.bannertype == 2)
                this.setState({ ITEMS: result1, ITEMS_FULLWIDTH: result2 })
            })
    }

    render() {
        const { style_modify } = this.props
        const { ITEMS ,ITEMS_FULLWIDTH} = this.state
        const cls = style_modify === undefined ? "" : "full-width"
 
        if (style_modify !== undefined) {

            return (
                <div className={"colections " + cls}>
                    {
                      <ColectionFullwidth items = {ITEMS_FULLWIDTH}/>
                    }
                </div>
            )
        }
        return (
            <div className={"colections "}>
                {
                    ITEMS.map(item => {
                        return <ColectionItem key={item.id} item={item} />
                    })
                }

            </div>

        )
    }

}
export default Colection