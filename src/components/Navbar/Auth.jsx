import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'

function Auth() {

    const user = {
        name: 'Shinga',
        avatar: 'https://i.scdn.co/image/ab67616d0000b273e721e0f37e8b68203a2a3480'
    }

  return (
    <Menu as="nav" className={"relative"}>
        {({open}) => (
            <>
                <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active mr-6`}>
                    <img src={user.avatar} alt="" className='w-8 h-8 rounded-full p-px mr-2' />
                    <span className='text-sm font-semibold mr-2'>{user.name}</span>
                    <span className={open && 'rotate-180'}>
                        <Icon size={16} name='downDir'/>
                    </span>
                </Menu.Button>
                <Menu.Items className={"absolute p-1 top-full- right-0 w-48 bg-active rounded-md translate-y-2"}>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#!"
                        >
                        Account
                        <Icon size={16} name="external" />
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#!"
                        >
                        Profile
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#!"
                        >
                        Log out
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

export default Auth