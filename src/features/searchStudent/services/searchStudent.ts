import * as studentRepository from "../repositories/searchStudent";

export const searchStudent = async (query: string) => {
  return await studentRepository.searchStudent(query);
};
