import { Flex, Box } from '@radix-ui/themes';
import HabitsList from '@/components/habits';
import ClockAndWeather from '@/components/shared/clock-and-weather';
import User from '@/components/shared/user';

const RightColumn = () => {
  return (
    <Flex justify='between' align='end' direction='column'>
      <Flex
        direction='column'
        align='center'
        height='100%'
        p='6'
        gap='6'
        className='w-3/4'
      >
        <User />
        <Box className='h-5 w-full bg-transparent' />
        <ClockAndWeather />
        <HabitsList />
      </Flex>
    </Flex>
  );
};

export default RightColumn;
