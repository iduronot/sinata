import React from 'react';
import { FilePondProps } from 'react-filepond';

export type TTableRiwayatProps = {
  rows: {
    jenisLayanan: string;
    judulKegiatan: string;
    tanggal: string;
    waktu: string;
    tempat: string;
    status: string;
  }[];
};

export type TFormEditLayananProps = {
  data: Array<any>;
  id: any;
};

export type TDisabledFormDataKegiatanProps = {
  judul_kegiatan: string;
};

export type TDialogConfirmation = {
  title?: string;
  body: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export type TFileUploadProps = Partial<FilePondProps> & {
  label?: string;
};

export type TTambahKegiatanFormProps = {
  onSave: (form: any) => void;
  admin?: Boolean;
};
