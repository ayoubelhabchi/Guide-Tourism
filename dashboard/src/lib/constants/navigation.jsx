import { 
    RiUserSettingsLine,
    RiMapPinUserLine
} from "react-icons/ri";
import { MdModeOfTravel } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiCampfire } from "react-icons/gi";










export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Dashboard',
		label: 'Dashboard',
		path: '/',
        icon: <LuLayoutDashboard />

	},
	{
		key: 'Users',
		label: 'Users',
		path: '/users',
        icon: <RiUserSettingsLine />

	},
	{
		key: 'Guides',
		label: 'Guides',
		path: '/guides',
        icon: <RiMapPinUserLine />

	},
	{
		key: 'Tours',
		label: 'Tours',
		path: '/tours',
        icon: <MdModeOfTravel />

	},
	{
		key: 'Camping',
		label: 'Camping',
		path: '/camping',
        icon: <GiCampfire />

	},
	{
		key: 'Chat',
		label: 'Chat',
		path: '/chat',
        icon: <IoChatbubblesOutline />

	},
	{
		key: 'Payment',
		label: 'Payment',
		path: '/payment',
        icon: <MdOutlinePayment />

	}
]

