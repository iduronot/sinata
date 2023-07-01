import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import LayananPeliputan from '@/common/components/organism/FormEditLayanan/LayananPeliputan';
import { getOneLayananPeliputan } from '@/services/layanan-peliputan';
import { Box, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { listMenuAdmin } from '../../dashboard';
import Image from 'next/image';

export default function RiwayatAjuanPage() {
    const { query, isReady } = useRouter();
    const { jenis_layanan, id } = query;

    const [data, setData] = useState<Array<any>>([]);
    const getPeliputan = useCallback(async (id: any) => {
        const response = await getOneLayananPeliputan(id);
        setData(response.data);
    }, []);

    useEffect(() => {
        if (isReady) {
            getPeliputan(id);
        }
    }, [isReady, id]);
    // if (jenis_layanan === 'Layanan Peliputan') {
    // }
    // console.log(data);
    return (
        <>
            <Box className='bg-grey'>
                <TitlePage title='Ajuan Layanan Peliputan - Sinata' />
                <DashboardPanel listMenu={listMenuAdmin}>
                    <HeaderBreadcrumbs pageHeader='Riwayat Ajuan Layanan' currentPage='Riwayat Ajuan'>
                        <Link href='/admins/semua-ajuan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                            Semua Ajuan
                        </Link>
                    </HeaderBreadcrumbs>
                    <Grid container spacing={2}>
                        <Grid item spacing={1} xs={12} md={8}>
                            <Paper className='shadow-md xs:p-4 md:p-6'>
                                <LayananPeliputan data={data} id={id} />
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
        </>
    );
}
