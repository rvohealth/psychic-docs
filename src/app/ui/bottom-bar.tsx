export default function BottomBar({ breadcrumbs }: { breadcrumbs: string[] }) {
  return (
    <div id="bottom-bar">
      <div className="breadcrumbs">
        {breadcrumbs.map(breadcrumb => (
          <div className="breadcrumb" key={breadcrumb}>
            {breadcrumb}
          </div>
        ))}
      </div>
    </div>
  )
}
