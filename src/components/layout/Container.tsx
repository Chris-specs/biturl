export default function Container({
    children,
    maxWidth
}: {
    children: React.ReactNode
    maxWidth?: number
}) {
    return (
        <div style={{ maxWidth }} className="w-full max-w-7xl mx-auto">
            { children }
        </div>
    )
}
