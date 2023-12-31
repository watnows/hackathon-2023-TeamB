'use client'

import { Box, Link, VStack } from '@chakra-ui/react'
import { Bank, Cube, Gear, House, Trash, Wallet } from '@phosphor-icons/react'
import { usePathname, useRouter } from 'next/navigation'
import NavigationMenuItem from './ui/NavigationMenuItem'
import NewEntryButton from './ui/NewEntryButton'
import CommunitySelector from './ui/CommutitySelector'
import MyAvatar from './ui/MyAvatar'
import { globalState } from '../_stores/globalState'

export default function NavigationMenu() {
  const iconSize = 24
  const iconWeight = 'regular'
  const navMenuItems = [
    {
      disabledIcon: <House weight={iconWeight} size={iconSize} />,
      enabledIcon: <House weight={'fill'} size={iconSize} />,
      label: 'ホーム',
      href: '/home',
    },
    {
      disabledIcon: <Cube weight={iconWeight} size={iconSize} />,
      enabledIcon: <Cube weight={'fill'} size={iconSize} />,
      label: 'アイテム一覧',
      href: '/entry',
    },
    {
      disabledIcon: <Bank weight={iconWeight} size={iconSize} />,
      enabledIcon: <Bank weight={'fill'} size={iconSize} />,
      label: '共同出資',
      href: '/fund',
    },
    {
      disabledIcon: <Wallet weight={iconWeight} size={iconSize} />,
      enabledIcon: <Wallet weight={'fill'} size={iconSize} />,
      label: 'ウォレット',
      href: '/wallet',
    },
    {
      disabledIcon: <Gear weight={iconWeight} size={iconSize} />,
      enabledIcon: <Gear weight={'fill'} size={iconSize} />,
      label: '設定',
      href: '/preferences',
    },
  ]

  const router = useRouter()
  const isCurrent = (href: string) => {
    const pathName = usePathname()
    return pathName.startsWith(href)
  }

  const dragonMode = globalState.dragonMode

  return (
    <Box
      as="nav"
      width="260px"
      p={4}
      bg={dragonMode ? 'green.300' : 'gray.100'}
      height="100vh"
    >
      <VStack
        justify="center"
        alignItems="left"
        spacing={3}
        margin={'auto'}
        height={'100%'}
      >
        <CommunitySelector />
        <NewEntryButton />

        {navMenuItems.map((e) => {
          return (
            <NavigationMenuItem
              key={e.href}
              icon={isCurrent(e.href) ? e.enabledIcon : e.disabledIcon}
              href={e.href}
              isCurrent={isCurrent(e.href)}
            >
              {e.label}
            </NavigationMenuItem>
          )
        })}
        <Box flexGrow={2}></Box>
        <MyAvatar />
      </VStack>
    </Box>
  )
}
