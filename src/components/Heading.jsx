export default function Heading() {
  return (
    <>
    <div id="Heading" className="py-6 px-6 text-xl rounded-t-xl bg-black">
        <h2>Write Todo's Here</h2>
        <form className="flex justify-between pt-4 flex-wrap">
          <input type="text" className="rounded-md text-[#1b1b1b] outline-none border-none px-2 py-1 box-border w-[50%] md:w-[48%]" required/>
          <input type="date" className="rounded-md px-2 text-[#1b1b1b] outline-none border-none box-border w-[49%] md:w-[33%]" required/>
          <button className="bg-white text-black px-3 py-1 mt-3 md:mt-0 text-[15px] rounded-md box-border w-[100%] md:w-[17%]">Submit</button>
        </form>
      </div>
    </>
  )
}