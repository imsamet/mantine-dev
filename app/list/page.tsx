'use client';
import DashboardLayout from '@/components/layout/dashboard';
import Table from '@/components/table';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import getList from '@/store/actions/list/filter';
import { dateFormater } from '@/utils/dateFormater';
import { getDayName } from '@/utils/getDayName';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.blackList);
  useEffect(() => {
    dispatch(
      getList({
        // Burda filte dinamik verilmeli fakat değerlerin nelere karşılık geldiğini anlayamadığım için statik veriyorum
        db_Id: 9,
        xRez_Sirket: 9,
        xBas_Tar: '2024-06-01',
        xBit_Tar: '2024-06-10',
        xtip: 1,
        kon1: 'ALL',
        kon2: 'BB',
        xchkFis_Fazla_otel_10: 0,
        bas_Yil: 2022,
        bit_Yil: 2022,
        fisrci_Kapalioda_10: 0,
        xRez_C_W: 'C',
        xSistem_Tarihi: '2024-01-01',
        xAlis_Tarihi: '2024-01-01',
        sistem_Bas1: '2020-01-01',
        sistem_Bit1: '2029-01-01',
        pmdahil_10: 0,
        tip_1: '001',
        xFis_Bela_tutar_10: 0,
        trace_Dus_10: 0,
        cev_01: null,
      }),
    );
  }, []);
  const tableData = {
    head: {
      date: 'Tarih',
      count: 'Mevcut',
      room: 'Oda',
      adult: 'Yetişkin',
      child: 'Çocuk',
      free: 'Free',
      totalPeople: 'Toplam Kişi',
      difference: 'Fark',
      net: 'Net %',
      latestSituation: 'Son Durum',
      package: 'Package',
      dayDate: 'Gün Tarih',
      dayName: 'Gün İsim',
      Forecast: 'Forecast',
    },
    body: list.map(i => ({
      date: dateFormater(i.Tarih),
      count: i.Mevcut,
      room: i.Oda,
      adult: i.Yetişkin,
      child: i.Çocuk,
      free: i.Free,
      totalPeople: i['Toplam Kişi'],
      difference: i.Fark_Yuzde, // ????
      net: i['Yuzde%(Net)'],
      latestSituation: i['Son Durum'],
      package: i['Package Tutar'],
      dayDate: i['Gun Tarih'],
      dayName: getDayName(i.Tarih),
      Forecast: i.Forecast,
    })),
  };
  return (
    <DashboardLayout>
      <div className="container mx-auto py-8">
        <Table title="Table" table={tableData} />
      </div>
    </DashboardLayout>
  );
}
