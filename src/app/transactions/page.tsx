import AdminChart from '@/components/AdminChart/AdminChart';
import Card from '@/components/Cards/Cards';
import StatsCard from '@/components/StatsCard/StatsCard';
import Table from '@/components/Table/Table';
import { Button } from '@/components/ui/button';
import ButtonIconRight from '@/components/ui/shared/ButtonIconRight';
import { bigTable, cardDetails, data, smallData, smallTable } from '@/constants';
import React from 'react'
import { RiAddCircleFill } from 'react-icons/ri';

const Transactions = () => {
  return (
    <section className='wrapper'>
      <div className='flex-1 flex flex-col gap-4'>
        <section className='flex gap-2 w-[80%]'>
          <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
        </section>
        <section className='flex flex-col gap-4'>
          <AdminChart variant='simple' />
        </section>
        <section className='w-full'>
          <Table
            heading='Liste de Transactions effectuées'
            variant='big'
            columns={bigTable}
            data={data}
          />
        </section>
      </div>
      <div className='max-w-[300px] flex flex-col gap-[13px]'>
        <div className='w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]'>
          <StatsCard entry={[20, 80]} />
        </div>
        <div className='w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]'>
          <StatsCard entry={[20, 80]} />
        </div>
        <div className='w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]'>
          <StatsCard entry={[20, 80]} />
        </div>
        <div className='w-full bg-white rounded-[10px] px-[14px] py-3 flex-between gap-2'>
          <Button
            variant='default'
            type='button'
            className='primary-btn flex-between '
          >
            <span className='flex-1 text-center'>
              Recharger
            </span>
            <RiAddCircleFill size={24} className='fill-white' />
          </Button>
          <Button
            variant='secondary'
            type='button'
            className='bg-dark3 flex-between text-white text-pretty'
          >
            <span className='flex-1 text-center'>
              Recharger une carte
            </span>
            <RiAddCircleFill size={24} className='fill-white' />
          </Button>
        </div>
        <div className='w-full bg-white rounded-[10px] px-[14px] py-3'>
          <Table variant='small' columns={smallTable} data={smallData} />
        </div>
      </div>
    </section>
  )
}

export default Transactions;
