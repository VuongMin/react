export function ThumbItemNormal(props) {

    const {cls,item} = props
    return (
        <div className={cls}>
            <div className="thumb"><img src={item.img} alt={item.img} /></div>
            <div className="content">
                <h4>{item.title}</h4>
                <p className="date">{item.date}</p>
                <p className="plud">{item.plug}</p>
            </div>
        </div>

    )
}