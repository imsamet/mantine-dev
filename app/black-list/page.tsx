'use client';
import AddBlackList from '@/components/forms/addBlackList';
import DashboardLayout from '@/components/layout/dashboard';
import Modal from '@/components/modal';
import Table from '@/components/table';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import getBlackList from '@/store/actions/list/getBlackList';
import { dateFormater } from '@/utils/dateFormater';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const { blackList } = useSelector(state => state.list);
  useEffect(() => {
    dispatch(
      getBlackList({
        // Burda filte dinamik verilmeli fakat değerlerin nelere karşılık geldiğini anlayamadığım için statik veriyorum
        db_Id: 9,
        Adi: 'ALL?',
      }),
    );
  }, [dispatch]);
  const tableData = {
    head: {
      name: 'Ad',
      surname: 'Soyad',
      identity: 'TCKN',
      identityNumber: 'Kimlik No',
      birthDay: 'Doğum Tarihi',
      systemDate: 'Sistem Tarihi',
      description: 'Açıklama',
      group: 'Grup',
      nationalityName: 'Milliyet Adı',
      nationalityCode: 'Milliyet',
      user: 'Kullanıcı',
    },
    body: blackList.map(i => ({
      name: i.Adi,
      surname: i.Soy,
      identity: i.Tcno,
      identityNumber: i.Kimlik_no,
      birthDay: dateFormater(i.Dogum_tarihi || ''),
      systemDate: dateFormater(i.Sistem_tarihi || ''),
      description: i.Aciklama,
      group: i.Sistem_grubu,
      nationalityName: i['ULke Adı'],
      nationalityCode: i.Ulke_xml,
      user: i.Kulanici,
    })),
  };
  return (
    <DashboardLayout>
      <div className="container mx-auto py-8">
        <Table title="Table" table={tableData} actionButtonLabel="Add Black List" onClick={open} />
        <Modal opened={opened} close={close}>
          <AddBlackList />
        </Modal>
      </div>
    </DashboardLayout>
  );
}
