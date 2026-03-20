export const SectionHeaderV2 = ({ icon: Icon, title, subtitle }) => {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Icon className="text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-white">{title}</h2>
            </div>
            {subtitle && (
                <p className="text-zinc-500 ml-12">{subtitle}</p>
            )}
        </div>
    )
}
