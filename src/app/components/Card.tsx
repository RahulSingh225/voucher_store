export default function Card() {
    return (
      <div className="card bg-amber-100 w-full sm:w-96 shadow-xl mx-auto ">
        {/* Image */}
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="w-full h-48 object-cover"
          />
        </figure>
  
        {/* Card Body */}
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title text-sm sm:text-base cfont-bold">
            Shoes!
            <div className="badge badge-secondary text-xs sm:text-sm lg:text-base">
              NEW
            </div>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            If a dog chews shoes, whose shoes does he choose?
          </p>
  
          {/* Badges */}
          <div className="card-actions flex flex-wrap justify-between items-center mt-2">
            <div className="badge badge-outline text-xs sm:text-sm lg:text-base">
              Fashion
            </div>
            <div className="badge badge-outline text-xs sm:text-sm lg:text-base">
              Products
            </div>
          </div>
  
          {/* Button */}
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-aqua w-full sm:w-auto text-sm sm:text-base lg:text-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  