import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import DisabledFormDataKegiatan from '@/common/components/organism/FormDataKegiatan/DisabledFormDataKegiatan';
import { TFormEditLayananProps } from '@/common/types';
import { dateStringFormatter, timeFormatter } from '@/common/utils/dateFormatter.util';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { getAllDataKegiatan } from '@/services/data-kegiatan';
import { deleteOneLayananPublikasi, updateLayananPublikasiAgenda } from '@/services/layanan-pubagenda';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Button, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import { FilePondFile } from 'filepond';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import TextfieldLabel from '../../atoms/TextfieldLabel';

const form = new FormData();

export default function LayananPublikasiAgenda(props: TFormEditLayananProps) {
    const { data, id } = props;
    let rows = data;

    const { isReady, push } = useRouter();
    const api_image = process.env.NEXT_PUBLIC_API_IMG;

    // Editable File Input
    const [leaflet, setLeaflet] = useState(false);
    const [disposisi, setDisposisi] = useState(false);
    const [editable, setEditable] = useState(false);

    const [autocomplete, setAutocomplete] = useState<string>(''); // Handle autocomplete
    const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]); // Handle autocomplete

    const handleStatusChange = (event: any) => {
        form.set('status', event.target.value);
    };

    const originalForm: Array<any> = [];

    const onSave = async () => {
        const formattedForm = formDataFormatter(form);
        const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm);

        if (isSame === true) {
            toast.warning('Tidak ada perubahan pada data.', {
                theme: 'colored'
            });
        }
        if (isSame === false) {
            const response = await updateLayananPublikasiAgenda(id, form);
            if (response.error === true) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.error === false) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                window.location.reload();
            }
        }
        setOpenSimpan(false);
    };

    const handleJudulChange = (event: any, value: any) => {
        setAutocomplete(value?.judul_kegiatan);
        form.set('id_kegiatan', value.id);
    };

    const handleEdit = () => {
        setEditable(true);
    };

    const handleCancelEdit = () => {
        setEditable(false);
    };

    const judulFromProps = data.map(item => item.tb_kegiatan.judul_kegiatan);
    const getDataKegiatan = useCallback(async () => {
        const response = await getAllDataKegiatan();
        setDataKegiatan(response.data);
        if (judulFromProps.length > 0) {
            setAutocomplete(judulFromProps[0]);
        }
    }, []);

    useEffect(() => {
        if (isReady) {
            getDataKegiatan();
        }
    }, [isReady, rows]);

    useEffect(() => {
        if (judulFromProps.length > 0) {
            setAutocomplete(judulFromProps[0]);
        }
    }, [rows]);

    if (!rows) {
        return null;
    }

    const [openHapus, setOpenHapus] = useState(false);
    const [openSimpan, setOpenSimpan] = useState(false);
    const handleDialogOpen = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(true);
    };
    const handleDialogClose = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(false);
    };

    const handleDelete = async (id: string) => {
        await deleteOneLayananPublikasi(id);
        toast.error('Data berhasil dihapus.', {
            theme: 'colored'
        });
        push('/admins/semua-ajuan');
    };
    return (
        <>
            <Typography variant='h5' className='mb-6'>Layanan Publikasi Agenda di Media Sosial dan Laman UNS</Typography>
            {rows.map((data: any) => {
                return (
                    <>
                        <AutocompleteTitle name='judul_kegiatan' label='Judul Kegiatan' data={dataKegiatan} onChange={handleJudulChange} defaultValue={dataKegiatan.find((item: any) => item.id == data.id_kegiatan)} disabled={!editable} />
                        <DisabledFormDataKegiatan judul_kegiatan={autocomplete} />
                        {leaflet === false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Leaflet Kegiatan</FormLabel>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems='flex-start' className='mb-4'>
                                    {data.leaflet_kegiatan ? (
                                        <Link href={`${api_image}/${data.leaflet_kegiatan}`} target='blank' className='w-[20rem] mt-2'>
                                            <Image src={`${api_image}/${data.leaflet_kegiatan}`} alt={`${data.tb_kegiatan.judul_kegiatan}`} quality={80} layout='responsive' width={20} height={20} className='rounded-lg' />
                                        </Link>
                                    ) : (
                                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                    )}
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3 mt-2' onClick={() => setLeaflet(true)} disabled={!editable}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' onupdatefiles={(fileItems: FilePondFile[]) => {
                                    const file = fileItems[0]?.file;
                                    if (file) {
                                        form.set('leaflet_kegiatan', file);
                                    }
                                }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
                                <Stack direction='row-reverse' className='-mt-2'>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLeaflet(false)} disabled={!editable}>Cancel</Button>
                                </Stack>
                            </>
                        )}
                        <FormControl className='w-full'>
                            <SelectLabel name='status' label='Status' defaultValue={data.status} onChange={handleStatusChange} disabled={!editable}>
                                <MenuItem value='Pending'>Pending</MenuItem>
                                <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                                <MenuItem value='Completed'>Complete</MenuItem>
                                <MenuItem value='Rejected'>Rejected</MenuItem>
                            </SelectLabel>
                        </FormControl>
                        {disposisi === false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                    {data.disposisi ? (
                                        <Link href={`${api_image}/${data.disposisi}`} target='_blank'>
                                            <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.disposisi}</Typography>
                                        </Link>
                                    ) : (
                                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                    )}
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(true)} disabled={!editable}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                                    const file = fileItems[0]?.file;
                                    if (file) {
                                        form.set('disposisi', file);
                                    }
                                }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(false)} disabled={!editable}>Cancel</Button>
                                </Stack>
                            </>
                        )}
                        <TextfieldLabel label='Luaran Layanan' defaultValue={data.luaran_layanan} disabled={!editable} onChange={(event: any) => form.set('luaran_layanan', event.target.value)} multiline maxRows={8} />
                        <Stack direction='row' justifyContent='flex-end' spacing={1} marginTop={6}>
                            {editable ? (
                                <Stack direction='row' spacing={1}>
                                    <ButtonIcon variant='contained' color='success' onClick={handleDialogOpen(setOpenSimpan)} icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                                    <ButtonIcon variant='contained' color='primary' onClick={handleCancelEdit} icon={<CancelIcon className='-mr-1' />}>Batal</ButtonIcon>
                                </Stack>
                            ) : (
                                <ButtonIcon variant='contained' color='primary' onClick={handleEdit} icon={<EditRoundedIcon className='-mr-1' />}>Ubah</ButtonIcon>
                            )}
                            <ButtonIcon variant='outlined' color='error' onClick={handleDialogOpen(setOpenHapus)} icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                        </Stack>
                        <Typography variant='caption' className='italic' marginTop={-4}>Terakhir diubah pada {dateStringFormatter(data.updatedAt)} - {timeFormatter(data.updatedAt)} WIB</Typography>
                        <DialogConfirmation title='Hapus' body='Apakah Anda yakin ingin menghapus data ini?' open={openHapus} onClose={handleDialogClose(setOpenHapus)}>
                            <Stack direction='row' spacing={1} className='mt-4 px-2'>
                                <ButtonBasic variant='contained' onClick={handleDialogClose(setOpenHapus)}>Batal</ButtonBasic>
                                <ButtonBasic variant='outlined' color='error' onClick={() => handleDelete(data.id)}>Hapus</ButtonBasic>
                            </Stack>
                        </DialogConfirmation>
                        <DialogConfirmation title='Ubah Data' body='Apakah Anda yakin ingin menyimpan perubahan pada data ini?' open={openSimpan} onClose={handleDialogClose(setOpenSimpan)}>
                            <Stack direction='row' spacing={1} className='mt-4 px-2'>
                                <ButtonBasic variant='contained' onClick={handleDialogClose(setOpenSimpan)}>Batal</ButtonBasic>
                                <ButtonBasic variant='contained' color='success' onClick={onSave}>Simpan</ButtonBasic>
                            </Stack>
                        </DialogConfirmation>
                    </>
                );
            })}
        </>
    );
}
