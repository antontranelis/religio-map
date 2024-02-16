
import { MapIcon, GlobeAltIcon, ChatBubbleLeftRightIcon, CalendarDaysIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'

//const iconClasses = `h-6 w-6`
//const submenuIconClasses = `h-5 w-5`

export const routes = [
  {
    path: '/',
    icon: <MapIcon style={{width: 24 }}/>, 
    name: 'Map',
  },
  {
    path: 'http://gitbook.religiodao.wtf/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>,  
    name: 'Light Paper', // name that appear in Sidebar
    blank: true
  },
  {
    path: 'http://bit.ly/webReligio',
    icon: <GlobeAltIcon className="w-6 h-6"></GlobeAltIcon>,  
    name: 'Webpage', // name that appear in Sidebar
    blank: true
  },
  {
    path: 'https://chat.openai.com/g/g-1Ks1GupZt-religio-s-oracle',
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6"></ChatBubbleLeftRightIcon>,  
    name: 'Oracle', // name that appear in Sidebar
    blank: true
  },
  {
    path: 'https://lu.ma/ritualCalendar',
    icon: <CalendarDaysIcon className="w-6 h-6"></CalendarDaysIcon>,  
    name: 'Calendar', // name that appear in Sidebar
    blank: true
  },
  {
    path: 'https://dao-hq.qdevnet.org/0x36edA89C8B966C023D889b08456E960303dD4eBf',
    icon: <BuildingLibraryIcon className="w-6 h-6"></BuildingLibraryIcon>,  
    name: 'DAO', // name that appear in Sidebar
    blank: true
  }
  /**
  {
    path: '/people', // url
    icon: <UsersIcon style={{width: 24 }}/>, // icon component
    name: 'People', // name that appear in Sidebar
  }, */,




  /*
  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu : [
      {
        path: '/login',
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
        name: 'Kanban',
      },
      {
        path: '/register', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Gitlab', // name that appear in Sidebar
      },
      {
        path: '/forgot-password',
        icon: <KeyIcon className={submenuIconClasses}/>,
        name: 'Wiki',
      },
    ]
  }
  */
]

export const bottomRoutes = [

  {
    path: 'http://x.com/religioDAO', // url
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth={0}><path d="M21.387 4.959c1.652 0 3.144.676 4.195 1.762a11.799 11.799 0 0 0 3.648-1.352 5.624 5.624 0 0 1-2.525 3.083c1.16-.136 2.27-.434 3.301-.88a11.549 11.549 0 0 1-2.868 2.886c.011.239.017.479.017.719 0 7.366-5.782 15.863-16.354 15.863-3.245 0-6.268-.926-8.809-2.507.449.052.906.079 1.37.079 2.692 0 5.172-.89 7.139-2.387-2.517-.043-4.641-1.657-5.369-3.87a5.879 5.879 0 0 0 2.594-.094c-2.629-.511-4.611-2.764-4.611-5.467v-.072a5.86 5.86 0 0 0 2.605.698c-1.543-1.001-2.558-2.705-2.558-4.64 0-1.022.284-1.981.779-2.801 2.834 3.371 7.069 5.591 11.847 5.824a5.45 5.45 0 0 1-.149-1.27c0-3.079 2.574-5.575 5.749-5.575zm8.619 2.613zm-8.619-4.613c-3.927 0-7.18 2.869-7.681 6.576-3.213-.646-6.135-2.346-8.235-4.842a1.998 1.998 0 0 0-3.244.255 7.419 7.419 0 0 0-.597 6.434 2.005 2.005 0 0 0-.515 1.341v.072c0 1.959.774 3.777 2.061 5.139-.074.343-.058.702.055 1.046a7.533 7.533 0 0 0 2.298 3.398 9.935 9.935 0 0 1-3.302.169A1.997 1.997 0 0 0 .104 23.87a2 2 0 0 0 .83 2.361 18.653 18.653 0 0 0 9.866 2.808c11.376 0 18.219-8.905 18.352-17.605a13.42 13.42 0 0 0 2.451-2.661 2 2 0 0 0-.454-2.847 2 2 0 0 0-1.919-2.559c-.344 0-.689.088-.999.268a9.6 9.6 0 0 1-2.113.9 7.893 7.893 0 0 0-4.732-1.578z"/></svg>,
    name: 'Twitter', // name that appear in Sidebar
  },
  {
    path: 'mailto:mystic@religiodao.wtf', // url
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>,
    name: 'Mail', // name that appear in Sidebar
  },
  {
    path: 'https://www.youtube.com/@ReligioDAO', // url
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6"  stroke="currentColor" fill="currentColor" ><path d="M512 254.4c0-1.3 0-2.7-.1-4.3-.1-4.6-.2-9.8-.3-15.4-.5-15.9-1.3-31.8-2.5-46.8-1.7-20.6-4.2-37.8-7.7-50.7-7.4-27.4-28.8-48.9-56.2-56.3-16.2-4.3-47.8-7-92.4-8.7-21.2-.8-43.9-1.3-66.6-1.6-7.9-.1-15.3-.2-21.9-.2h-16.8c-6.6.1-14 .1-21.9.2-22.7.3-45.4.8-66.6 1.6-44.6 1.7-76.3 4.4-92.4 8.7-27.4 7.4-48.8 28.8-56.2 56.3-3.5 12.9-5.9 30.1-7.7 50.7-1.3 15-2.1 30.9-2.5 46.8-.2 5.5-.2 10.7-.3 15.4 0 1.7-.1 3.1-.1 4.3v3.2c0 1.3 0 2.7.1 4.3.1 4.6.2 9.8.3 15.4.5 15.9 1.3 31.8 2.5 46.8 1.7 20.6 4.2 37.8 7.7 50.7 7.3 27.4 28.8 49 56.2 56.3 16.1 4.3 47.8 7 92.4 8.7 21.2.8 43.9 1.3 66.6 1.6 7.9.1 15.3.2 21.9.2h16.8c6.6-.1 14-.1 21.9-.2 22.7-.3 45.4-.8 66.6-1.6 44.6-1.7 76.3-4.4 92.4-8.7 27.4-7.3 48.9-28.9 56.2-56.3 3.5-12.9 5.9-30.1 7.7-50.7 1.3-15 2.1-30.9 2.5-46.8.2-5.5.2-10.7.3-15.4 0-1.7.1-3.1.1-4.3v-3.2zm-41.1 3c0 1.2 0 2.5-.1 4.1-.1 4.5-.2 9.4-.3 14.7-.4 15.2-1.2 30.4-2.4 44.5-1.5 18.4-3.7 33.5-6.4 43.6-3.5 13.2-13.9 23.7-27.1 27.1-12 3.2-42.2 5.8-83.3 7.3-20.8.8-43.2 1.3-65.5 1.6-7.8.1-15.1.2-21.6.2h-16.3l-21.6-.2c-22.3-.3-44.7-.8-65.5-1.6-41.1-1.6-71.4-4.1-83.3-7.3-13.1-3.5-23.5-13.9-27.1-27.1-2.7-10.1-4.9-25.2-6.4-43.6-1.2-14.1-1.9-29.3-2.4-44.5-.2-5.3-.2-10.3-.3-14.7 0-1.5-.1-2.9-.1-4.1v-2.7c0-1.2 0-2.5.1-4.1.1-4.5.2-9.4.3-14.7.4-15.2 1.2-30.4 2.4-44.5 1.5-18.4 3.7-33.5 6.4-43.6 3.5-13.2 13.9-23.7 27.1-27.1 12-3.2 42.2-5.8 83.3-7.3 20.8-.8 43.2-1.3 65.5-1.6 7.8-.1 15.1-.2 21.6-.2h16.3l21.6.2c22.3.3 44.7.8 65.5 1.6 41.1 1.6 71.4 4.1 83.3 7.3 13.1 3.5 23.5 13.9 27.1 27.1 2.7 10.1 4.9 25.2 6.4 43.6 1.2 14.1 1.9 29.3 2.4 44.5.2 5.3.2 10.3.3 14.7 0 1.5.1 2.9.1 4.1v2.7zm-265.8 75.2 132.6-77.1-132.6-76v153.1z"/></svg>,
    name: 'Youtube', // name that appear in Sidebar
    blank: true
  }

]