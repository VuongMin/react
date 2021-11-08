export  function Heading (props) { 
    return (
        <div className="section-heading">
              <h3>{props.children}</h3>
              <span className="line-title">
                <img src="images/line.png" alt="" />
              </span>
            </div>
    )
 }