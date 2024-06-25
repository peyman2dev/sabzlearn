import { InfoCircle } from 'iconsax-react'
import _ from 'lodash'
import React from 'react'

const SessionsList = ({sessions, switchTabTo}) => {
  return (
    <div>
        {sessions && sessions.length ?
        _.map(sessions, (session,index) => (
            <div key={session._id} className='flex items-center text-sm h-12 justify-between'>
              <div className='flex items-center gap-1.5'> 
                <span>
                  {index + 1}
                </span>
                <span>
                  {session.title}
                </span>
              </div>
            </div>
        ))
        :
        <div>


        <div className='py-3 flex items-center justify-between gap-2 rounded-md bg-sky-600/5 border border-sky-600/30 text-sm px-6 text-sky-600'>
        <div className='flex items-center gap-3'>
            <InfoCircle />
            متاسفانه جلسه ای برای این دوره پیدا نشد !
        </div>
        <button onClick={switchTabTo} className='px-3 py-1.5 text-sm rounded-md bg-gradient-to-t from-sky-600 to-sky-600/80 active-animation text-white border-t border-sky-400/10 border-r duration-150 hover:bg-opacity-80'>
            ایجاد جلسه
        </button>
        </div>
        </div>
        }
    </div>
  )
}

export default SessionsList