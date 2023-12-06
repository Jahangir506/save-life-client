const TitleSection = ({subHeading, heading}) => {
    return(
        <>
             <div className="text-center space-y-3">
                <p className="text-red-500 uppercase font-semibold">{subHeading}</p>
                <h2 className="text-2xl lg:text-5xl text-black font-bold">{heading}</h2>
             </div>
        </>
    )}
export default TitleSection;