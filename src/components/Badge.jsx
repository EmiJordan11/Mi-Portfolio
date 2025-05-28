

export const Badge  = ({skill, bg= "bg-black/25", height = "md:h-11 xs:h-8", fontSize = "md:text-base xs:text-xs", widhtImg="md:w-5 xs:w-3"})=>{


    return (
        <>
            <div className={`${height} flex items-center gap-3 p-3 rounded-full ${bg}`}>  
                <img src={skill.icon} className={widhtImg}/>
                <p className={fontSize}>{skill.name}</p>
            </div>
        </>
    )
}