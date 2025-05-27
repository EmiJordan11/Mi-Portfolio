

export const Badge  = ({skill, bg= "bg-black/25", height = "h-11", fontSize = "text-base", widhtImg="w-5"})=>{


    return (
        <>
            <div className={`${height} flex items-center gap-3 p-3 rounded-full ${bg}`}>  
                <img src={skill.icon} className={widhtImg}/>
                <p className={fontSize}>{skill.name}</p>
            </div>
        </>
    )
}