import { NavLink } from 'react-router-dom'

interface SideBarMenuItemsProps {
    to: string;
    icon: string;
    title: string;
    description: string;
}
export const SideBarMenuItems = ({to,icon,title,description}:SideBarMenuItemsProps) => {
  return (
    <NavLink 
    to={to}
    className={
      ({isActive})=>
        isActive?'flex justify-center items-center bg-blue-800 rounded-md p-2 transition-colors'
        :'flex justify-center items-center hover:bg-blue-800 rounded-md transition-colors'
    }
      
      >
        <i className={`${icon} text-2xl mr-4 text-indigo-400`}></i>
        <div className="flex flex-col flex-grow">

        <span className="text-white text-lg font-semibold">
        {title}
        </span>
        <span className="text-gray-400 text-sm">
          {description}
        </span>
        </div>
      </NavLink>
  )
}
