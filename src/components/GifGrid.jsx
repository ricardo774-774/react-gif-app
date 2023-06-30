import { GifItem } from "./GifItem";
import { Spinner } from "./Spinner";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>

            {
                isLoading
                    ? <Spinner/>
                    : null
            }

            <h3 className="card-title">{category}</h3>

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
