import Card from '@/components/Cards/Cards';
import Table from '@/components/Table/Table';
import { bigTable, cardDetails, data } from '@/constants';
import React from 'react'

const Utilisateurs = () => {
  return (
    <section className='wrapper max-w-[856px]'>
      <div className='flex-1 flex flex-col gap-4'>
        <section className='flex gap-2'>
          <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
          <Card key={1} {...cardDetails[1]} />
        </section>
        <section className='w-full'>
          <Table heading="Liste des utilisateurs" variant='big' columns={bigTable} data={data} />
        </section>
      </div>
    </section>
  )
}

export default Utilisateurs;
