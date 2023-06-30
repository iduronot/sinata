import TitlePage from '@/common/components/atoms/TitlePage';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { Box, Paper } from '@mui/material';
import React from 'react';
import { listMenuAdmin } from './dashboard';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import Link from 'next/link';
import TableRiwayat from '@/common/components/molecules/TableRiwayat';

export default function SemuaAjuan() {
    return (
        <Box className='bg-white'>
            <TitlePage title='Semua Ajuan Layanan - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Semua Ajuan Layanan' currentPage='Semua Ajuan'>
                    <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Manajemen Layanan
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md xs:p-4 md:p-6'>
                    <TableRiwayat />
                </Paper>
            </DashboardPanel>
        </Box>
    );
}