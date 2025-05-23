

export const Badge  = ({name, logo, tag, bg})=>{
    return (
        <>
        {/* bg-white/10 */}
            <div className={`h-11 flex items-center gap-3 p-3 rounded-full bg-black/25`}>  
                <img src={logo} className="w-5"/>
                <p className="text-[16px]">{name}</p>
            </div>
        </>
    )
}