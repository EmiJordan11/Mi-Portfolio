
export const SectionTitle = ({icon: Icon, children}) => {
    return (
        <div className="flex items-center gap-3 font-bold text-3xl mb-4">
            <Icon />
            <h2>{children}</h2>
        </div>
    )
}