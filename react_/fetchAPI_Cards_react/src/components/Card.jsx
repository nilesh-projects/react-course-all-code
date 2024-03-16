import "./card.css";
export default function Card({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-3 h-[30rem] w-[18rem] overflow-auto">
      <img
        className="w-full h-2/5 rounded-lg mx-auto mb-4 cursor-pointer"
        src={product.image}
        alt="Product Image"
        title={product.title}
      />

      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p
        className="text-slate-800 mb-2"
        title={`category : ${product.category}`}
      >
        {product.category}
      </p>

      <p className="text-gray-700 mb-3 text-wrap">{product.description}</p>

      <div className="flex items-center">
        <span className="text-3xl font-bold mr-2">{product.price}</span>
        <div className="flex items-center text-sm text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1">{product.rating.rate}</span>{" "}
          <span>({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
}
