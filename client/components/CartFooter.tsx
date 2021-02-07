export default function CartFooter() {
  return (
    <footer className="grid-container  sticky bg-white bottom-0 ">
      <main className="col-start-2 col-end-3 flex items-baseline  py-16  justify-between p-4   ">
        <button className="p-2 bg-gray-200 ">Select All</button>
        <button className="p-2 bg-gray-200 ">Remove All</button>
        <p className="text-xl  mr-10 ">
          Merchandise Subtotal (0 items):
          <span className=" text-4xl   text-red-500">$0</span>
        </p>
        <button className="bg-black py-2 px-8 rounded-md transform hover:scale-105 text-white text-lg">
          Check Out
        </button>
      </main>
    </footer>
  );
}
