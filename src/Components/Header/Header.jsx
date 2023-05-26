import LogoImg from "../../assets/header-imgs/logo.svg"
import modeIcon from "../../assets/header-imgs/mode.svg"
import bellIcon from "../../assets/header-imgs/bell.svg"
import avatar from "../../assets/header-imgs/avatar.svg"
import searchIcon from "../../assets/header-imgs/search.svg"

export function Header(){
  return (
    <header className='flex mt-8 justify-center items-center '>
      <img src={LogoImg} alt='logo' className='w-10.75 h-10.75'/>
      <div className="relative">
        <input type="text" className=' bg-elements-bg py-2.5 px-7.5 w-48 h-12.5 rounded-lg font-poppins placeholder:text-placeholder-input 
        focus: text-white 
        placeholder-input 
        drop-shadow-lg ml-2.5 
        outline-none 
        pl-9
        pr-2
        ' 
        placeholder='Search Here'/>
        <div className="absolute left-3 top-0 h-full flex justify-center items-center">
          <img src={searchIcon} alt="search-icon" /> 
        </div>
      </div>
      <button type='button' className='mx-2.5 h-4.75 w-4.75'>
        <img src={modeIcon} alt="icon-mode"/>
      </button>
      <button type='button' className='mr-3.5 w-4 h-4.5'>
        <img src={bellIcon} alt="notifications"  />
      </button>
      <img src={avatar} alt="" />
    </header>
  )
}