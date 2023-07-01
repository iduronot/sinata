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

export type TLayananPeliputanProps = {
  data: Array<any>;
  id: any;
};

export type TDisabledFormDataKegiatanProps = {
  judul_kegiatan: string;
};
