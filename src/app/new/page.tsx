import { MdAddAPhoto } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

export default function NewAdPage() {
  return (
    <form action="" className="max-w-xl gap-8 mx-auto flex">
      <div className="grow pt-8">
        <div className="bg-purple-200 p-4 rounded-md">
          <h2 className="font-bold text-center capitalize text-purple-800 text-xl">
            Add Product Image
          </h2>
          <button className="hover:bg-purple-800 font-bold px-2 py-1 text-center bg-transparent text-purple-800 rounded border flex align-middle justify-center w-full items-center gap-1 hover:text-white border-purple-600 duration-500 ease-in-out mt-2">
            <MdAddAPhoto className="text-xl" />
            Add Photos
          </button>
        </div>
      </div>

      <div className="grow">
        <label htmlFor="titleIn">Product Name</label>
        <input id="titleIn" type="text" placeholder="Product Name" />
        <label htmlFor="priceIn">Product Price</label>
        <input type="number" min={0} id="priceIn" placeholder="Product Price" />
        <label htmlFor="categoryIn">Product Category</label>
        <select name="" id="categoryIn">
          <option selected disabled value="">
            Select Category
          </option>
          <option value="">Artisan Products</option>
          <option value="">Clothings</option>
          <option value="">Woman Hygine</option>
          <option value="">Woman Security</option>
          <option value="">Others</option>
        </select>
        <label htmlFor="descriptionIn">Product Description</label>
        <textarea
          className="resize-none h-60"
          name=""
          id="descriptionIn"
          placeholder="Product Description"
        ></textarea>
        <label htmlFor="contactIn">Contact Info</label>
        <textarea
          className="resize-none h-32"
          name=""
          id="contactIn"
          placeholder="Contact Info"
        ></textarea>
        <button className="hover:bg-purple-800 font-bold px-2 py-1 bg-transparent text-purple-800 rounded border flex align-middle justify-center items-center gap-1 hover:text-white border-purple-600 duration-500 ease-in-out mt-2">
          <AiFillProduct className="text-xl" />
          Add Product
        </button>
      </div>
    </form>
  );
}
