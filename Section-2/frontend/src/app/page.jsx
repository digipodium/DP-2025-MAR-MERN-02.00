import React from 'react'
import Card from '@/components/card';

const page = () => {
  return (
    <div className='w-4/5 mx-auto space-y-8'>
      <Card title="This is title" description="This is a description." />
      <Card title="Another title" description="This is another description." />
      <Card title="Yet another title" description="This is yet another description." />
    </div>
  )
}

export default page;