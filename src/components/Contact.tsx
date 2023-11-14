export const Contact = () => {
  return (
    <>
      <div className="my-[10px]">
        <h1 className='text-xl'>Contact Us</h1>
        <p>For more information contact us</p>
        <p>Phone:(+56) 912345678</p>
        <p>Mail: sales@raizo.com</p>
      </div>
      <form className="[&>input]:text-white [&>input]:bg-black [&>input]:border-2 [&>input]:border-[#313131] [&>input]:border-solid [&>input]:h-[42px] [&>input]:w-full [&>input]:text-[14px] [&>input]:outline-none [&>input]:px-[15px] [&>input]:my-[10px] my-[10px] border-t border-gray-700 ">
        <h1 className="text-xl mb-2">Send us a message</h1>
        <p>You name (requerid)</p>
        <input className="focus:border-white" required type="text"/>
        <p>You Email</p>
        <input className="focus:border-white" required type="text"/>
        <p>Message</p>
        <textarea className="w-full min-h-[190px] mt-[10px] px-[15px] bg-black border-2 border-solid border-[#313131] focus:border-white rounded text-white outline-none resize-none" id="" name="" required></textarea>
        <button className="rounded cursor-pointer h-10 w-[100px] text-black bg-[#F3F3F3] leading-[18px]">Send</button>
      </form>
    </>
  )
}
