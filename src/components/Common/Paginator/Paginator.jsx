    import React, {useState} from "react";
    import s from "../../Users/Users.module.css"

    let Paginator = (props, {portionSize = 20}) => {
        let pagesCount = Math.ceil(props.totalCount / props.pageSize)
        let pagesArray = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }

        let portionCount = Math.ceil(pagesCount / portionSize);
        let [portionNumber, setPortionNumber] = useState(1);
        let leftPortion = (portionNumber - 1) * portionSize + 1;
        let rightPortion = portionNumber * portionSize;

        return <div className={s.paginator}>

            { portionNumber > 1 &&
            <button className={s.buttonNav} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button> }

            {pagesArray
                .filter(p => (p >= leftPortion) && (p <= rightPortion))
                .map((p) => {
                    return <a className={`${props.currentPage === p && s.selected} ${s.pageNumber}`}
                                 key={p}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</a>
                })}

            { portionCount > portionNumber &&
            <button className={s.buttonNav} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button> }

        </div>
    }

    export default Paginator;