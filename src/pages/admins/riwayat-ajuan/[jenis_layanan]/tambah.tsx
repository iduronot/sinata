import TitlePage from '@/common/components/atoms/TitlePage';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { Box, Grid, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { listMenuAdmin } from '../../dashboard';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import Link from 'next/link';
import Image from 'next/image';

export default function TambahAjuanLayanan() {
    const { query, isReady } = useRouter();
    const { jenis_layanan } = query;

    return (
        <Box className='bg-grey'>
            <TitlePage title={isReady ? `Tambah Ajuan ${jenis_layanan} - Sinata` : 'Sinata Loading...'} />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader={`Tambah Ajuan ${jenis_layanan}`} currentPage='Tambah Ajuan'>
                    <Link href='/admins/semua-ajuan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Semua Ajuan
                    </Link>
                </HeaderBreadcrumbs>
                <Grid container spacing={2}>
                    <Grid item spacing={1} xs={12} md={8}>
                        <Paper className='shadow-md xs:p-4 md:p-6'>
                            {/* {jenis_layanan === 'Layanan Peliputan' ? (
                                    <LayananPeliputan data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Konferensi Pers' ? (
                                    <LayananKonpers data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Pembaruan Informasi' ? (
                                    <LayananPeminformasi data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Live Streaming' ? (
                                    <LayananLiveStreaming data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Publikasi Agenda' ? (
                                    <LayananPublikasiAgenda data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Publikasi di Majalah' ? (
                                    <LayananPublikasiMajalah data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Opini di Media' ? (
                                    <LayananOpini data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Penayangan Konten di Videotron' ? (
                                    <LayananVideotron data={data} id={id} />
                                ) : jenis_layanan === 'Layanan Pemasangan Baliho' ? (
                                    <LayananBaliho data={data} id={id} />
                                ) : null} */}
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
    );
}
