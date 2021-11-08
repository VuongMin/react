export function ColectionItem(props) {
    const{item} = props
   if(item==undefined){return null}
    return (
        <div className="colections-item">
            <div className="thumb">
                <img src={item.img} alt={item.img} />
            </div>
        </div>
    )
}