import Chip from '../components/Chip';

export default function Home() {

  const log = input => {
    console.log(input)
  }

  return (
    <div className='container'>
      <Chip variant='primary' onClick={() => log('Primary')}>Primary Clickable</Chip>
      <Chip variant='primary' >Primary</Chip>
      <Chip variant='secondary' onClick={() => log('Secondary')}>secondary Clickable</Chip>
      <Chip variant='secondary' >secondary</Chip>
      <Chip variant='outline' onClick={() => log('Outline')}>outline Clickable</Chip>
      <Chip variant='outline' >outline</Chip>
    </div>
  );
}
