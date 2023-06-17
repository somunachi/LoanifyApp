import { useEffect, useState } from 'react'
import css from './client.module.css'
import { ClientInfo } from './ClientData';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'



const Client = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrint, setIsOpenPrint] = useState(false);
  const [isOpenExport, setIsOpenExport] = useState(false);
  const [selectFormatExport, setSelectFormatExport] = useState(false);
  const [selectFormatPrint, setSelectFormatPrint] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All'); 


  useEffect(()=>{
    setFilteredData(ClientInfo)
  }, [searchQuery])


//for filter
  const handleFilterToggle = () => {
    setIsOpen(!isOpen)
   }

   const handleFilterClose = () => {
    setIsOpen(false)
  }

  //for filter options
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleFilterClick = (status) => {
    setFilterStatus(status);
    setIsOpen(false);
  };


//for print
    const handlePrintToggle = () => {
    setIsOpenPrint(!isOpenPrint)
    setIsOpenExport(false)
   }
   
   const handlePrintClose = () => {
    setIsOpenPrint(false)
  }

  const handleSelectFormatPrintToggle = () => {
    setSelectFormatPrint(!selectFormatPrint)
  }

  //for export
  const handleExportToggle = () => {
    setIsOpenExport(!isOpenExport)
    setIsOpenPrint(false)
   }
   
   const handleExportClose = () => {
    setIsOpenExport(false)
  }

  const handleSelectFormatExportToggle = () => {
    setSelectFormatExport(!selectFormatExport)
  }

  //for search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearch(e.target.value);
  };

  //for checkbox change
  const handleCheckboxChange = (e, clientId) => {
    const updatedData = filteredClients.map((client) => {
      if (client.id === clientId) {
        console.log(client)
        return { ...client, checked: e.target.checked };
       
      }
      console.log(client.id);
      return client;
    });
    setFilteredData(updatedData);
  };

const handleAllCheckChange = (e) => {
  const updatedData = filteredClients.map((client) => ({
    ...client,
    checked: e.target.checked
  }));
  setFilteredData(updatedData);
}
  
const filteredClients = filterStatus === 'All' ? ClientInfo : ClientInfo.filter((client) => client.LoanStatus === filterStatus);

  return (
    <main className={css.main_container}>
      
       <div className={css.details_client_client}>
        <div className={css.component1_client_block}>
        <div className={css.component1_client}>
                   <div className={css.component101}>
                   <i className={`bi bi-search ${css.searchicon}`}></i>
                    <input type="text" placeholder='Muhammadu Buhari' className={css.search} value={searchQuery} onChange={handleSearchChange}/>
                   </div>
                    
                    <div className={css.filter_dropdown}>
                    <button type='button' className={css.filter} onClick={handleFilterToggle}>Filter </button>
                    <i className={`bi bi-funnel ${css.funnel}`}></i>
                   {isOpen && (
                     <div className={css.dropdown_menu}>
                     <i className={`bi bi-x ${css.cancel}`} onClick={handleFilterClose}></i>
                        <ul value={selectedOption} onChange={handleOptionChange}> 
                             <li className={css.filter_items} onClick={() => handleFilterClick('All')}>All</li>
                             <li className={css.filter_items} onClick={() => handleFilterClick('Approved')}>Approved</li>
                             <li className={css.filter_items} onClick={() => handleFilterClick('Pending Review')}>Pending</li>
                             <li className={css.filter_items} onClick={() => handleFilterClick('Declined')}>Declined</li>
                        </ul>
                     </div>
                   )}
                    </div>
                </div>

                <div className={css.component2}>
                 <div className={css.print_btn}>
                 <button type='button' className={css.print} onClick={handlePrintToggle}>Print</button>
                    {isOpenPrint && (
                     <div className={css.select_format}>
                     <IoIosClose className={css.cancel2} onClick={handlePrintClose}/>
                       <div className={css.format_text}>
                        <p onClick={handleSelectFormatExportToggle}>Select Format <BiChevronDown /></p>
                        </div>
                       
                        {selectFormatExport && (
                        <div className={css.select_options}>
                          <p className={css.options}>PDF</p>
                          <p className={css.options}>Excel</p>
                          <p className={css.options}>CSV</p>
                        </div>
                       )}
                     </div>
                   )}
                </div>
                  <div className={css.export_btn}>
                  <button type='button' className={css.export} onClick={handleExportToggle}>Export Data</button>
                    {isOpenExport && (
                      <div className={css.select_format}>
                        <IoIosClose className={css.cancel2} onClick={handleExportClose}/>
                        <div className={css.format_text}>
                        <p onClick={handleSelectFormatPrintToggle}>Select Format <BiChevronDown /> </p>
                        </div>
                            {selectFormatPrint && (
                              <div className={css.select_options}>
                                <p className={css.options}>PDF</p>
                                <p className={css.options}>Excel</p>
                                <p className={css.options}>CSV</p>
                              </div>
                       )}
                      </div>
                   )}
                  </div>
                </div>
        </div>
                
        <div className={css.clientsblock}>
        <div className={css.clientsdata}>
        <input type="checkbox" name="checkall" id="check" onChange={handleAllCheckChange} className={css.check}/>
          <h3>Application Number</h3>
          <h3>Full Name</h3>
          <h3>Loan Status</h3>
          <h3>Date</h3>
        </div>
      </div>

       </div>
       <section className={css.client_table}>
        <div>
          <div className={css.ClientInfo_Block_Container}>

            {filteredClients.map((client) => {
               if (
                            searchQuery &&
                            !(
                              client.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              client.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                  ) {
                            return null;
                    }

              let statusStyle = {};
              let statusColor = {};
              if (client.LoanStatus === 'Approved') {
                statusStyle.backgroundColor = '#00D43D';
                statusColor.color = '#00D43D';
              } else if (client.LoanStatus === 'Declined') {
                statusStyle.backgroundColor = '#DE4573';
                statusColor.color = '#DE4573';
              } else {
                statusStyle.backgroundColor = '#F6C750';
                statusColor.color = '#F6C750';
              }
            
              return (
                <div key={client.id} className={css.clientinfo}>
                  <input
                    type="checkbox"
                    name="check" 
                    id="check" 
                    className={css.check} 
                    checked={client.checked}
                    onChange={(e) => handleCheckboxChange(e, client.id)}
                    />
                     <Link to='/clientprofile/overview'>
                  <div className={css.clientinfo2}>{client.applicationNumber}</div>
                    
                  </Link>
                  <div>{client.fullName}</div>
                  <div>
                    <span className={css.statusDot} style={statusStyle}></span>
                    <span style={statusColor}>{client.LoanStatus}</span>
                  </div>
                  <div>{client.Date}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Client;