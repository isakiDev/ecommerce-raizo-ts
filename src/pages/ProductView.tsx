import { ChevronDown, FullScreen, HeartTransparent, Random } from '../components/Icons'
import { useState } from 'react'

export const ProductView = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false)

  const accordeonOpen = () => {
    setToggleAccordion(!toggleAccordion)
  }

  const isActiveAccordion = toggleAccordion ? '[&>svg]:rotate-180' : '[&>svg]:rotate-0 '
  const isAccordionOpen = toggleAccordion ? 'max-h-40' : 'max-h-0'

  // const ref = useRef<HTMLDivElement>(null)

  // const accordion = () => {
  //   ref.current.classList.toggle('')
  // }

  return (
    <div className=' bg-neutral-900 grid grid-cols-1'>
      <section className="px-4 pt-[20px]">
        <div className="flex justify-end py-2 ">
          <div className="bg-black w-[50px] h-[40px] mb-1 rounded-full flex justify-center items-center text-center text-white">
            <span className=" text-ellipsis text-sm">Sold out</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="h-max w-[300px]" src="http://placehold.it/300x300/999/CCC" alt="" />
        </div>
        <div className="flex justify-start ">
          <div className="bg-black p-[5px] w-[35px] h-[35px] rounded-full flex justify-center items-center text-center text-white">
            <FullScreen />
          </div>
        </div>
      </section>

      <section className='px-4 pt-[20px] text-white [&>h1]:pt-[10px] [&>div]:mt-[10px]'>
        <nav className='text-sm'>
          <a href="">home / </a>
          <a href="">category / </a>
          <a href="">brand category</a>
        </nav>
        <h1 className='text-2xl'>Name</h1>
        <h1 className='text-xl'>$Price</h1>
        <ul className='list-disc pl-4 text-sm'>
          <li>characteristic</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
        </ul>
        <h1 className='text-red-600'>Sold Out</h1>

        <div className='flex justify-left items-center [&>a]:pr-3 [&>svg]:w-[25px] [&>svg]:h-[25px]'>
          <Random />
          <a>Compare</a>
          <HeartTransparent />
          <a>Add list</a>
        </div>
        <div className="w-full mx-auto static border-t border-t-gray-600">
          <div onClick={accordeonOpen}>
            <div className={`[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer flex items-center justify-between [&>svg]:transform [&>svg]:rotate-180 [&>svg]:transition [&>svg]:duration-300 ${isActiveAccordion}`} >
              <span className='text-2xl'>Description</span>
              <ChevronDown />
            </div>
          </div>
          <div className={`${isAccordionOpen} overflow-hidden transition-all duration-200 ease-out`}>
            <h1 className='text-xl'>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci, consequuntur asperiores maxime enim distinctio assumenda necessitatibus porro. Quia dicta explicabo recusandae repellat dolore architecto perspiciatis amet impedit voluptatibus aperiam.</p>
          </div>
        </div>

      </section>
    </div>
  )
}
