import { FullScreen } from './Icons'

export const PreviewProduct = () => {
  return (
        <>
            <div className="flex justify-end my-2 ">
                <div className="bg-black w-[50px] h-[40px] mb-1 rounded-full flex justify-center items-center text-center text-white">
                    <span className=" text-ellipsis text-sm">Sold out</span>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className="h-max w-[300px]" src="http://placehold.it/300x300/999/CCC" alt="" />
            </div>
            <div className="flex justify-start ">
                <div className="bg-black m-[5px] w-[25px] h-[20px] rounded-full flex justify-center items-center text-center text-white">
                    <FullScreen />
                </div>
            </div>
        </>
  )
}
