import { Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import Link from 'next/link';
import { TEventCardProps } from '@/common/types/event-card';

export default function EventCard(props: TEventCardProps) {
    const {
        eventDate,
        eventTime,
        eventImage,
        eventTitle,
        eventDesc,
        eventLink
    } = props
  return (
    <Card sx={{ maxWidth: 200, borderColor: '#e5e7eb' }} variant='outlined' className='rounded-xl shadow-md'>
        <CardHeader className='text-center py-3 h-7' title={
            <Typography variant='caption' color='text.primary' className='truncate'>
                <CalendarMonthOutlinedIcon sx={{ fontSize: 10}} color='primary'/> {eventDate}
                <ScheduleOutlinedIcon sx={{ fontSize: 10, marginLeft: 1}} color='primary'/> {eventTime}
            </Typography>}
        />
        <CardMedia component='img' height='128' image={eventImage} alt='Event Image' />
        <CardContent sx={{ height: 120 }}>
            <Link href={`/agenda/${eventLink}`}>
                <Typography variant='body1' color='text.primary' className='mb-1 truncate hover:text-primary transition'>{eventTitle}</Typography>
            </Link>
            <Typography variant='body2' color='text.secondary' className='leading-[1rem] line-clamp-3'>{eventDesc}</Typography>
        </CardContent>
        <Divider light sx={{ borderColor: '#e5e7eb'}} />
        <CardActions className='justify-center h-7'>
            <Link href={`/agenda/${eventLink}`}>
                <IconButton aria-label='more' color='primary'><VisibilityIcon fontSize='small'/><Typography variant='caption' className='pl-1'>More</Typography></IconButton>
            </Link>
        </CardActions>
    </Card>
  )
}
