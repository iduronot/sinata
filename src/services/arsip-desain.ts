import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const URL = 'arsip-desain';

export async function getAllArsipDesain(params?: string) {
  const URLparams = params || '';
  const url = `${HOST}/${VERSION}/${URL}/lihat?${URLparams}`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getOneArsipDesain(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/lihat`;
  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function setOneArsipDesain(data: any) {
  const url = `${HOST}/${VERSION}/${URL}/tambah`;
  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function updateOneArsipDesain(id: string, data: any) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/edit`;
  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}

export async function deleteOneArsipDesain(id: string) {
  const url = `${HOST}/${VERSION}/${URL}/${id}/delete`;
  return callAPI({
    url,
    method: 'DELETE',
    token: true,
  });
}
