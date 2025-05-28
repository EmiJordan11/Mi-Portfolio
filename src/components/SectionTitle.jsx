
export const SectionTitle = ({icon: Icon, children}) => {
    return (
        <div className="
            flex items-center gap-3 font-bold mb-4
            md:text-3xl
            xs:text-2xl
        ">
            <Icon />
            <h2>{children}</h2>
        </div>
    )
}