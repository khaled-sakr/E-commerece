const containerInput = "ml-2 flex flex-col sm:w-9/12 w-9/12 min-w-min";
const input = "text-black rounded-sm text-xs p-2 outline-none h-6 mt-1";
function MessageFooter() {
  return (
    <div className="sm:text-2xl text-base m-auto sm:w-5/12 xs:w-4/12 w-fit ">
      <form className="flex flex-col md:text-base sm:text-sm text-xs min-w-min sm:mt-6 mt-4 space-y-2 w-full">
        <span className="text-lg w-48">Write something to us :</span>
        <div className={containerInput}>
          <label for="email">Enter Your E-mail:</label>
          <input type="text" id="email" className={input} required />
        </div>
        <div className="ml-2 flex  flex-col sm:w-9/12 w-9/12 min-w-min">
          <label for="name">Enter Your name:</label>
          <input type="text" id="name" className={input} required />
        </div>
        <div className={containerInput}>
          <label for="message">Enter Your message:</label>
          <textarea
            className="text-black rounded-sm text-xs p-2 outline-none sm:h-28 h-16 mt-1"
            type="text"
            id="message"
            required
          />
        </div>

        <div className="ml-2 space-x-3">
          <input
            className="border-white hover:border-stone-700 rounded-[3px] border px-2 md:px-4 md:py-2 py-1 cursor-pointer hover:text-stone-700"
            type="reset"
            id="email"
          />
          <input
            className="hover:border-stone-800 border-white border rounded-[3px] px-2 md:px-4 md:py-2 py-1 cursor-pointer hover:text-stone-700"
            type="submit"
            id="email  "
          />
        </div>
      </form>
    </div>
  );
}

export default MessageFooter;
