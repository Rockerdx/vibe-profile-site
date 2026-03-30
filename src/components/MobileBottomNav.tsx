'use client'

import { motion } from 'framer-motion'
import { 
  User, 
  Briefcase, 
  Code2, 
  FolderGit2, 
  Mail,
  Home
} from 'lucide-react'

export type TabId = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact'

interface Tab {
  id: TabId
  label: string
  icon: React.ElementType
}

const tabs: Tab[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Work', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
]

interface MobileBottomNavProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export default function MobileBottomNav({ activeTab, onTabChange }: MobileBottomNavProps) {

  return (
    <nav className="bottom-nav glass border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="h-[80px] flex items-center justify-around px-2 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`tab-button relative ${
                isActive ? 'tab-button-active' : 'tab-button-inactive'
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <motion.div
                className="relative"
                animate={{
                  scale: isActive ? 1.1 : 1,
                  y: isActive ? -2 : 0,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {/* Active indicator background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 -m-2 rounded-2xl bg-accent/10"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className="relative z-10"
                />
              </motion.div>
              
              <span className={`text-[10px] font-medium ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>

              {/* Active dot indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
