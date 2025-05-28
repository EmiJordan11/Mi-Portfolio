
export const SectionTitle = ({icon: Icon, children}) => {
    return (
        <div className="
            flex items-center gap-3 text-3xl font-bold mb-4
            max-md:text-2xl
        ">
            <Icon />
            <h2>{children}</h2>
        </div>
    )
}