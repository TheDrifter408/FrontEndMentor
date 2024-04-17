import { MouseEvent, useState } from 'react';

const images = [
    {
        id:1,
        product:'/image-product-1.jpg',
        thumbnail:'/image-product-1-thumbnail.jpg'
    },
    {
        id:2,
        product:'/image-product-2.jpg',
        thumbnail:'/image-product-2-thumbnail.jpg'
    },
    {
        id:3,
        product:'/image-product-3.jpg',
        thumbnail:'/image-product-3-thumbnail.jpg'
    },
    {
        id:4,
        product:'/image-product-4.jpg',
        thumbnail:'/image-product-4-thumbnail.jpg'
    },
]

type ProductImage = {
    id:number,
    src:string,
    alt:string
}

export default function Images(){
   const [image,setImage] = useState<ProductImage>({
    id:images[0].id,
    src:images[0].product,
    alt:String(images[0].product)
   });

    function carouselClick(e:MouseEvent<HTMLButtonElement>,id:number){
        e.preventDefault();
       const newImage = images.filter((image) => image.id === id);
       setImage({
        id:newImage[0].id,
        src:newImage[0].product,
        alt:String(newImage[0].product)
       })
    }

    return(
        <div className="img-ctn">
            <div className="ctn">
                <div className="img-product">
                    <img key={image.id} src={image.src} alt={image.alt} />
                </div>
                <div className="img-carousel">
                    {
                        images.map((image) => (
                            <button key={image.id} onClick={(e) => carouselClick(e,image.id)}>
                                <img src={image.thumbnail} alt={image.thumbnail} />
                            </button>
                            
                            
                        ))
                    }
                </div>
            </div>
            <div className="img-text">
                <h3>Sneaker Company</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profle sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can over</p>
                <div className="price-ctn">
                    <div>
                        <h2>$125.00</h2><h3>50%</h3>
                    </div>
                    <h3 className="strike"><s>$250.00</s></h3>
                </div>
            </div>
        </div>
    )
}