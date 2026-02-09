export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}<h2>Featured products</h2></section>
}