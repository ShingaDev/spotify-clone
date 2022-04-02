import { Icon } from 'Icons'
import React from 'react'

function DownloadApp() {
  return (
    <a href='#!' className='h-10 flex flex-shrink-0 transition-all delay-2 text-sm font-semibold text-link hover:text-white items-center gap-x-4 px-6'>
        <Icon name={"download"} size={22}/>
        Uygulamayı Yükle
    </a>
  )
}

export default DownloadApp