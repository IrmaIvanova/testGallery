import React from 'react'
import './Gallery.css'
// массив отображаемых картинок
let img = [
    { id: 1, name: "Pic1", desc: "desc-pic1", url: "https://irmaivanova.github.io/img/rome/big1.JPG" },
    { id: 2, name: "Pic2", desc: "desc-pic2", url: "https://irmaivanova.github.io/img/rome/big2.JPG" },
    { id: 3, name: "Pic3", desc: "desc-pic3", url: "https://irmaivanova.github.io/img/rome/big4.JPG" },
    { id: 4, name: "Pic4", desc: "desc-pic4", url: "https://irmaivanova.github.io/img/rome/big5.JPG" },
    { id: 5, name: "Pic5", desc: "desc-pic5", url: "https://irmaivanova.github.io/img/rome/big11.JPG" },
    { id: 6, name: "Pic6", desc: "desc-pic6", url: "https://irmaivanova.github.io/img/rome/big23.JPG" },
    { id: 8, name: "Pic8", desc: "desc-pic8", url: "https://irmaivanova.github.io/img/rome/big24.JPG" },
    { id: 9, name: "Pic9", desc: "desc-pic9", url: "https://irmaivanova.github.io/img/rome/big26.JPG" },
]
// массив запаса
let moreIMG = [
    { id: 10, name: "Pic10", desc: "desc-pic10", url: "https://irmaivanova.github.io/img/rome/big27.JPG" },
    { id: 11, name: "Pic11", desc: "desc-pic11", url: "https://irmaivanova.github.io/img/rome/big29.JPG" },
    { id: 12, name: "Pic12", desc: "desc-pic12", url: "https://irmaivanova.github.io/img/rome/big36.JPG" },
    { id: 13, name: "Pic13", desc: "desc-pic13", url: "https://irmaivanova.github.io/img/venice/big6.JPG" },
    { id: 14, name: "Pic14", desc: "desc-pic14", url: "https://irmaivanova.github.io/img/venice/big7.JPG" },
    { id: 15, name: "Pic15", desc: "desc-pic15", url: "https://irmaivanova.github.io/img/venice/big9.JPG" },
    { id: 16, name: "Pic16", desc: "desc-pic16", url: "https://irmaivanova.github.io/img/venice/big10.JPG" },
    { id: 17, name: "Pic17", desc: "desc-pic17", url: "https://irmaivanova.github.io/img/venice/big12.JPG" },
    { id: 18, name: "Pic18", desc: "desc-pic18", url: "https://irmaivanova.github.io/img/venice/big13.JPG" },
    { id: 19, name: "Pic19", desc: "desc-pic19", url: "https://irmaivanova.github.io/img/venice/big15a.JPG" },
    { id: 20, name: "Pic20", desc: "desc-pic20", url: "https://irmaivanova.github.io/img/venice/big14.JPG" },
    { id: 21, name: "Pic21", desc: "desc-pic21", url: "https://irmaivanova.github.io/img/venice/big16a.JPG" },
    { id: 22, name: "Pic22", desc: "desc-pic22", url: "https://irmaivanova.github.io/img/venice/big21.JPG" },
    { id: 23, name: "Pic23", desc: "desc-pic23", url: "https://irmaivanova.github.io/img/venice/big24.JPG" },
    { id: 24, name: "Pic24", desc: "desc-pic24", url: "https://irmaivanova.github.io/img/venice/big23.JPG" },
    { id: 25, name: "Pic25", desc: "desc-pic25", url: "https://irmaivanova.github.io/img/venice/big26.JPG" },
    { id: 26, name: "Pic26", desc: "desc-pic26", url: "https://irmaivanova.github.io/img/venice/big28.JPG" },
]
 const Gallery = () => {
    //  state массива отображаемых картинок
    const [imgArr, setImgArr] = React.useState(img)
    // state массива запаса
    const [moreImgArr, setMoreImgArr] = React.useState(moreIMG)



// функция удаления картинки из галлереи
    const deleteImg = (id) => {
        // получает id и методом filter проходится по нему и возвращает массив без этой катинки
        setImgArr(imgArr.filter((item) => item.id !== id))
        const deletedIndexe = imgArr.findIndex((el) => el.id === id)
        // но так как картинку можно добавить снова, она сразу добавляется в массив картинок взапасе таким вот способом.
        setMoreImgArr([...moreImgArr, imgArr[deletedIndexe]])
    }

    // функция для загрузки новых картинок и удаленных картинок из массива запасных.
    const downloadMoreImg = () => {
        if (moreImgArr.length >= 4) {
            // проверяет длину массива картинок, и если она(длина) соответсвует условию больше или равно 4, то вставляет первые 4 картинки по индексу в массив отображаемых изображений
            setImgArr([moreImgArr[0], moreImgArr[1], moreImgArr[2], moreImgArr[3], ...imgArr])
            // и тут же удаляет добавленные картинки из массива запаса.
            setMoreImgArr(moreImgArr.slice(4, moreImgArr.length))
        } else if(moreImgArr.length >= 3){
            // аналогично предыдущим действиям, но срабатывать должно когда объектов в массиве отсатлось не менее трех
            setImgArr([moreImgArr[0], moreImgArr[1], moreImgArr[2], ...imgArr])
            // удалет три первых элемента из массива
            setMoreImgArr(moreImgArr.slice(3, moreImgArr.length))
        }else if(moreImgArr.length >= 2){
            // срабатывает, когда объектов в массиве отсатлось не менее двух
            setImgArr([moreImgArr[0], moreImgArr[1], ...imgArr])
            // удаляет
            setMoreImgArr(moreImgArr.slice(2, moreImgArr.length))
        }else if(moreImgArr.length >= 1){
            // когда в массиве остался последний эллемент
            setImgArr([moreImgArr[0], ...imgArr])
            // удалет его из массива после добавления
            setMoreImgArr(moreImgArr.slice(1, moreImgArr.length))
        }
        else {
            // срабатывает когда массив резерва пустой
            alert("Sorry, no more Imadges")
        }
    }

    return (
        <div className="Wrapper">
            <div className='Container'>
                {/* массив отображаемых картинок мапается из state */}
                {imgArr && imgArr.map((pic) => <div className="img-responsive" key={pic.id}>
                    {/* катинка */}
                    <img src={pic.url} />
                    {/* название картинки отображается изначально, скрывается в css при наведении */}
                    <span className="name-txt position-rage-center"> {pic.name}</span>
                    {/* блок с именем описание и кнопкой удаления, появляеся при наведении */}
                    <div className='HoverBox'>
                        {/* имя */}
                        <p className="range-txt-name ">
                            {pic.name}
                        </p>
                        {/* описание */}
                        <span className="range-txt-desc ">
                            <strong>{pic.desc}</strong>
                        </span>
                        {/* кнопка удаления */}
                        <button onClick={() => deleteImg(pic.id)}>DELETE</button>
                    </div>
                </div>
                )}
            </div>
            {/* кнопка добавления картинок из резерва */}
            <div className="DownloadButton"><button onClick={() => downloadMoreImg()} className="DownloadButton">DOWNLOAD</button></div>
        </div>
    )
}

export default Gallery;