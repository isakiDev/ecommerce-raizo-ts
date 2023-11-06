import { HeartTransparent, Random } from './Icons'

export const InfoProduct = () => {
  return (
        <>
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

            <div className='flex justify-left items-center [&>a]:mr-3 [&>svg]:w-[25px] [&>svg]:h-[25px] [&>a]:cursor-pointer [&>svg]:cursor-pointer'>
                <Random />
                <a>Compare</a>
                <HeartTransparent />
                <a>Add list</a>
            </div>
        </>
  )
}
