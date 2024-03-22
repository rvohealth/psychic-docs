import GuidesLeftSidebar from '../ui/guides/left-sidebar'
import GuidesDocs from '../ui/guides/docs'
import { useCallback, useEffect, useState } from 'react'
import BottomBar from '../ui/bottom-bar'

function scrollLeftSidebarToAnchor(anchor: any) {
  const sidebar = document.querySelector('.left-sidebar')

  if (anchor && sidebar) {
    sidebar.querySelectorAll('a').forEach(el => el.classList.remove('active'))
    anchor.classList.add('active')
    anchor.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function GuidesPage() {
  const [currH2, setCurrH2] = useState<string | null>(null)
  const [currH3, setCurrH3] = useState<string | null>(null)

  const listenForScroll = useCallback(
    (e: any) => {
      const h2s = [...document.querySelectorAll('.docs.guides h2')]
      const h3s = [...document.querySelectorAll('.docs.guides h3')]
      const scrollY = window.scrollY + 60

      const h2 = h2s.find((h2, index) => {
        return getElemDistance(h2) <= scrollY && getElemDistance(h2s[index + 1]) > scrollY
      })

      const newH2 = h2?.innerHTML?.toLowerCase() || null
      if (currH2 !== newH2) {
        setCurrH2(newH2)
        setCurrH3(null)

        if (h2) {
          const anchor = document.querySelector(`.left-sidebar a[href="#${h2.id}"]`)
          if (anchor) {
            scrollLeftSidebarToAnchor(anchor)
          }
        }
      } else {
        const h3 = h3s.find((h3, index) => {
          return getElemDistance(h3) <= scrollY && getElemDistance(h3s[index + 1]) > scrollY
        })
        setCurrH3(h3?.innerHTML?.toLowerCase() || null)

        if (h3) {
          const anchor = document.querySelector(`.left-sidebar a[href="#${h3.id}"]`)
          if (anchor) {
            scrollLeftSidebarToAnchor(anchor)
          }
        }
      }
    },
    [currH2]
  )

  useEffect(() => {
    window.addEventListener('scroll', listenForScroll)
    return () => {
      window.removeEventListener('scroll', listenForScroll)
    }
  }, [listenForScroll])

  return (
    <div className="page guides">
      <GuidesLeftSidebar />
      <GuidesDocs />
      <BottomBar breadcrumbs={[currH2, currH3].filter(val => !!val) as string[]} />
    </div>
  )
}

// Get an element's distance from the top of the page
var getElemDistance = function (elem: any) {
  var location = 0
  if (elem.offsetParent) {
    do {
      location += elem.offsetTop
      elem = elem.offsetParent as any
    } while (elem)
  }
  return location >= 0 ? location : 0
}
