import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-black w-full flex justify-center items-center py-2'>
            <div className="btns w-1/3 flex justify-around items-center">
                <NavLink className='p-2 text-black font-semibold text-lg px-4 min-w-[130px] flex justify-center bg-slate-200 m-2  rounded-lg' to={'/'}>Add Event</NavLink>
                <NavLink className='p-2 text-black font-semibold text-lg px-4 min-w-[130px] flex justify-center bg-slate-200 m-2 rounded-lg' to={'/events'}>Events</NavLink>
            </div>
        </div>
    )
}

export default Navbar
