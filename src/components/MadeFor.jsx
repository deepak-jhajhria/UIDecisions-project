import Description from "./common/Description"
import Heading from "./common/Heading"
import { madeForSecList } from "./common/Helper"

const MadeFor = () => {
    return (
        <div className="pt-10">
            <div className="container max-w-[1230px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-[29px]">
                    <div className="border border-primary-dark rounded-[30px] lg:col-span-3 py-10 sm:py-16 lg:py-[93px] px-7 sm:px-[57px]">
                        <Heading className="max-w-[170px] sm:max-w-[260px] lg:max-w-[358px] !px-0" title="Made for &nbsp; &nbsp; high-velocity product people" />
                    </div>
                    {madeForSecList.map((item, index) => (
                        <div key={index} className={`flex made-sec-card lg:col-span-2 py-10 sm:py-16 lg:py-[87px] px-7 sm:px-[39px] relative ${index === 0 && "after:top-0 after:right-0 py-12 sm:py-16 lg:!pt-20 lg:!pb-[76px] after:bg-orange"} ${index === 1 && "lg:!col-span-3 lg:!px-[57px] after:bottom-0 after:right-0 after:bg-yellow after:!duration-500"} ${index === 2 && "after:bottom-0 after:right-0 after:bg-tertiary"}`}>
                            <div className={`relative z-20 flex flex-col max-w-[253px] ${index === 1 && "max-w-[279px]"}`}>
                                <h4 className="text-2xl font-medium text-white lg:text-custom-3xl sm:text-3xl lg:!leading-[38px]">{item.title}</h4>
                                <Description className={`mt-5 sm:mt-[30px] max-w-[253px] ${index === 1 && "max-w-[279px]"}`} description={item.description} />
                            </div>
                            <img className={`absolute pointer-events-none w-[30%] z-10 ${index === 0 && "-top-1 -right-1 lg:w-[220px] lg:h-[225px]"} ${index === 1 && "lg:w-[270px] lg:h-[258px] bottom-0 right-3"} ${index === 2 && "lg:w-[230px] lg:h-[270px] bottom-0 -right-2"}`} src={item.animateImage} alt="animateimage" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MadeFor
