import { GoChevronUp, GoChevronDown } from 'react-icons/go'

 const OverviewData = [
    {
        id: 1,
        title:'All Loans',
        icon: <GoChevronUp/>,
        range: '15%',
        amount: '250M'
    },
    {
        id: 2,
        title:'New Applications',
        icon: <GoChevronUp/>,
        range: '40%',
        amount: '35'
    },
    {
        id: 3,
        title:'Pending Loans',
        icon: <GoChevronDown/>,
        range: '5%',
        amount: '30'
    },
    {
        id: 4,
        title:'Active Loans',
        icon: <GoChevronUp/>,
        range: '12%',
        amount: '60'
    },
    {
        id: 5,
        title:'Due Loans',
        icon: <GoChevronUp/>,
        range: '5%',
        amount: '75M'
    },
    {
        id: 6,
        title:'Extended Loans',
        icon: <GoChevronUp/>,
        range: '8%',
        amount: '22M'
    },
    {
        id: 7,
        title:'Defaulted Loans',
        icon: <GoChevronDown/>,
        range: '10%',
        amount: '35M'
    },
    {
        id: 8,
        title:'Closed Loans',
        icon: <GoChevronUp/>,
        range: '45%',
        amount: '98M'
    },

];
export default OverviewData;