export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-32 w-32 bg-surface rounded-full mb-4" />
        <div className="h-4 w-48 bg-surface rounded mb-2 mx-auto" />
        <div className="h-3 w-32 bg-surface rounded mx-auto" />
      </div>
    </div>
  )
}
