import { FullScreen, Random } from '../components/Icons'

export const ProductView = () => {
  return (
    <div className=' bg-neutral-900 grid grid-cols-1'>
      <section id='image' className="px-4 pt-[20px]">
        <div className="flex justify-end py-2 ">
          <div className="bg-black w-[50px] h-[40px] mb-1 rounded-full flex justify-center items-center text-center text-white">
            <span className=" text-ellipsis text-sm">Sold out</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="h-max w-[300px]" src="" alt="" />
        </div>
        <div className="flex justify-start ">
          <div className="bg-black p-[5px] w-[35px] h-[35px] rounded-full flex justify-center items-center text-center text-white">
            <FullScreen/>
          </div>
        </div>
      </section>
      <section id='description' className='px-4 pt-[20px] text-white'>
        <nav className='text-sm'>
          <a href="">home / </a>
          <a href="">category / </a>
          <a href="">brand category</a>
        </nav>
        <h1 className='text-2xl pt-[10px]'>Nombre</h1>
        <h1 className='text-xl pt-[10px]'>$Precio</h1>
        <ul className='pt-[10px] list-disc pl-4 text-sm'>
          <li>characteristic</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
        </ul>
        <h1 className='pt-[10px] text-red-600'>Agotado</h1>
        <div className='grid grid-cols-2 pt-[10px]'>
          <div>
            <div className="w-[35px] h-[35px] flex justify-center items-center">
              <Random/>
            </div>
            <p className='text-sm'>Compare</p>
          </div>
        </div>
      </section>
    </div>
  )
}
