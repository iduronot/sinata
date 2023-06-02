import { Box, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import TitlePage from '../../common/components/atoms/TitlePage'
import HeaderBreadcrumbs from '../../common/components/molecules/HeaderBreadcrumbs'
import Link from 'next/link'
import { TabContext, TabPanel } from '@mui/lab'
import TabsContainer from '../../common/components/atoms/TabsContainer'
import TabItem from '../../common/components/atoms/TabItem'
import Image from 'next/image'
import LiveStreamingForm from '../../common/components/organism/LiveStrForm'
import PublikasiAgendaForm from '../../common/components/organism/PublikasiAgendaForm'
import MajalahForm from '../../common/components/organism/MajalahForm'
import OpiniForm from '../../common/components/organism/OpiniForm'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { listMenuUser } from './dashboard'

export default function LayananPublikasi() {
    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
  return (
    <Box className='bg-grey'>
        <TitlePage title='Layanan Publikasi - Sinata' />
        <DashboardPanel listMenu={listMenuUser}>
            <HeaderBreadcrumbs pageHeader='Ajukan Layanan Publikasi' currentPage='Layanan Publikasi'>
                <Link href='#' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                    Ajukan Layanan
                </Link>
            </HeaderBreadcrumbs>
            <Grid container spacing={2}>
                <Grid item spacing={1} xs={12} md={8}>
                    <Paper className='shadow-md px-6 py-4'>
                        <TabContext value={value}>
                            <Box className='flex justify-center'>
                                <TabsContainer onChange={handleChange} value={value}>
                                    <TabItem label='Layanan Live Streaming' value='1' />
                                    <TabItem label='Layanan Publikasi Agenda UNS' value='2' />
                                    <TabItem label='Layanan Publikasi di Majalah UNS' value='3' />
                                    <TabItem label='Layanan Opini di Media' value='4' />
                                </TabsContainer>
                            </Box>
                            <Stack className='-mx-6'>
                                <TabPanel value='1'>
                                    <LiveStreamingForm />
                                </TabPanel>
                                <TabPanel value='2'>
                                    <PublikasiAgendaForm />
                                </TabPanel>
                                <TabPanel value='3'>
                                    <MajalahForm />
                                </TabPanel>
                                <TabPanel value='4'>
                                    <OpiniForm />
                                </TabPanel>
                            </Stack>
                        </TabContext>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className='shadow-md p-4'>
                        <Image src='https://dummyimage.com/560x1000/e0e0e0/ffffff.jpg&text=Infografis+guideline+(560x1000)' alt='Infografis Panduan' layout='responsive' width={100} height={200} className='rounded-md' />
                    </Paper>
                </Grid>
            </Grid>
        </DashboardPanel>
    </Box>
  )
}