import prisma from "../../../configs/database";
import { Prisma, Transaksi } from "@prisma/client";

export const createTransaction = async (
  payload: Prisma.TransaksiUncheckedCreateInput
) => {
  return prisma.$transaction(async (prisma) => {
    const existingKeuangan = await prisma.keuangan.findUnique({
      where: { id: payload.keuanganId },
    });

    if (!existingKeuangan) {
      throw new Error("keuanganId tidak ditemukan");
    }

    // Perhitungan dibalik: DEBIT mengurangi, KREDIT menambah
    const updatedDebit =
      payload.type === "DEBIT"
        ? existingKeuangan.debit + payload.amount
        : existingKeuangan.debit;

    const updatedKredit =
      payload.type === "KREDIT"
        ? existingKeuangan.kredit + payload.amount
        : existingKeuangan.kredit;

    // Update total: Kredit - Debit (dibalik dari sebelumnya Debit - Kredit)
    const updatedTotal = updatedKredit - updatedDebit;

    // Buat transaksi baru
    const createdTransaksi = await prisma.transaksi.create({
      data: {
        amount: payload.amount,
        referensi: payload.referensi,
        noJurnal: payload.noJurnal,
        type: payload.type,
        deskripsi: payload.deskripsi,
        transDate: payload.transDate,
        keuanganId: payload.keuanganId,
      },
      include: {
        Keuangan: true,
      },
    });

    // Update tabel Keuangan
    await prisma.keuangan.update({
      where: { id: payload.keuanganId },
      data: {
        lastTransDate: payload.transDate,
        debit: updatedDebit,
        kredit: updatedKredit,
        total: updatedTotal, // Total diupdate dengan formula yang sudah dibalik
      },
    });

    return createdTransaksi;
  });
};

export const addFinance = async (
  payload: Prisma.KeuanganUncheckedCreateInput
) => {
  return prisma.keuangan.create({
    data: payload,
  });
};

export const getTransactionById = async (id: number) => {
  return prisma.transaksi.findUnique({
    where: { id },
  });
};

export const getAllTransactions = async () => {
  return prisma.transaksi.findMany();
};

export const getFinanaceByStudentId = async (studentId: number) => {
  return prisma.keuangan.findFirst({
    where: { studentId },
  });
};

export const getTransaksiByStudentId = async (studentProfileId: number) => {
  return await prisma.transaksi.findMany({
    where: {
      Keuangan: {
        studentId: studentProfileId,
      },
    },
    orderBy: {
      transDate: "asc", // Urutkan berdasarkan tanggal transaksi agar running total benar
    },
    select: {
      transDate: true,
      referensi: true,
      noJurnal: true,
      deskripsi: true,
      amount: true,
      type: true,
    },
  });
};