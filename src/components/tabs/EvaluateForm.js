import React from 'react'

export default class EvaluateForm extends React.Component {
    componentDidMount() {
        //event select star
        ; (function () {
            let idxStarActive = 0
            const allStar = document.querySelectorAll('.star i')
            allStar.forEach((e, idx) => {
                e.onmouseover = function (e) {
                    let eStarFirst = document.querySelector('.star i')
                    for (let index = 0; index < idx + 1; index++) {
                        eStarFirst.classList.add('st-hover')
                        eStarFirst = eStarFirst.nextElementSibling

                    }
                }
                e.onmouseout = function (e) {
                    const hasStarHover = document.querySelectorAll('i.st-hover')
                    hasStarHover.forEach(element => element.classList.remove('st-hover'))
                }
                e.onclick = function (event) {

                    const hasStarActive = document.querySelector('i.active')
                    allStar.forEach(item => item.style.color = "")

                    if (hasStarActive !== null) {
                        hasStarActive.classList.remove('active')
                    }

                    this.classList.add('active')
                    for (let index = 0; index <= allStar.length; index++) {

                        if (allStar[index].className.includes('active')) {
                            idxStarActive = index + 1
                            allStar[index].style.color = "orange"
                            break
                        } else {
                            allStar[index].style.color = "orange"
                        }

                    }

                }

            })
        }())
    }
    checkUserPostValid = (e) => {
      
        const target = e.target
        const content = target.closest('.loggin').querySelector('textarea').value
        const eallStar = target.closest('.loggin').querySelectorAll('.star i')
        let rate = 0
        eallStar.forEach((element, idx) => {

            if (element.className.includes('active')) {
                rate = idx + 1
            }
        });
       if(rate==0||content===''){
           window.confirm("please check review form again !")
       }else{
        const {fn_userPostReview}=this.props
        fn_userPostReview({rate,content})
       }

    }
    render() {
        return (
            <div className="loggin has-login">
                <p>THÊM ĐÁNH GIÁ </p>
                <div className="evaluate">
                    <p> your evaluate</p>
                    <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <textarea className="review" name id cols={30} rows={10} placeholder="your review ..." defaultValue={""} />
                </div>
                <button onClick={this.checkUserPostValid} className="button send-to " value="Send Email">Send to ... </button>
            </div>
        )
    }
}
