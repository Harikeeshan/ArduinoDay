import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Hidden } from '@mui/material';
import { fontGrid } from '@mui/material/styles/cssUtils';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const style = {
    agendarowStyle: 'w-[100%] h-[4rem] flex justify-center items-center md:h-[3.5rem]',
    agendaDescriptionStyle: 'font-normal text-lg text-[#000000b6] lg:text-left',
    lgDescriptionStyle: 'text-center lg:ml-0 lg:mr-auto',
  };

  return (
    <section id='agenda' className='mt-12 p-3 justify-center flex-col md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:gap-[11rem]'>

      <div>
        <h1 className='uppercase text-4xl font-semibold text-80 px-3'>Agenda</h1>
        <p className='font-normal text-[#0e0e0e8a] px-3'>We are conducting this program for two days.</p>
        <img src="/agendaImg.png" alt="agenda-image" className='px-3 mb-10 mt-7 lg:mt-[15rem]' />
      </div>

      <div className='lg:mt-[7rem] '>
        <Box sx={{ width: '100%' }} className="flex flex-col">
          <Box sx={{ borderBottom: 0, borderColor: 'divider', padding: 0, width: '11.25rem', marginLeft: 3 }}>
            <Tabs
              className="flex justify-around"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{ hidden: true }}

              sx={{
                "& button": { borderRadius: 10, height: '2rem!important', color: '#F26727', fontSize: 12, fontFamily: 'roboto' },
                "& button.Mui-selected": { backgroundColor: '#F26727', color: 'white' },
                "& div": { backgroundColor: '#ffe4dc', borderRadius: 10, maxWidth: '11.25rem' }
              }}
            >
              <Tab label="Day 1" {...a11yProps(0)} sx={{ padding: 0 }} />
              <Tab label="Day 2" {...a11yProps(1)} sx={{ padding: 0 }} />
            </Tabs>
          </Box>




          {/*<----Agenda day01 tab start----> */}

          <TabPanel value={value} index={0}>
            <div className='bg-[#ffe4dc] h-[42rem] md:h-[39rem] w-[auto] md:w-[30rem] rounded-2xl'>
              <div className='flex h-[7rem] rounded-xl flex-col md:flex md:flex-row'>
                <div className='w-[100%] flex justify-center md:justify-start md:pl-6 items-center pt-5 md:pt-5 md:w-[80%]'>
                  <div className='bg-[#ffe4d] rounded-3xl border-[1px] border-80 p-1 font-normal h-[2rem] w-[80%] md:w-[80%] flex justify-around'>
                    In-Person Event
                  </div>
                </div>
                <div className='w-[100%] md:items-center md:pr-8 pt-4 md:pt-5'>
                  <div className='flex flex-col md:pt-5'>
                    <h4 className='text-center md:text-right'>24th of March 2023</h4>
                    <p className='text-center font-normal text-[#0e0e0e8a] md:text-right'> St. John&apos;s College Nugegoda</p>
                  </div>
                </div>
              </div>

              <hr className='border-[1px] border-10 mx-5 mt-5' />

              <div className=' w-[100%] h-[33rem] rounded-xl p-3 flex justify-between'>

                {/* col-1 */}

                <div className='w-[35%] h-[31.5rem]'>
                  {/* row-1 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>08:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>09:00</p>
                    </div>
                  </div>
                  {/* row-1 */}

                  {/* row-2 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>09:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>09:20</p>
                    </div>
                  </div>
                  {/* row-2 */}

                  {/* row-3 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>09:20</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>09:30</p>
                    </div>
                  </div>
                  {/* row-3 */}

                  {/* row-4 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>09:45</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>12:00</p>
                    </div>
                  </div>
                  {/* row-4 */}

                  {/* row-5 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>12:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>12:30</p>
                    </div>
                  </div>
                  {/* row-5 */}

                  {/* row-6 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>14:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>15:00</p>
                    </div>
                  </div>
                  {/* row-6 */}

                  {/* row-7 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>15:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>17:45</p>
                    </div>
                  </div>
                  {/* row-7 */}

                  {/* row-8 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>17:45</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>18:00</p>
                    </div>
                  </div>
                  {/* row-8 */}
                </div>

                {/* col-1 */}


                {/*col-2 */}

                <div className='w-[63%] h-[31.5rem'>

                  {/* row-1 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Registration Confirmation</h1>
                    </div>
                  </div>
                  {/* row-1 */}

                  {/* row-2 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Event Start & Welcome</h1>
                    </div>
                  </div>
                  {/* row-2 */}

                  {/* row-3 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Challenge Explanation</h1>
                    </div>
                  </div>
                  {/* row-3 */}

                  {/* row-4 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Challenge</h1>
                    </div>
                  </div>
                  {/* row-4 */}

                  {/* row-5 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Lunch</h1>
                    </div>
                  </div>
                  {/* row-5 */}

                  {/* row-6 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Challenge</h1>
                    </div>
                  </div>
                  {/* row-6 */}

                  {/* row-7 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Start to the Judge</h1>
                    </div>
                  </div>
                  {/* row-7 */}

                  {/* row-8 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Vote of Thanks</h1>
                    </div>
                  </div>
                  {/* row-8 */}

                </div>

                {/*col-2 */}

              </div>

            </div>
          </TabPanel>

          {/*<----Agenda day01 tab end----> */}




          {/*<----Agenda day02 tab start----> */}

          <TabPanel value={value} index={1}>
            <div className='bg-[#ffe4dc] h-[42rem] md:h-[39rem] w-[auto] md:w-[30rem] rounded-2xl'>
              <div className='flex h-[7rem] rounded-xl flex-col md:flex md:flex-row'>
                <div className='w-[100%] flex justify-center md:justify-start md:pl-6 items-center pt-5 md:pt-5 md:w-[80%]'>
                  <div className='bg-[#ffe4d] rounded-3xl border-[1px] border-80 p-1 font-normal h-[2rem] w-[80%] md:w-[80%] flex justify-around'>
                    In-Person Event
                  </div>
                </div>
                <div className='w-[100%] md:items-center md:pr-8 pt-4 md:pt-5'>
                  <div className='flex flex-col md:pt-5'>
                    <h4 className='text-center md:text-right'>25th of March 2023</h4>
                    <p className='text-center font-normal text-[#0e0e0e8a] md:text-right'> St. John&apos;s College Nugegoda</p>
                  </div>
                </div>
              </div>

              <hr className='border-[1px] border-10 mx-5 mt-5' />

              <div className=' w-[100%] h-[33rem] rounded-xl p-3 flex justify-between'>

                {/* col-1 */}

                <div className='w-[35%] h-[31.5rem]'>
                  {/* row-1 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>08:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>09:00</p>
                    </div>
                  </div>
                  {/* row-1 */}

                  {/* row-2 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>09:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>09:30</p>
                    </div>
                  </div>
                  {/* row-2 */}

                  {/* row-3 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>09:30</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>10:15</p>
                    </div>
                  </div>
                  {/* row-3 */}

                  {/* row-4 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>10:30</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>11:15</p>
                    </div>
                  </div>
                  {/* row-4 */}

                  {/* row-5 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>11:45</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>12:30</p>
                    </div>
                  </div>
                  {/* row-5 */}

                  {/* row-6 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>13:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>13:45</p>
                    </div>
                  </div>
                  {/* row-6 */}

                  {/* row-7 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>14:00</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>14:45</p>
                    </div>
                  </div>
                  {/* row-7 */}

                  {/* row-8 */}
                  <div className={style.agendarowStyle}>
                    <div className='text-right'>
                      <h1 className='font-normal text-xl'>15:15</h1>
                      <p className='font-normal text-[#0e0e0e8a] p-0 m-0'>16:00</p>
                    </div>
                  </div>
                  {/* row-8 */}
                </div>

                {/* col-1 */}


                {/*col-2 */}

                <div className='w-[63%] h-[31.5rem]'>

                  {/* row-1 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Registration Confirmation</h1>
                    </div>
                  </div>
                  {/* row-1 */}

                  {/* row-2 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Welcome & Chief Guest Speech</h1>
                    </div>
                  </div>
                  {/* row-2 */}

                  {/* row-3 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>First Speaker</h1>
                    </div>
                  </div>
                  {/* row-3 */}

                  {/* row-4 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Second Speaker</h1>
                    </div>
                  </div>
                  {/* row-4 */}

                  {/* row-5 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Third Speaker</h1>
                    </div>
                  </div>
                  {/* row-5 */}

                  {/* row-6 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Fourth Speaker</h1>
                    </div>
                  </div>
                  {/* row-6 */}

                  {/* row-7 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Fifth Speaker</h1>
                    </div>
                  </div>
                  {/* row-7 */}

                  {/* row-8 */}
                  <div className={style.agendarowStyle}>
                    <div className={style.lgDescriptionStyle}>
                      <h1 className={style.agendaDescriptionStyle}>Award Ceremony & Vote of Thanks</h1>
                    </div>
                  </div>
                  {/* row-8 */}

                </div>

                {/*col-2 */}

              </div>

            </div>
          </TabPanel>

          {/*<----Agenda day01 tab end----> */}




        </Box>
      </div>
    </section>
  );
}
