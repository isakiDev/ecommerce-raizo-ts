import { useState } from 'react'
import { ChevronDown } from './Icons'
import { Contact } from './Contact'

export const DescriptionProduct = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false)

  //   const accordeonOpen = () => {
  //     setToggleAccordion(!toggleAccordion)
  //   }

  const isActiveAccordion = toggleAccordion ? '[&>svg]:rotate-180' : '[&>svg]:rotate-0 '
  const isAccordionOpen = toggleAccordion ? 'h-[1000px]' : 'h-0'
  return (
        <div className="w-full mx-auto static border-t border-t-gray-600 text-white mt-[20px]">
            <div onClick={() => { setToggleAccordion(prev => !prev) } }>
                <div className={`[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer flex items-center justify-between [&>svg]:transform [&>svg]:transition [&>svg]:duration-300 ${isActiveAccordion}`} >
                    <span className='text-2xl text-sky-600'>Description</span>
                    <ChevronDown />
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isAccordionOpen} grid grid-cols-1 lg:grid-cols-3 `}>
                <div className="mb-16 lg:col-span-2 lg:pr-5">
                    <h1 className='text-xl'>Title</h1>
                    <p className='lg:border-b lg:pb-4 border-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci, consequuntur asperiores maxime enim distinctio assumenda necessitatibus porro. Quia dicta explicabo recusandae repellat dolore architecto perspiciatis amet impedit voluptatibus aperiam.</p>
                </div>
                <div className='border-t lg:border-t-0 border-gray-700 lg:mt-0 lg:pt-0 lg:col-start-3'>
                    <Contact/>
                </div>
            </div>
        </div>

  )
}
