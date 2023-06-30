
export const GifItem = ({title, url, type}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <h4>{title}</h4>
        <p> <span>Type:</span> {type}</p>
    </div>
  )
}
