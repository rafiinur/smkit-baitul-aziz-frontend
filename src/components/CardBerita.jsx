const CardBerita = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-lg mx-auto mb-6 w-4/5">
      <figure>
        <img
          src="https://placehold.co/300x180"
          alt="Album"
          className="lg:w-full lg:h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  )
}

export default CardBerita
