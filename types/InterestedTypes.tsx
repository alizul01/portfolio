import React from 'react';
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineUserGroup, HiOutlineVideoCamera } from 'react-icons/hi';
import  colors  from 'tailwindcss/colors';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

export type InterestedTypes = { 
    title: string;
    icon: React.ReactElement;
    color: string;
}

export  const INTEREST: InterestedTypes[] = [
    {
        title: 'Edu-Tech',
        icon: <HiOutlineAcademicCap />,
        color: 'bg-teal-700 text-teal-200'
    },
    {
        title: 'Leadership',
        icon: <HiOutlineUserGroup />,
        color: 'bg-red-700 text-red-200'
    },
    {
        'title' : 'Front-end',
        'icon' : <HiOutlineCode />,
        'color' : 'bg-purple-700 text-purple-200'
    },
    {
        'title' : 'Creator',
        'icon' : <HiOutlineVideoCamera />,
        'color' : 'bg-blue-700 text-blue-200'
    },
]