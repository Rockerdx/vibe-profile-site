import { useCallback } from 'react'
import { downloadResume } from '@/lib/resume'

export const useResumeDownload = () => {
  const handleDownload = useCallback(async () => {
    await downloadResume()
  }, [])

  return { handleDownload }
}

export default useResumeDownload
