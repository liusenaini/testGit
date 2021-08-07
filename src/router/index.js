
import React from 'react'
import { Redirect } from 'react-router-dom'

//引入路由组件
import WYDiscover from '@/pages/discover/index.js'
import WYMine from '@/pages/mine/index.js'
import WYFriend from '@/pages/friend/index.js'
import WYPlayer from '@/pages/player/index.js'

//引入discover路由下的子路由组件
import WYRecommend from '@/pages/discover/c-pages/recommend/index.js'
import WYRanking from '@/pages/discover/c-pages/ranking/index.js'
import WYSongs from '@/pages/discover/c-pages/songs/index.js'
import WYDjradio from '@/pages/discover/c-pages/djradio/index.js'
import WYArtist from '@/pages/discover/c-pages/artist/index.js'
import WYAlbum from '@/pages/discover/c-pages/album/index.js'



const routes = [
    {
        path: '/',
        exact: true,
        render: () => (<Redirect to='/discover' />)  //重定向到/discover
    },
    {
        path: '/discover',
        component: WYDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => (<Redirect to='/discover/recommend' />)  //重定向到/recommend
            },
            {
                path: '/discover/recommend',
                component: WYRecommend
            },
            {
                path: '/discover/ranking',
                component: WYRanking
            },
            {
                path: '/discover/songs',
                component: WYSongs
            },
            {
                path: '/discover/djradio',
                component: WYDjradio
            },
            {
                path: '/discover/artist',
                component: WYArtist
            },
            {
                path: '/discover/album',
                component: WYAlbum
            },
            
        ]
    },

    {
        path: '/mine',
        component: WYMine
    },
    {
        path: '/friend',
        component: WYFriend
    },
    {
        path: '/play',
        component: WYPlayer
    },
]

export default routes;