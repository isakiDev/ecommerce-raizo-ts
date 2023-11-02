import image from '../assets/banner.jpg'

export const Banner = () => {
  return (
    <div className='h-screen bg-cover bg-center bg- bg-blend-overlay bg-black/20' style={{ backgroundImage: `url(${image})` }}/>
  )
}
