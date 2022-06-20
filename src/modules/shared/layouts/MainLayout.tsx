export const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="h-screen bg-zinc-300">
      {/* {children} */}
      <div className="flex flex-col gap-4 p-8 bg-zinc-300">{children}</div>
    </div>
  )
}
