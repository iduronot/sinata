import { Box, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle';
import data from '@/json/tb_kegiatan.json';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import dayjs from 'dayjs';
import FileUpload from '@/common/components/atoms/FileUpload';
import CollapsibleAlert from '@/common/components/atoms/CollapsibleAlert';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import Link from 'next/link';
import { TFormTambahLayananProps } from '@/common/types';
import { useRouter } from 'next/router';
import { getAllDataKegiatan, getAllDataKegiatanUser } from '@/services/data-kegiatan';
import DisabledFormDataKegiatan from '../FormDataKegiatan/DisabledFormDataKegiatan';
import { FilePondFile } from 'filepond';
import DialogConfirmation from '../../atoms/DialogConfirmation';
import { getAccountID } from '@/common/utils/decryptToken';

const form = new FormData();

export default function PublikasiAgendaForm(props: TFormTambahLayananProps) {
    const { onSave, admin } = props;
    const { isReady } = useRouter();

    const isAdmin = admin ? true : false;
    const [autocomplete, setAutocomplete] = useState<string>(''); // Handle autocomplete
    const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]); // Handle autocomplete

    const getDataKegiatan = useCallback(async () => {
        if (isAdmin) {
            const response = await getAllDataKegiatan();
            setDataKegiatan(response.data);
        }
    }, [getAllDataKegiatan]);

    const id_account = getAccountID();

    const getDataKegiatanUser = useCallback(async () => {
        if (!isAdmin) {
            if (id_account) {
                const response = await getAllDataKegiatanUser(id_account);
                setDataKegiatan(response.data);
            }
        }
    }, [getAllDataKegiatanUser]);

    useEffect(() => {
        if (isReady) {
            if (isAdmin) {
                getDataKegiatan();
            }
            if (!isAdmin) {
                getDataKegiatanUser();
            }
        }
    }, [isReady]);

    const handleJudulChange = (event: any, value: any) => {
        setAutocomplete(value?.judul_kegiatan);
        form.set('id_kegiatan', value?.id);
    };

    const [open, setOpen] = useState(false);
    const handleDialogOpen = () => {
        setOpen(true);
    };
    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        onSave(form);
        setOpen(false);
    };
    return (
        <Box>
            {!isAdmin ? (
                <CollapsibleAlert type='warning' className='mb-4'>
                    <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/users/tambah-kegiatan' className='underline hover:opacity-75 transition'>Tambah Kegiatan</Link></Typography>
                </CollapsibleAlert>
            ) : (
                <CollapsibleAlert type='warning' className='mb-4'>
                    <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/admins/daftar-kegiatan/tambah' className='underline hover:opacity-75 transition'>Tambah Kegiatan</Link></Typography>
                </CollapsibleAlert>
            )}
            <AutocompleteTitle name='judul_kegiatan' label='Judul Kegiatan' data={dataKegiatan} onChange={handleJudulChange} />
            <DisabledFormDataKegiatan judul_kegiatan={autocomplete} />
            <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' onupdatefiles={(fileItems: FilePondFile[]) => {
                const file = fileItems[0]?.file;
                if (file) {
                    form.set('leaflet_kegiatan', file);
                }
            }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
            <TextfieldLabel label='Caption' name='caption' onChange={(event: any) => form.set('caption', event.target.value)} multiline maxRows={8} placeholder='Caption dan penjelasan dari agenda Anda' />
            {isAdmin ? (
                <>
                    <SelectLabel label='Status' defaultValue='Pending' onChange={(event: any) => form.set('status', event.target.value)}>
                        <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                        <MenuItem value='Pending'>Pending</MenuItem>
                        <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                        <MenuItem value='Completed'>Complete</MenuItem>
                        <MenuItem value='Rejected'>Rejected</MenuItem>
                    </SelectLabel>
                    <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                        const file = fileItems[0]?.file;
                        if (file) {
                            form.set('disposisi', file);
                        }
                    }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                    <TextfieldLabel label='Luaran Layanan' onChange={(event: any) => form.set('luaran_layanan', event.target.value)} multiline maxRows={8} />
                    <ButtonBasic onClick={handleDialogOpen} variant='contained'>Tambahkan Ajuan</ButtonBasic>
                </>
            ) : (
                <>
                    <CollapsibleAlert type='info' className='mb-4'>
                        <Typography className='text-dark' variant='body2'>Sebelum menekan tombol <b>Ajukan Layanan</b>, pastikan data yang Anda masukkan sudah benar!</Typography>
                    </CollapsibleAlert>
                    <ButtonBasic onClick={handleDialogOpen} type='submit' variant='contained'>Ajukan Layanan</ButtonBasic>
                </>
            )}
            <DialogConfirmation title='Tambahkan Data' body='Apakah Anda yakin ingin menambahkan data ini? Pastikan semua data telah terisi dengan benar.' open={open} onClose={handleDialogClose}>
                <Stack direction='row' spacing={1} className='mt-4 px-2 mb-4'>
                    <ButtonBasic variant='contained' onClick={handleDialogClose}>Batal</ButtonBasic>
                    <ButtonBasic variant='contained' color='success' onClick={handleSubmit}>Tambahkan</ButtonBasic>
                </Stack>
            </DialogConfirmation>
        </Box>
    );
}
