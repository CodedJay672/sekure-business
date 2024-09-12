import Card from '@/components/Cards/Cards';
import Table from '@/components/Table/Table';
import { bigTable, cardDetails, data } from '@/constants';
import React from 'react'

const Utilisateurs = () => {
  return (
    <section className='wrapper'>
      <div className='flex-1 flex flex-col gap-4'>
        <section className='flex gap-2'>
          <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
          <Card key={1} {...cardDetails[1]} />
        </section>
        <div className='w-full bg-white'>
          <section className='max-w-[720px] 2xl:max-w-[1010px]'>
            <Table heading="Liste des utilisateurs" variant='big' columns={bigTable} data={data} />
          </section>
        </div>
      </div>
    </section>
  )
}

export default Utilisateurs;
