import * as nilaiRepository from "../repositories/grade";

export const addNilai = async (
  studentProfileId: number,
  mapelKelasId: number,
  skor: number,
  capaianKompetensi?: string  // Added optional parameter
) => {
  return await nilaiRepository.createNilai(
    studentProfileId,
    mapelKelasId,
    skor,
    capaianKompetensi  // Pass the new field to repository
  );
};

export const fetchNilaiByKelas = async (kelasId: number, semester: string) => {
  return await nilaiRepository.getNilaiByKelas(kelasId, semester);
};

export const modifyNilai = async (
  id: number, 
  skor: number,
  capaianKompetensi?: string  // Added optional parameter
) => {
  return await nilaiRepository.updateNilai(id, skor, capaianKompetensi);
};

export const getGradesLessonByStudent = async (userId: number) => {
  return await nilaiRepository.getGradesLessonByStudent(userId);
};

export const getFormData = async () => {
  return await nilaiRepository.getFormData();
};